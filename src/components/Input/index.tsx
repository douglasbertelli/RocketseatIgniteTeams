import React from 'react';
import {useTheme} from 'styled-components/native'
import {Container} from './styles'
import {TextInput, TextInputProps} from 'react-native'

type Props = TextInputProps & {
	inputRef?: React.RefObject<TextInput>
}

export default function InputText({inputRef, ...rest}: Props) {
	const {COLORS} = useTheme();

	return (
		<Container
			ref={inputRef}
			placeholderTextColor={COLORS.GRAY_300}
			{...rest}
		/>
	);
};
