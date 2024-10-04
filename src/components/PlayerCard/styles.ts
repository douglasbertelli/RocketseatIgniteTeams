import styled, {css} from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons'

export const Container = styled.View`
    width: 100%;
    height: 56px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
    border-radius: 6px;
`

export const Name = styled.Text`
    flex: 1;
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
	size: 24,
	color: theme.COLORS.GRAY_300,
}))`
    margin-left: 12px;
    margin-right: 8px;
`
