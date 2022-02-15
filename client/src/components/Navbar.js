// import { HiMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>tSact</Logo>
      <Menu>
        <MenuLink to="#">Market</MenuLink>
        <MenuLink to="#">Transactions</MenuLink>
        <MenuLink to="#">Wallet</MenuLink>
      </Menu>
      <LoginBtn>Login</LoginBtn>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  background: #00bf8f;
  background: linear-gradient(to right, #00bf8f, #001510);
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  color: #fff;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background: #001510;
    background: linear-gradient(to right, #00bf8f, #001510);
  }
`;

const LoginBtn = styled.button`
  background: none;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
`;
