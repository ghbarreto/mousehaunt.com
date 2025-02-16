import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import {
  Container,
  Content,
  StoreContainer,
  StorePageSub,
  StoreTitle,
  CountdownContainer,
} from './styles/styles';
import Cards from '../common/Cards';
import Header from '../common/Header';
import Logo from '../common/Logo';
import Sections from '../common/Sections';
import { ConnectWalletButton } from '../common/ConnectWalletButton';
import { sections } from '../../utils/sections';
import Menu from '../common/BurgerMenu';

function countdown() {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const final = new Date('2021-11-29T13:00:00.000Z');

  const countDown = new Date(final).getTime();

  const now = new Date().getTime();
  const distance = countDown - now;

  if (distance < 0) {
    document.getElementById('ends')!.innerText = 'PRIVATE SALE (#2) ENDED';
    document.getElementById('ended-ul')!.style.display = 'none';
    return;
  }

  document.getElementById('days')!.innerText = Math.floor(
    distance / day
  ).toString();
  document.getElementById('hours')!.innerText = Math.floor(
    (distance % day) / hour
  ).toString();
  document.getElementById('minutes')!.innerText = Math.floor(
    (distance % hour) / minute
  ).toString();
  document.getElementById('seconds')!.innerText = Math.floor(
    (distance % minute) / second
  ).toString();
}

const Countdown = () => (
  <CountdownContainer>
    <span id="ends">PRIVATE SALE (#2) ENDS IN</span>
    <ul id="ended-ul">
      <li>
        <span id="days"></span>DAYS
      </li>
      <li>
        <span id="hours"></span>HOURS
      </li>
      <li>
        <span id="minutes"></span>MINUTES
      </li>
      <li>
        <span id="seconds"></span>SECONDS
      </li>
    </ul>
  </CountdownContainer>
);

const StoreHome: NextPage = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      countdown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Content>
        <StoreContainer>
          <Header>
            <Logo />
            <Sections sections={sections} />
            <ConnectWalletButton />
            <Menu>
              <div>
                <ConnectWalletButton />
              </div>
            </Menu>
          </Header>
          <StoreTitle>SHOP</StoreTitle>
          <StorePageSub>
            Welcome to the Mouse Haunt Shop!
            <br />
            <b>
              The Whitelist 2 ends <br /> on November 29th 1p.m. GMT
            </b>
          </StorePageSub>
          <Countdown />
          <Cards />
        </StoreContainer>
      </Content>
    </Container>
  );
};

export default StoreHome;
