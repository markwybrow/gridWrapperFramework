import React, { useState } from 'react';
import styled from 'styled-components';

const RowContainerWrapper = props => {
	const { children, gridColSizeItems } = props;
	const itemsInRow = gridColSizeItems.length;
	const [colSizes, setColSizes] = useState('1fr');
	const reducer = (accumulator, currentValue) => {
		return `${accumulator}fr ` + `${currentValue}`;
	};

	const columnBuilder = () => {
		const cols = gridColSizeItems.reduce(reducer);
		console.log('cols: ', `${cols}fr`);
		setColSizes(`${cols}fr`);
		return colSizes;
	};

	console.log('itemsInRow ', itemsInRow, colSizes);

	return <GridRowCols gridColSizeItems={columnBuilder}>{children}</GridRowCols>;
};

const GridRowCols = styled.div`
	display: grid;
	grid-template-columns: ${props => props.gridColSizeItems};
	grid-column-gap: 30px;
  grid-row-gap: 20px;
  max-width: 100%;
   @media (max-width: 420px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-column-gap: 1.6em;
    grid-row-gap: 1.2em;
  }
`;

export default RowContainerWrapper;
