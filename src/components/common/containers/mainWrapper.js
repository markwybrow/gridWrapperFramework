import React from 'react';
import styled from 'styled-components';

const MainWrapperDiv = styled.div`

  width: 90vw;

	border: 1px solid red;
  background-color: #f9f9f9;
  margin: 0 auto;

  display: grid;

  grid-column-gap: 3em;
  grid-row-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  @media (max-width: 420px) {
    width: unset;
    grid-template-columns:  1fr;
  }

  justify-items: stretch;
`;

const MainWrapper = ({ children, styles={} }) => {
	return <MainWrapperDiv styles={}>{children}</MainWrapperDiv>;
};
export default MainWrapper;
