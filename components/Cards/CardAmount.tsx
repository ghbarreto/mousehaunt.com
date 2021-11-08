import { Formik, Field, Form, validateYupSchema } from "formik";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";

import { WhitelistSale } from "../../typechain/WhitelistSale";
import WhitelistSaleJson from "../../contracts/WhitelistSale.sol/WhitelistSale.json";
import { BoosterSale } from "../../typechain/BoosterSale";
import BoosterSaleJson from "../../contracts/booster/BoosterSale.sol/BoosterSale.json";

import React, { useState, useEffect } from "react";
import { Contract, ethers } from "ethers";
import increment from "../../public/images/increment.png";
import decrement from "../../public/images/decrement.png";
import BUSDJson from "../../contracts/MouseHauntToken.sol/MouseHauntToken.json";

import {
  FormDisplay,
  FormMainSection,
  ContentForm,
  IconStyle,
  ButtonFormat,
  FormIncremental,
  Warning,
} from "./stylesForm";
import { Button } from "../Button";
import config from "../../utils/config";
import waitFor from "../../utils/waitFor";
import { isTransactionMined } from "../../utils/blockchain";

interface Props {
  index: number;
}

const MHT_TO_BUSD = Number(
  config.bscTestnet.WhitelistSale.PrivateSale.MHTtoBUSD
);

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

function isNumeric(str: string): boolean {
  if (typeof str != "string") return false;
  return !isNaN(str as unknown as number) && !isNaN(parseFloat(str));
}

