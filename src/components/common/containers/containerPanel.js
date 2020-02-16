import React from 'react';

import styled from 'styled-components';

const ContainerPanel = props => {
	const { title, children } = props;
	return (
		<div className="container">
			{title && <h2>{title}</h2>}
			{children}
		</div>
	);
};

const Panel = styled.div``;

export default ContainerPanel;
