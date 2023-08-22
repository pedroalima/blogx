import { styled } from "styled-components";

export const Button = styled.button`
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 700;

    &:hover {
        background: ${(prop) => prop.theme.effects.secondary}
    }
`;