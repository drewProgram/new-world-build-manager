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
    max-width: 1200px;
    margin-top: ${headerHeight}px;
`;

export const Footer = styled.footer`
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
`;
