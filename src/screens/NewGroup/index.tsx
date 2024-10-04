import React from 'react';
import {Container, Content, Icon} from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from '@components/Button';
import InputText from "@components/Input";

export default function NewGroup() {
	return (
		<Container>
			<Header showBackButton/>
			<Content>
				<Icon/>
				<Highlight title={'Nova turma'} subtitle={'Crie a turma para adicionar as pessoas'}/>
				<InputText placeholder={"Nome da turma"}/>
				<Button title={"Criar"}/>
			</Content>
		</Container>
	);
}
