import React, { useState } from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  border: 2px solid #000;
  border-radius: 5px;
  padding: 15px;
  margin: 5px;
  font-size: 17px;
  width: 300px;
`;

function SearchBox(props) {

  return (
    <InputText type="text" placeholder={props.frasePadrao || "Digite alguma coisa"} />
  );
}

export default SearchBox;