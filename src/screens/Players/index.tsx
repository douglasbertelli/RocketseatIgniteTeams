import React, {useEffect, useRef, useState} from 'react';
import {Alert, FlatList, TextInput} from 'react-native';
import {Container, ContainerNumberOfPlayers, Form, HeaderList, NumberOfPlayers} from "./styles";

import Header from '@components/Header'
import Highlight from '@components/Highlight'
import ButtonIcon from "@components/ButtonIcon";
import Button from "@components/Button";
import InputText from "@components/Input";
import Filter from "@components/Filter";
import PlayerCard from "@components/PlayerCard";
import Loading from "@components/Loading";

import {AppError} from "@utils/AppError";

import ListEmpty from "@components/ListEmpty";
import {useNavigation, useRoute} from "@react-navigation/native";
import {playerAddByGroup} from "@storage/player/playerAddByGroup";
import {playersGetByGroupAndTeam} from "@storage/player/playersGetByGroupAndTeam";
import {PlayerStorageDTO} from "@storage/player/PlayerStorageDTO";
import {playerRemoveByGroup} from "@storage/player/playerRemoveByGroup";
import {groupRemoveByName} from "@storage/group/groupRemoveByName";

/* Tipagem do dado da rota. */
type RouteParams = {
	group: string
}

export default function Players() {

	const [isLoading, setIsLoading] = useState(true)
	const [newPlayerName, setNewPlayerName] = useState("");
	const [team, setTeam] = useState('Time A')
	const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

	const navegation = useNavigation()

	/* Recuperando os dados passados pela rota. */
	const route = useRoute()
	/* Desestruturando os dados de route. */
	const {group} = route.params as RouteParams

	const newPlayerNameInputRef = useRef<TextInput>(null)

	async function handleAddPlayer() {

		/* Verificando se o usuário digitou algo, caso não tenha preenchido mostra um alerta. */
		if (newPlayerName.trim().length === 0) {
			return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.')
		}

		const newPlayer = {
			name: newPlayerName,
			team,
		}

		try {
			await playerAddByGroup(newPlayer, group);

			/* Removendo o focus do input */
			newPlayerNameInputRef.current?.blur()

			/* Limpando input */
			setNewPlayerName('')

			fetchPlayersByTeam();

		} catch (error) {
			if (error instanceof AppError) {
				Alert.alert('Nova pessoa', error.message)
			} else {
				Alert.alert('Novo pessoa', 'Não foi possível adicionar.')
			}
		}
	}

	async function fetchPlayersByTeam() {
		try {

			setIsLoading(true)
			const playersByTeam = await playersGetByGroupAndTeam(group, team)
			setPlayers(playersByTeam)

		} catch (e) {
			Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado')
		} finally {
			setIsLoading(false)
		}
	}

	async function handlePlayerRemover(playerName: string) {
		try {
			await playerRemoveByGroup(playerName, group)
			fetchPlayersByTeam()

		} catch (error) {
			Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.')
		}
	}

	async function groupRemover() {
		try {
			await groupRemoveByName(group)

			navegation.navigate('groups')

		} catch (error) {
			Alert.alert('Remover grupo', 'Não foi possível remover o grupo.')
		}
	}

	async function handleGroupRemover() {
		Alert.alert(
			'Remover',
			'Deseja remover o grupo?',
			[
				{text: 'Não', style: 'cancel'},
				{
					text: 'Sim', onPress: () => {
						groupRemover()
					}
				}
			]
		)
	}

	useEffect(() => {
		fetchPlayersByTeam()
	}, [team]);

	return (
		<Container>
			<Header showBackButton/>
			<Highlight title={group} subtitle={"Adicione a galera e separe os times"}/>
			<Form>
				<InputText
					inputRef={newPlayerNameInputRef}
					onChangeText={setNewPlayerName}
					value={newPlayerName}
					placeholder={"Nome da pessoa"}
					autoCorrect={false}
					onSubmitEditing={handleAddPlayer}
					returnKeyType={"done"}
				/>
				<ButtonIcon
					icon={'add'}
					onPress={handleAddPlayer}
				/>
			</Form>

			<HeaderList>
				<FlatList
					data={['Time A', 'Time B']}
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


			{
				isLoading ? <Loading/> :
					<FlatList
						data={players}
						keyExtractor={item => item.name}
						renderItem={({item}) => (
							<PlayerCard
								name={item.name}
								onRemove={() => handlePlayerRemover(item.name)}/>
						)}
						ListEmptyComponent={() => <ListEmpty message={"Não há pessoas nesse time"}/>}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={
							players.length === 0 && {flex: 1}
						}
					/>
			}

			<Button
				title={'Remover Turma'}
				type={'SECONDARY'}
				onPress={() => handleGroupRemover()}
			/>

		</Container>
	);
}
