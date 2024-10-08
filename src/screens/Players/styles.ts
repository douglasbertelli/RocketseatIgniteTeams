import styled, {css} from "styled-components/native";
import {SafeAreaView} from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 16px;
    gap: 16px;
`

export const Form = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    flex-direction: row;
    justify-content: center;
    border-radius: 6px;
`

export const HeaderList = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin: 4px 0;
`

export const ContainerNumberOfPlayers = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
`
export const NumberOfPlayers = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`
