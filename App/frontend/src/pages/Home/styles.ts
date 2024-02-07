import styled from 'styled-components'

export const Wrapper = styled.div`
    gap: 16px;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 769px) {
        flex-wrap: wrap;
        flex-direction: column;
        gap: 16px;
        &>div {
            flex-basis: auto;
            min-height: 200px;
        }
    }
`;