const CardAmount: React.FC<Props> = ({ index }: Props) => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [whitelistSale, setWhitelistSale] = useState<WhitelistSale>();
  const [boosterSale, setBoosterSale] = useState<BoosterSale>();
  const [busd, setBusd] = useState<Contract>();
  const [boosterAmount, setBoosterAmount] = useState(1);
  const [buying, setBuying] = useState(false);

  const minBusdAmount =
    Number(config.bscTestnet.WhitelistSale.PrivateSale.minMhtAmount) *
    Number(config.bscTestnet.WhitelistSale.PrivateSale.MHTtoBUSD);
  const maxBusdAmount =
    Number(config.bscTestnet.WhitelistSale.PrivateSale.maxMhtAmount) *
    Number(config.bscTestnet.WhitelistSale.PrivateSale.MHTtoBUSD);

  const [busdAmount, setBusdAmount] = useState(minBusdAmount.toString());
  const [mhtAmount, setMhtAmount] = useState(
    config.bscTestnet.WhitelistSale.PrivateSale.minMhtAmount
  );
  const [exceededAmount, setExceededAmount] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      const p = new ethers.providers.Web3Provider(window.ethereum as any);
      const signer = p.getSigner(0);
      const wl = new ethers.Contract(
        config.bscTestnet.WhitelistSale.PrivateSale.address,
        WhitelistSaleJson.abi,
        signer
      ) as WhitelistSale;
      const b = new ethers.Contract(
        config.bscTestnet.BoosterSale.address,
        BoosterSaleJson.abi,
        signer
      ) as BoosterSale;
      const busdContract = new ethers.Contract(
        config.bscTestnet.BUSD.address,
        BUSDJson.abi,
        signer
      ) as WhitelistSale;

      setProvider(p);
      setWhitelistSale(wl);
      setBoosterSale(b);
      setBusd(busdContract);
    }
  }, []);

  useEffect(() => {
    if (
      Number(busdAmount) < minBusdAmount ||
      Number(busdAmount) > maxBusdAmount
    ) {
      setExceededAmount(true);
    } else {
      setExceededAmount(false);
    }
  }, [busdAmount, mhtAmount, minBusdAmount, maxBusdAmount]);

  const onChange = (event: any) => {
    const { value, id } = event.target;
    if (!value) {
      setBusdAmount("");
      setMhtAmount("");
    } else if (!isNumeric(value)) {
      return;
    } else {
      if (id === "amount") {
        setBusdAmount(Number(value).toString());
        setMhtAmount((Number(value) / MHT_TO_BUSD).toFixed(2).toString());
      } else {
        setBusdAmount((Number(value) * MHT_TO_BUSD).toFixed(2).toString());
        setMhtAmount(Number(value).toString());
      }
    }
  };

  const buyMHT = async () => {
    if (provider) {
      try {
        setBuying(true);
        const tx = await busd?.approve(
          config.bscTestnet.WhitelistSale.PrivateSale.address,
          ethers.utils.parseEther(busdAmount.toString())
        );
        await waitFor(() => isTransactionMined(provider, tx.hash), 30e3);
        await whitelistSale?.buy(ethers.utils.parseEther(mhtAmount));
      } catch (err: any) {
        alert(err.data.message);
      }
      setBuying(false);
    }
  };

  const buyBooster = async (index: number) => {
    if (provider) {
      try {
        const booster =
          index === 1
            ? config.bscTestnet.BMHTE.address
            : config.bscTestnet.BMHTL.address;
        const boosterPrice =
          index === 1
            ? config.bscTestnet.BMHTE.busdPrice
            : config.bscTestnet.BMHTL.busdPrice;

        setBuying(true);
        console.log(
          ethers.utils
            .parseEther(boosterPrice.toString())
            .mul(boosterAmount)
            .toString()
        );
        const tx = await busd?.approve(
          config.bscTestnet.BoosterSale.address,
          ethers.utils.parseEther(boosterPrice.toString()).mul(boosterAmount)
        );
        await waitFor(() => isTransactionMined(provider, tx.hash), 30e3);
        await boosterSale?.buy(
          booster,
          ethers.utils.parseEther(boosterAmount.toString())
        );
      } catch (err: any) {
        alert(err.data ? err.data.message : err.message);
      }
      setBuying(false);
    }
  };

  const displayIncrementalButtons = () => {
    return (
      <>
        <FormIncremental>
          <label>Amount of boosters</label> <br />
          <span
            style={{
              margin: "5px",
              position: "relative",
              top: "15%",
              left: "-1%",
            }}
            onClick={() => {
              if (boosterAmount > 1 && boosterAmount <= 6)
                setBoosterAmount(boosterAmount - 1);
            }}
          >
            <Image
              alt="decrement"
              src={decrement}
              width={"30px"}
              height={"30px"}
            ></Image>
          </span>
          <Field id="amountBUSD" name="amountBUSD" value={boosterAmount} />{" "}
          <span
            style={{
              margin: "5px",
              position: "relative",
              top: "15%",
            }}
            onClick={() => {
              let amountMax = 6;
              if (index === 2) amountMax = 2;

              if (boosterAmount >= 1 && boosterAmount < amountMax) {
                setBoosterAmount(boosterAmount + 1);
              }
              return;
            }}
          >
            <Image
              alt="increment"
              src={increment}
              width={"30px"}
              height={"30px"}
            ></Image>
          </span>
        </FormIncremental>
      </>
    );
  };

  return (
    <>
      <Formik
        initialValues={{ amount: 1, amountMHT: 1 }}
        onSubmit={() => (index === 0 ? buyMHT() : buyBooster(index))}
      >
        <ContentForm>
          <Form>
            <Warning>
              {exceededAmount && index === 0 && (
                <div>
                  <span>Minimum $BUSD is {minBusdAmount.toFixed(2)}</span>
                  <br />
                  <span>Maximum $BUSD is {maxBusdAmount.toFixed(2)}</span>
                </div>
              )}
            </Warning>
            <FormMainSection>
              {index === 0 ? (
                <>
                  <FormDisplay>
                    <label>Amount of $BUSD</label> <br />
                    <input
                      onChange={onChange}
                      id="amount"
                      name="amount"
                      type="number"
                      value={busdAmount}
                    />
                  </FormDisplay>
                  <IconStyle>
                    <BiRightArrowAlt />
                  </IconStyle>

                  <FormDisplay>
                    <label>Amount of $MHT</label>
                    <br />
                    <input
                      onChange={onChange}
                      id="amountMHT"
                      name="amountMHT"
                      value={mhtAmount}
                      type="number"
                    />
                  </FormDisplay>
                </>
              ) : (
                displayIncrementalButtons()
              )}
            </FormMainSection>

            <ButtonFormat>
              <Button disabled={buying}>BUY NOW</Button>
            </ButtonFormat>
          </Form>
        </ContentForm>
      </Formik>
    </>
  );
};

export default CardAmount;
