import styled, { css } from "styled-components";

// icons
import { FaPencilAlt } from "react-icons/fa";

export const DivEdit = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    background: ${theme.colors.white} ;
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    z-index: 99;
    box-shadow: 0 0 1em rgba(0,0,0,.3);
    bottom: 3rem;
    right: 2rem;
  `}
`

export const EditIcon = styled(FaPencilAlt)`
  ${({ theme }) => css`
    display: flex;
    font-size: 2.8rem;
    color: ${theme.colors.black};
  `}
`;