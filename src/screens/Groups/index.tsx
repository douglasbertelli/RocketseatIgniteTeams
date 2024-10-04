import React, {useState} from 'react';

import {Container} from './styles';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from "@components/GroupCard";
import {FlatList, StyleSheet} from "react-native";
import ListEmpty from "@components/ListEmpty";


export default function Groups() {
	const [groups, setGroups] = useState<string[]>(['NodeJS', 'PHP', 'JavaScript', 'React Native', 'Flutter', 'Kotlin', 'Java', 'Go', 'Python']);

	return (
		<Container>
			<Header/>
			<Highlight title={"Turmas"} subtitle={"Jogue com a sua turma"}/>

			<FlatList
				style={styles.List}
				data={groups}
				keyExtractor={item => item}
				contentContainerStyle={groups.length === 0 && {flex: 1}}
				renderItem={({item}) => (
					<GroupCard
						title={item}
					/>
				)}
				ListEmptyComponent={() => <ListEmpty message={"Que tal cadastrar a primeira turma?"}/>}
			/>

		</Container>
	);
}

const styles = StyleSheet.create({
	List: {
		width: '100%',
	}
})
