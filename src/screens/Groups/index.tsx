import React from 'react';

import {Container} from './styles';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from "@components/GroupCard";

export default function Groups() {
	return (
		<Container>
			<Header/>
			<Highlight title={"Olá..."} subtitle={"Lorem Ipsum"}/>
			<GroupCard title={'Componente de grupo.'} onPress={() => {
			}}/>
		</Container>
	);
}
