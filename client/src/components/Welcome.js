import React from "react";
import styled from "styled-components";

import { FaEthereum } from "react-icons/fa";

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <LeftSection>
        <TagLine>Make Payments Across The world With Crypto</TagLine>
        <SubText>
          Explore seemless payments with various crypto currencies
        </SubText>
        <Button>Connect wallet</Button>
      </LeftSection>
      <RightSection>
        <CreditCard>
          <Logo>
            <FaEthereum size={24} color="fff" />
          </Logo>
          <CardDetails>
            <CrptoAddress>0xaav1234...23456789</CrptoAddress>
            <CryptoName>Ethereum</CryptoName>
          </CardDetails>
        </CreditCard>
      </RightSection>
    </WelcomeWrapper>
  );
};

export default Welcome;

const WelcomeWrapper = styled.section`
  /* background-image: linear-gradient(to right, #00bf8f, #001510); */
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagLine = styled.h1`
  font-size: 3.12rem;
  font-weight: bold;
`;

const SubText = styled.p`
  font-size: 1.2rem;
`;

const Button = styled.button`
  background: #00bf8f;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  width: 50%;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const RightSection = styled.div``;

const CreditCard = styled.div`
  background-image: linear-gradient(to right, #00bf8f, #001510);

  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardDetails = styled.div``;

const CrptoAddress = styled.p`
  color: #fff;
  font-size: 1.2rem;
`;

const CryptoName = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
`;
