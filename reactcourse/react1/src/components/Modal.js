import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalArea = styled.div`
  background-color: #fff;
  padding: 10px 50px;
  border-radius: 5px;
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
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