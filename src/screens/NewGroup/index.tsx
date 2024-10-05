import React, {useState} from 'react';
import {Container, Content, Icon} from "./styles";

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from '@components/Button';
import InputText from "@components/Input";
import {useNavigation} from "@react-navigation/native";

export default function NewGroup() {
	const [group, setGroup] = useState('');

	const navigation = useNavigation();

	function handleNew() {
		navigation.navigate("players", {group})
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
