import React from 'react';
import {Container, Form} from "./styles";

import Header from '@components/Header'
import Highlight from '@components/Highlight'
import ButtonIcon from "@components/ButtonIcon";
import InputText from "@components/Input";
import Filter from "@components/Filter";

export default function Players() {
	return (
		<Container>
			<Header showBackButton/>
			<Highlight title={"Nome da turma"} subtitle={"Adicione a galera e separe os times"}/>
			<Form>
				<InputText
					placeholder={"Nome da pessoa"}
					autoCorrect={false}
				/>
				<ButtonIcon icon={'add'}/>
			</Form>

			<Filter title={"Time A"} isActive/>
			<Filter title={"Time B"}/>
		</Container>
	);
}
