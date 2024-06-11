import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <MobileWrapper>
            <MobileBreadcrumbs>
              <Breadcrumbs>
                <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
                <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
                <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
              </Breadcrumbs>
            </MobileBreadcrumbs>
            <Title>Running</Title>
          </MobileWrapper>
          <FilterWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </FilterWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterWrapper = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const MobileBreadcrumbs = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
    position: relative;
    bottom: 0;
    left: 0;
  }
`;

export default ShoeIndex;
