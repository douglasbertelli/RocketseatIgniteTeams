import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Container, ContainerNumberOfPlayers, Form, HeaderList, NumberOfPlayers} from "./styles";

import Header from '@components/Header'
import Highlight from '@components/Highlight'
import ButtonIcon from "@components/ButtonIcon";
import Button from "@components/Button";
import InputText from "@components/Input";
import Filter from "@components/Filter";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";

import {useRoute} from "@react-navigation/native";

/* Tipagem do dado da rota. */
type RouteParams = {
	group: string
}

export default function Players() {
	const [team, setTeam] = useState('Time A')
	const [players, setPlayers] = useState(['Douglas', 'Vera', 'Ingrid', 'America', 'Alexandre', 'Alex', 'Bruno', 'Roberta', 'Lucas', 'Tânia'])

	/* Recuperando os dados passados pela rota. */
	const route = useRoute()
	/* Desestruturando os dados de route. */
	const {group} = route.params as RouteParams

	return (
		<Container>
			<Header showBackButton/>
			<Highlight title={group} subtitle={"Adicione a galera e separe os times"}/>
			<Form>
				<InputText
					placeholder={"Nome da pessoa"}
					autoCorrect={false}
				/>
				<ButtonIcon icon={'add'}/>
			</Form>

			<HeaderList>
				<FlatList
					data={['Time A', 'Time B', 'Time C', 'Time D', 'Time E']}
					keyExtractor={item => item}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({item}) => (
						<Filter
							title={item}
							isActive={item === team}
							onPress={() => setTeam(item)}
						/>
					)}
				/>

				<ContainerNumberOfPlayers>
					<NumberOfPlayers>
						{players.length}
					</NumberOfPlayers>
				</ContainerNumberOfPlayers>

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
				contentContainerStyle={
					players.length === 0 && {flex: 1}
				}
			/>

			<Button
				title={'Remover Turma'}
				type={'SECONDARY'}
			/>

		</Container>
	);
}
