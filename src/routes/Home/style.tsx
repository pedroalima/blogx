import { styled } from "styled-components";

export const HomeWrapper = styled.article`
    margin: 1.5rem 0;
    padding: 1.5rem;
    background: ${(props) => props.theme.colors.tertiary};
    border-radius: 10px;

    &:hover {
        background: ${(props) => props.theme.effects.tertiary};
    }
`;

export const TitleWrapper = styled.h2`
    font-size: ${(props) => props.theme.fontSize.secondary};
    color: ${(props) => props.theme.colors.primary};
`;

export const DescriptionWrapper = styled.p`
    font-size: ${(props) => props.theme.fontSize.tertiary};
    color: ${(props) => props.theme.effects.primary};
    margin: 1rem 0;
`;