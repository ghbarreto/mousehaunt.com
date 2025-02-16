import React, { useContext, useEffect } from "react";
import type { NextPage } from "next";
import {
  Container,
  Content,
  StoreInventoryBody,
  StoreInventoryContainer,
  StorePageSub,
} from "./styles/styles";
import Header from "../common/Header";
import Logo from "../common/Logo";
import Sections from "../common/Sections";
import { ConnectWalletButton } from "../common/ConnectWalletButton";
import Footer from "../common/Footer";
import Table from "../common/Table/Table";
import {sections} from '../../utils/sections'


const Inventory: NextPage = () => {
  return (
    <Container>
      <Content>
        <StoreInventoryContainer>
          <Header>
            <Logo />
            <Sections sections={sections} />
            <ConnectWalletButton />
          </Header>
          <StoreInventoryBody>
            <h1>Inventory</h1>
            <StorePageSub>
              <div>
                Boosters will be on your wallet right away! <br />
                Get the #🧀trade channel ready.
              </div>
              <br />
              <div>
                $MHT won&apos;t be on your wallet, you will claim $MHT only at
                IGO! <br />
                To be compliant with big launchpads, we can only make $MHT
                available at IGO, not before.
              </div>
            </StorePageSub>

            <Table />
          </StoreInventoryBody>
          <Footer />
        </StoreInventoryContainer>
      </Content>
    </Container>
  );
};

export default Inventory;
