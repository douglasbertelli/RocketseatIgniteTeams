import React from 'react';

import {Container, Title, Subtitle} from './styles'

type Props = {
	title: string;
	subtitle: string
}

export default function Highlight(props: Props) {
	return (
		<Container>
			<Title>{props.title}</Title>
			<Subtitle>{props.subtitle}</Subtitle>
		</Container>
	);
}
