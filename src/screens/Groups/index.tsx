import React, {useState} from 'react';

import {Container} from './styles';
import {FlatList, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from "@components/GroupCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";


export default function Groups() {
	const [groups, setGroups] = useState(['NodeJS', 'PHP', 'JavaScript', 'React Native', 'Flutter', 'Kotlin', 'Java', 'Go', 'Python']);

	const navigation = useNavigation()

	function handleNewGroup() {
		navigation.navigate("new");
	}

	return (
		<Container>
			<Header/>
			<Highlight title={"Turmas"} subtitle={"Jogue com a sua turma"}/>

			<FlatList
				style={styles.List}
				data={groups}
				keyExtractor={item => item}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={groups.length === 0 && {flex: 1}}
				renderItem={({item}) => (
					<GroupCard
						title={item}
					/>
				)}
				ListEmptyComponent={() => <ListEmpty message={"Que tal cadastrar a primeira turma?"}/>}
			/>

			<Button
				title={'Criar nova turma'}
				onPress={handleNewGroup}
			/>

		</Container>
	);
}

const styles = StyleSheet.create({
	List: {
		width: '100%',
	}
})
