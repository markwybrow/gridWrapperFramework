import React from 'react';
// gridWrapping container
import {
	MainWrapper,
	RowContainerWrapper,
	ContainerPanel,
  gridOptions,
  gridOptionsMainWrapper
} from './common/containers';

import '../static/styles/App.scss';

const containerStyles = {
  padding: `1em 2em`,
  margin: 0,
  border: `1px solid lime`
}

function App() {
	return (
		<div className="App">
			<MainWrapper gridOptions={gridOptionsMainWrapper}>
				{/* row one */}
				<RowContainerWrapper gridColSizeItems={[[2, 1], [2, 1], [1]]} gridOptions={gridOptions}>
					<ContainerPanel
						colSize="2"
						title="This is a 2 column stretch row 1" styles={containerStyles}>
            this is my container text</ContainerPanel>
					<ContainerPanel
						colSize="1"
						title="This is a 1 column row 1" styles={{padding:'1em 2em'}}></ContainerPanel>

				</RowContainerWrapper>
				<RowContainerWrapper gridColSizeItems={[[1,1,1],[1],[1]]} gridOptions={gridOptions}>
					<ContainerPanel
						colSize="2"
						title="This is a 2 column stretch"></ContainerPanel>
					<ContainerPanel
						colSize="1"
						title="This is a 1 column"></ContainerPanel>
					<ContainerPanel
						colSize="1"
						title="This is a 1 column"></ContainerPanel>
				</RowContainerWrapper>
			</MainWrapper>
		</div>
	);
}

export default App;
