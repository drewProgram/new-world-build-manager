import { ReactNode, useState } from 'react';

import * as S from './styles';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <S.Header>
                <S.Title>New World Build Manager</S.Title>
            </S.Header>

            <S.Main>
                {children}
            </S.Main>
            <S.Footer>
                <p>Created by Andrew</p>
            </S.Footer>
        </>
    )
}
