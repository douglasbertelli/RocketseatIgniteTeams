import React from 'react';
import {Container, Icon, Name} from './styles'
import ButtonIcon from "@components/ButtonIcon";

type Props = {
	name: string;
	onRemove: () => void;
}

export default function PlayerCard({name, onRemove}: Props) {
	return (
		<Container>
			<Icon name={'person'}/>
			<Name>{name}</Name>
			<ButtonIcon
				type={'SECONDARY'}
				icon={'close'}
				onPress={() => onRemove()}
			/>
		</Container>
	);
}
