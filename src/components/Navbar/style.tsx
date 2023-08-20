import { styled } from "styled-components";

export const NavWrapper = styled.nav`
    background: ${(prop) => prop.theme.colors.tertiary};
    padding: 1.5rem 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .active {
        svg {
            color: ${(prop) => prop.theme.colors.primary};
        }
    }
`;

export const Logo = styled.h1`
    font-size: ${(prop) => prop.theme.fontSize.primary};
`;

export const ButtonsWrapper = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    svg {
        color: ${(prop) => prop.theme.effects.primary};
    }

    &:hover {
        cursor: pointer;
        svg {
            color: ${(prop) => prop.theme.colors.primary};
        }
    }

    &:active {
        svg {
            color: ${(prop) => prop.theme.effects.secondary};
        }
    }
`;
