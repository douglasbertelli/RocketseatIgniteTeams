import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Container, Form, HeaderList, NumberOfPlayers} from "./styles";

import Header from '@components/Header'
import Highlight from '@components/Highlight'
import ButtonIcon from "@components/ButtonIcon";
import Button from "@components/Button";
import InputText from "@components/Input";
import Filter from "@components/Filter";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";

export default function Players() {
	const [team, setTeam] = useState('Time A')
	const [players, setPlayers] = useState(['Douglas', 'Vera', 'Ingrid', 'America', 'Alexandre', 'Alex', 'Bruno', 'Roberta', 'Lucas', 'Tânia'])

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

			<FlatList
				data={players}
				keyExtractor={item => item}
				renderItem={({item}) => (
					<PlayerCard name={item} onRemove={() => {
					}}/>
				)}
				ListEmptyComponent={() => <ListEmpty message={"Não há pessoas nesse time"}/>}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={[
					{paddingBottom: 20},
					players.length === 0 && {flex: 1},
				]}
			/>

			<Button
				title={'Remover turma'}
				type={'SECONDARY'}
			/>

		</Container>
	);
}
