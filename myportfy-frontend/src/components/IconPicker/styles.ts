import styled, { css } from 'styled-components';

// icons
import {FaSearch} from "react-icons/fa";

export const Container = styled.div`
  ${({theme}) => css`
    box-shadow: 0 .1rem .3rem 0 rgb(0 0 0 / 14%), 0 .1rem .2rem 0 rgb(0 0 0 / 9%);
    border: .2rem solid transparent;
    display: flex;
    width: 28rem;
    height: 40rem;
    background: ${theme.colors.ligthGray};
    border-radius: .5rem;
    padding: ${theme.spacings.xxsmall};
    align-items: start;
    justify-content: center;
    z-index: 999;

    @media ${theme.media.lteMedium} {
      height: 33rem;
      width: 30rem;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    margin: 0;
    gap: ${theme.spacings.xxsmall};
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;

    @media ${theme.media.lteMedium} {
      gap: ${theme.spacings.small};
    }
  `}
`;

export const SelectDiv = styled.div`
  ${({theme}) => css`
    border-radius: 5rem;
    padding: .3rem;
    color: ${theme.colors.darkGray};
    display: flex;
    width: 100%;
    height: auto;
    max-height: 20rem;
    overflow-y: visible;
    background: ${theme.colors.ligthGray};
    align-items: center;
    justify-content: center;

    @media ${theme.media.lteMedium} {}
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    max-height: 20rem;
    outline: none;
    display: flex;
    border: none;
    background: ${theme.colors.ligthGray};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};
    width: 100%;
    height: auto;
  `}
`;


export const SelectOptions = styled.option`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const SearchDiv = styled.div`
  ${({theme}) => css`
    border-radius: 5rem;
    padding: .3rem;
    color: ${theme.colors.darkGray};
    border: .1rem solid ${theme.colors.Gray};
    display: flex;
    width: 100%;
    height: 3rem;
    background: ${theme.colors.white};
    align-items: center;
    justify-content: center;

    @media ${theme.media.lteMedium} {}
  `}
`;

export const Search = styled.input`
  outline: none;
  display: flex;
  border: none;
  border-radius: 0 5rem 5rem 0;
  width: 100%;
  color: inherit;
  height: 2.4rem;
  margin-left: 0.8rem;
  margin-right: 1%;
`;

export const IconSearch = styled(FaSearch)`
  height: 2.3rem;
  color: inherit;
  margin-left: .5rem;
  width: 2.3rem;
`;

export const IconsWrapper = styled.div`
  ${({theme}) => css`
    margin: 0;
    overflow: auto;
    border-top: .1rem solid ${theme.colors.Gray};
    padding: 1rem 1rem;
    gap: ${theme.spacings.xxsmall};
    width: auto;
    height: auto;
    max-height: 29rem;
    align-items: center;
    justify-content: center;

    @media ${theme.media.lteMedium} {
      gap: ${theme.spacings.small};
      max-height: 21rem;
    }
  `}
`;

export const IconsGrid = styled.div`
  ${({theme}) => css`
    display: grid;
    overflow-y: visible;
    margin: auto;
    grid-template-columns: repeat(4, 5rem);
    gap: ${theme.spacings.xxsmall};
    width: auto;
    align-items: center;
    justify-content: center;

    @media ${theme.media.lteMedium} {
      gap: ${theme.spacings.small};
    }
  `}
`;

export const IconDiv = styled.div`
  ${({theme}) => css`
    box-shadow: 0 .1rem .3rem 0 rgb(0 0 0 / 14%), 0 .1rem .2rem 0 rgb(0 0 0 / 9%);
    border-radius:.5rem;
    padding: .3rem;
    border: .2rem solid transparent;
    width: 5rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3ms ease;

    :hover {
      background: ${theme.colors.mediumGray};
    }

    @media ${theme.media.lteMedium} {}
  `}
`;
