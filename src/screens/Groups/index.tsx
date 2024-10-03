import React from 'react';

import {Container} from './styles';

import Header from '@components/Header';
import Highlight from '@components/Highlight';

export default function Groups() {
	return (
		<Container>
			<Header/>
			<Highlight title={"Olá..."} subtitle={"Lorem Ipsum"}/>
		</Container>
	);
}
