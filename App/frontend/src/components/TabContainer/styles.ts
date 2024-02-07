import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #1E1E1E;
    flex-basis: 55%;
`;

export const Tabs = styled.div`
`;

export const Tab = styled.button`
    background-color: #151515;
    text-decoration: none;
    border: none;
    width: 50%;
    padding: 8px 0;
    transition-duration: 0.3s;
    
    &:hover {
        background-color: #1E1E1E;
    }
`;

export const TabContent = styled.div`
    color: #fff;
    padding: 8px;
`;

export const Title = styled.h3`
    color: #fff;
`;