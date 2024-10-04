import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Container, Form, HeaderList, NumberOfPlayers} from "./styles";

import Header from '@components/Header'
import Highlight from '@components/Highlight'
import ButtonIcon from "@components/ButtonIcon";
import InputText from "@components/Input";
import Filter from "@components/Filter";

export default function Players() {
	const [team, setTeam] = useState('Time A')
	const [players, setPlayers] = useState([])

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

			<HeaderList>
				<FlatList
					data={['Time A', 'Time B']}
					keyExtractor={item => item}
					horizontal
					renderItem={({item}) => (
						<Filter
							title={item}
							isActive={item === team}
							onPress={() => setTeam(item)}
						/>
					)}
				/>

				<NumberOfPlayers>
					{players.length}
				</NumberOfPlayers>
			</HeaderList>

		</Container>
	);
}
