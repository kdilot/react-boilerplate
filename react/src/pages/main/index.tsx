import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { test } from 'reducers/test';
import i18next from 'assets/langs/i18n';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Main: React.FC = () => {
    const dispatch = useDispatch();
    const { text, loading } = useSelector((state: RootState) => state.test);
    const { t }: any = useTranslation();

    const onChangeLang = (lng: string) => {
        i18next.changeLanguage(lng);
        localStorage.setItem('lang', lng);
    };

    useEffect(() => {
        dispatch(test());
    }, [dispatch]);

    return (
        <Wrapper>
            <Title>{t('react')}</Title>
            <Contents>{loading ? 'Loading...' : t(text)}</Contents>
            {/* {t('n.test', { n: '!!!' })} */}
            <Lang>
                <div onClick={() => onChangeLang('ko')}>ko</div>
                <div onClick={() => onChangeLang('en')}>en</div>
            </Lang>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    user-select: none;
`;

const Title = styled.h1`
    font-size: 50px;
`;

const Contents = styled.div`
    font-size: 20px;
    font-weight: 500;
`;

const Lang = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    div {
        padding: 3px;
        border: 1px solid;
        border-radius: 3px;
    }
    div ~ div {
        margin-left: 1rem;
    }
    div:hover {
        color: rgba(0, 0, 255, 0.8);
        cursor: pointer;
    }
`;

export default Main;
