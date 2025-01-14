import type { NextPage } from "next";

import { Container, Content, Background, Title, Logos } from "./styles";
import Image from "next/image";
import binance from "../../../public/images/other/binance.png";
import unreal from "../../../public/images/other/unreal.png";
import aws from "../../../public/images/other/aws.png";
import isoforce from "../../../public/images/other/isoforce.png";
import cheese from "../../../public/images/game-related/cheese.jpeg";

const PoweredBy: NextPage = () => {
  return (
    <>
      <Container>
        <Background>
          <Image
            src={cheese}
            objectFit="cover"
            alt="Cheese"
            placeholder="blur"
          />
        </Background>
        <Content>
          <div>
            <Title>Powered By</Title>
            <Logos>
              <Image
                src={binance}
                width="180px"
                height="51px"
                alt="Binance"
                placeholder="blur"
              />
              <Image
                src={unreal}
                width="155px"
                height="135px"
                alt="Unreal"
                placeholder="blur"
              />
              <Image
                src={aws}
                width="161px"
                height="70px"
                alt="AWS"
                placeholder="blur"
              />
            </Logos>
          </div>
          <div>
            <Title>Developer</Title>
            <Logos>
              <Image
                src={isoforce}
                width="143.58px"
                height="122px"
                alt="Isoforce Games"
                placeholder="blur"
              />
            </Logos>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default PoweredBy;
