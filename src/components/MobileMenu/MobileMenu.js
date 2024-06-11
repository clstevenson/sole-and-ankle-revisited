/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content aria-label="Mobile menu">
        <CloseButton onClick={onDismiss}>
          <Icon id={"close"} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <NavWrapper>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </NavWrapper>
        <MenuFooter>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </MenuFooter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  background: hsl(0, 0%, 100%);
  width: 300px;
  height: 812px;
  padding: 26px 16px 32px 32px;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: white;
  font-family: "Raleway", sans-serif;
`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${COLORS.gray[900]};
    font-size: {18/16}rem;
  }

  a:hover {
    color: ${COLORS.secondary};
  }
`;

const MenuFooter = styled.footer`
  display: flex;
  flex-direction: column;
  font-size: {14/16}rem;
  gap: 14px;
  
  a {
    text-decoration: none;
    color: ${COLORS.gray[500]};
  }

  a:hover {
    color: ${COLORS.gray[900]};
  }
`;

const CloseButton = styled.button`
  background-color: white;
  border: none;
  display: flex;
  width: 24px;
  margin-left: auto;
`;

export default MobileMenu;
