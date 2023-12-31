import { styled } from "styled-components";

export const NewPostSection = styled.section`
    display: flex;
    justify-content: center;
`;

export const PostWrapper = styled.section`
    margin: 1.5rem 0;
    padding: 1.5rem;
    background: ${(props) => props.theme.colors.tertiary};
    border-radius: 10px;
    width: 100%;

    @media screen and (min-width: 698px) {
        width: 50%;
    }

    &:hover {
        background: ${(props) => props.theme.effects.tertiary};
    }
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 1.5rem;
`;