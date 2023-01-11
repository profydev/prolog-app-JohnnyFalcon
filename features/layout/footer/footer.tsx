import styled, { css } from "styled-components";
import { color, breakpoint } from "@styles/theme";
import { Routes } from "@config/routes";

import Link from "next/link";
import versionNumber from "../../../package.json";
const footerLinks = [
  { text: "Docs", href: Routes.docs },
  { text: "API", href: Routes.api },
  { text: "Help", href: Routes.help },
  { text: "Community", href: Routes.community },
];

const Container = styled.div`
  background: ${color("gray", 50)};
  padding: 18px 32px;
  color: red;
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 60px;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;

  @media (max-width: ${breakpoint("mobile")}) {
    justify-content: space-between;
    flex-direction: column;
    height: 177px;
  }
`;

export const LinkStyled = styled(Link)`
  margin: 0 12px;
  color: ${color("gray", 500)};
  text-decoration: none;
  font-size: 16px;
`;

export const VersionDiv = styled.div`
  color: ${color("gray", 400)};
  font-size: 16px;
  @media (max-width: ${breakpoint("mobile")}) {
    order: 3;
  }
`;
const Logo = styled.img`
  width: 23px;
  @media (max-width: ${breakpoint("mobile")}) {
    order: 2;
  }
`;
export const LinksDiv = styled.div`
  @media (max-width: ${breakpoint("mobile")}) {
    order: 1;
  }
`;

export function Footer() {
  return (
    <Container data-cy="footer">
      <VersionDiv>Version: {versionNumber.version}</VersionDiv>
      <LinksDiv>
        {footerLinks.map((footerLink, index) => (
          <LinkStyled key={index} href={footerLink.href}>
            {footerLink.text}
          </LinkStyled>
        ))}
      </LinksDiv>
      <Logo src="/icons/logo-small.svg" alt="logo"></Logo>
    </Container>
  );
}
