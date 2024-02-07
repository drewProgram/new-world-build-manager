import * as S from './styles'

interface IProps {
    tabOption: "skills" | "attributes";
}

const maxAttributePoints = 220; // lvl 65 character

export default function TabContainer({ tabOption }: IProps) {
    return (
        <>
            <S.Wrapper>
                <S.Tabs>
                    <S.Tab>
                        <S.Title>Attributes</S.Title>
                    </S.Tab>
                    <S.Tab>
                        <S.Title>Skills</S.Title>
                    </S.Tab>
                </S.Tabs>

                <S.TabContent>
                    Poggers
                </S.TabContent>
            </S.Wrapper>
        </>
    );
}