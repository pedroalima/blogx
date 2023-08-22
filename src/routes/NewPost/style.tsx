import { styled } from "styled-components";

export const PostWrapper = styled.section`
    margin: 1.5rem 0;
    padding: 1.5rem;
    background: ${(props) => props.theme.colors.tertiary};
    border-radius: 10px;

    &:hover {
        background: ${(props) => props.theme.effects.tertiary};
    }
`;

export const FormWrapper = styled.form`
    
`;