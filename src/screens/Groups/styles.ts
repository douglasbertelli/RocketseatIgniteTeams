import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    align-items: center;
    padding-top: 60px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    gap: 12px;
`
