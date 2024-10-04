import React from 'react';
import {useTheme} from 'styled-components/native'
import {Container} from './styles'
import {TextInputProps} from 'react-native'

//type Props = {}

export default function InputText({...rest}: TextInputProps) {
	const {COLORS} = useTheme();

	return (
		<Container
			placeholderTextColor={COLORS.GRAY_300}
			{...rest}
		/>
	);
};
