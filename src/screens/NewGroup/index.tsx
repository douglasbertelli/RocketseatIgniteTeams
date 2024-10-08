import React, {useState} from 'react';
import {Container, Content, Icon} from "./styles";

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from '@components/Button';
import InputText from "@components/Input";
import {useNavigation} from "@react-navigation/native";
import {groupCreate} from "@storage/group/groupCreate";
import {AppError} from "@utils/AppError";
import {Alert} from "react-native";

export default function NewGroup() {
	const [group, setGroup] = useState('');

	const navigation = useNavigation();

	async function handleNew() {

		try {
			/* Verificando se o usuário preencheu algo, se não mostrar um alerta com a mensagem. */
			if (group.trim().length === 0) {
				return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
			}

			/* Enviando o dado que está no useState (Input) */
			await groupCreate(group)

			/* Redicionar para a tela de players */
			navigation.navigate("players", {group})
		} catch (error) {

			if (error instanceof AppError) {
				Alert.alert('Novo Grupo', error.message);
			} else {
				Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
			}
		}
	}

	return (
		<Container>
			<Header showBackButton/>
			<Content>
				<Icon/>
				<Highlight title={'Nova turma'} subtitle={'Crie a turma para adicionar as pessoas'}/>
				<InputText
					placeholder={"Nome da turma"}
					onChangeText={setGroup}
				/>
				<Button
					title={"Criar"}
					onPress={handleNew}
				/>
			</Content>
		</Container>
	);
}
