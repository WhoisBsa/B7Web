import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0,0,0, 0.7)
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalArea = styled.div`
  background-color: #ccc;
  padding: 10px;
`;

function Modal(props) {
  return (
    <div>
      {
        props.visible && (
          <ModalBackground onClick={() => props.setVisible(false)}>
            <ModalArea>
              {props.children}
            </ModalArea>
          </ModalBackground>
        )
      }
    </div>
  );
}

export default Modal;