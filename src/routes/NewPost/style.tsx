import { styled } from "styled-components";

export const PostWrapper = styled.section`
    margin: 1.5rem 0;
    padding: 1.5rem;
    background: ${(props) => props.theme.colors.tertiary};
    border-radius: 10px;
    width: 50%;

    &:hover {
        background: ${(props) => props.theme.effects.tertiary};
    }
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

export const TextArea = styled.textarea`
    margin: 0.5rem 0;
    padding: 0.2rem 0.5rem;
    width: 100%;
    height: 20vh
`;