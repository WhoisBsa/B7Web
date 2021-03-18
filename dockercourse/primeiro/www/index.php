<h1>Lista de Usuários</h1>

<?php
  $pdo = new PDO("mysql:dbname=meudb;host=db", "matheus", "1234");

  $sql = $pdo->query("SELECT * FROM new_table");

  if($sql->rowCount() > 0) {
    $usuarios = $sql->fetchAll();

    echo "<ul>";
    foreach ($usuarios as $usuario) {
      echo "<li>" . $usuario['nome'] . "</li>";
    }
    echo "</ul>";
  } else {
    echo "Não há usuários cadastrados!";
  }
?>