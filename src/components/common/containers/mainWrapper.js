import React from 'react';
import styled from 'styled-components';

const MainWrapperDiv = styled.div`
	width: 90vw;
	min-height: 100vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
	border: 1px solid red;
	background-color: #f9f9f9;
	margin: 0 auto;
`;

const MainWrapper = ({ children }) => {
	return <MainWrapperDiv>{children}</MainWrapperDiv>;
};
export default MainWrapper;
