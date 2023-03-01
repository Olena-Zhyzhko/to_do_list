import styled from '@emotion/styled';
import Modal from 'react-modal';

export const ModalStyled = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 5px;
    border-color: white;
    background-color: #dbdada;
`;
