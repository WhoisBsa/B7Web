import React from 'react';
import { useParams } from 'react-router-dom';

function Categoria() {
  let { cat } = useParams();

  return (
    <div>
      <h4>Página CATEGORIA</h4>
      Exibindo itens da categoria: {cat}
    </div>
  );
}

export default Categoria;