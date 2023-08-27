import { styled } from "styled-components";

export const ArticleWrapper = styled.article`
    background: ${(prop) => prop.theme.colors.tertiary};
    padding: 1.5rem;
    text-align: justify;
    border-radius: 15px;
`;

export const ContentWrapper = styled.div`
    padding: 2rem 0;
`;