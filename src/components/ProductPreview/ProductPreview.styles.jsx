import styled from 'styled-components';

export const ProductPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TitleContainer = styled.h1`
    display: flex;
    justify-content: space-between;
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover {
        color: grey;
    }
`;

export const ProductFooter = styled.div`
    color: black;
`;