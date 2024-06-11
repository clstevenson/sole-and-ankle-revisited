/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
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
  display: flex;
  justify-content: flex-end;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding-left: 75px;
  background: hsla(220, 5%, 40%, 0.8);
`;

const Content = styled(DialogContent)`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: var(--color-white);
  width: 300px;
  height: 100%;
  padding: 32px;
  font-family: "Raleway", sans-serif;
`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--color-gray-900);
    font-size: ${18 / 16}rem;
    font-weight: 600;
  }

  a:hover {
    color: var(--color-secondary);
  }
`;

const MenuFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 32px;
  display: flex;
  flex-direction: column;
  font-size: {14/16}rem;
  gap: 12px;
  
  a {
    text-decoration: none;
    color: var(--color-gray-500);
    font-weight: 500;
  }

  a:hover {
    color: var(--color-gray-900);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
  background-color: var(--color-white);
  border: none;
`;

export default MobileMenu;
