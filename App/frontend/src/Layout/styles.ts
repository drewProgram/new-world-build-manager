import styled from 'styled-components'

const headerHeight = 48;

export const Header = styled.header`
    inset: 0 auto auto 0;
    position: fixed;
    display: flex;
    height: ${headerHeight}px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    background-color: #1e1e1e;
`;

export const Main = styled.main`
    max-width: 1400px;
    min-height: calc(100vh - ${(headerHeight * 2) + (headerHeight / 2)}px); // 100vh - ((tamanho header + footer) + (tamanho da margin-bottom))
    padding: 24px 8px;
    margin: ${headerHeight}px auto ${headerHeight / 2}px auto;
    @media screen and (max-width: 769px) {
        padding: 24px;
    }
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${headerHeight}px;
    color: #fff;
    background-color: #1E1E1E;
`;
