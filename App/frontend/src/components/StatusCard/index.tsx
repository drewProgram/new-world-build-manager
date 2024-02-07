import * as S from './styles'

interface IProps {
    title: string;
}


export default function StatusCard({ title }: IProps) {
    return (
        <>
            <S.Wrapper>
                <S.Title>{ title }</S.Title>

                
            </S.Wrapper>
        </>
    );
}