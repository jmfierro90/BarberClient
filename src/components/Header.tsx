import React from 'react'
import styled from "styled-components";
import Logo from "../assets/logo.png";

interface HeaderProps {
  children?: React.ReactNode;
  background?: string;
  logoWidth?: string;
  logoAlt?: string;
}

const HeaderStyle = styled.div<{ background: string }>`
  height: 80px;
  background: ${(props) => props.background};
  padding: 5px;
`;

const LogoImage = styled.img<{ logoWidth?: string }>`
  width: ${(props) => props.logoWidth};
`;

const Header: React.FC<HeaderProps> = ({
  children,
  background = "#ffffff",
  logoWidth = "25%",
  logoAlt,
}) => {
  return (
    <HeaderStyle className="_nav" background={background}>
      <LogoImage src={Logo} alt={logoAlt} style={{ width: logoWidth }} />
      {children}
    </HeaderStyle>
  );
};

export default Header;
