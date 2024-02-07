import StatusCard from '../StatusCard';

import * as S from './styles'

const cards = ["Offensive", "Defensive", "Resources"];

export default function Stats() {
    return (
        <>
            <S.Wrapper>
                <S.Title>Stats</S.Title>

                {cards.map(card => (
                    <StatusCard title={card} />
                ))}

            </S.Wrapper>
        </>
    );
}