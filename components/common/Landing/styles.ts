import styled from 'styled-components';

export const Container = styled.section`
  top: 0px;
  left: 0px;
  height: 100vh;

  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(19, 21, 36, 0.3) 0%,
      #131524 100%
    ),
    url('/images/game-related/fireplace.webp');
  background-size: cover;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px - 32px);
  justify-content: center;

  @media only screen and (max-width: 600px) {
    height: calc(100vh - 60px);
    text-align: center;
    align-items: center;
  }
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  small {
    font-size: 110%;
  }
`;

export const Title = styled.div`
  font-family: 'Bebas Neue Pro';
  font-weight: 800;
  font-size: 144px;
  line-height: 120px;

  display: flex;
  align-items: center;
  text-transform: uppercase;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;

  @media only screen and (max-width: 600px) {
    justify-content: center;

    font-family: Bebas Neue Pro;
    font-style: normal;
    font-size: 80px;
    line-height: 72px;
  }
`;

export const Subtitle = styled.div`
  margin-top: 16px;
  margin-bottom: 40px;

  width: 522px;
  font-family: 'SF Pro Display';
  font-size: 18px;
  line-height: 29px;

  @media only screen and (max-width: 600px) {
    width: 343px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Stores = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-right: 8px;
  }

  @media only screen and (max-width: 600px) {
    div {
      flex-direction: row;
    }
  }

  a {
    width: 148px;
    margin-bottom: 40px;

    @media only screen and (max-width: 600px) {
      align-self: center;
    }
  }
`;

export const Left = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Right = styled.div`
  filter: drop-shadow(5px 21px 46px rgba(0, 0, 0, 0.7));
`;

export const ButtonRightAbsolute = styled.div`
  position: absolute;
  left: 85%;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 800px) {
    left: 80%;
  }
`;

export const Phone = styled.div`
  width: 600px;
  height: 293px;

  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.5));
  background-image: url('/images/phone-frames/iphone-600.png');
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    background-image: url('/images/phone-frames/iphone-320.png');
    width: 320px;
    height: 156px;
  }
`;

export const Video = styled.div`
  margin-top: 40px;

  width: 600px;
  height: 293px;
  align-self: center;

  overflow: hidden;
  display: block;

  video {
    background-position: center center;
    background-repeat: no-repeat;

    width: 590px;
    height: auto;

    margin-top: -310px;
    border-radius: 90px;

    margin-left: 5px;
  }

  @media only screen and (max-width: 600px) {
    width: 320px;
    height: 156px;

    video {
      width: 314px;
      margin-top: -166px;
      border-radius: 45px;

      margin-left: unset;
    }
  }
`;


