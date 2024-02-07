import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    justify-items: center;
    flex-basis: 25%;
    padding: 16px;
    background-color: #1E1E1E;
`;

export const BoxRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &:not(:last-child){
        margin-bottom: 32px;
    }
`;
