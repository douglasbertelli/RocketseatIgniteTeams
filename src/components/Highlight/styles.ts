import styled, {css} from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    //margin-top: 4px;
    margin-bottom: 12px;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
    `}
    text-align: center;
`

export const Subtitle = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_300};
    `}
    text-align: center;
`
