import React from 'react';
import {
	MainWrapper,
	RowContainerWrapper,
	ContainerPanel,
} from './common/containers';
import '../static/styles/App.scss';

function App() {
	return (
		<div className="App">
			<MainWrapper>
				{/* row one */}
				<RowContainerWrapper gridColSizeItems={[2, 1, 1]}>
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
				<RowContainerWrapper gridColSizeItems={[2, 2]}>
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
