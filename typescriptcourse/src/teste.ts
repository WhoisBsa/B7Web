// let lista: Array<number> = [1, 2, 3];
// lista.push(4);
// lista.push(5);


// let info: [string, number, string];

// info = ['Matheus', 21, 'Brasil'];


// enum Status {
//   Aguardando = '123',
//   Pago = '456',
//   Cancelado = '789'
// }

// let meuStatus: string = Status.Cancelado;


// let info: any[];

// // info = 4;
// // info = 'Matheus';
// // info = false;
// info = [1, 2, 'adfsf', false, '34'];

// let info: any = 'Matheus';

// let infoLength: number = (info as string).length;

function bemvindo(nome: string, idade: string | number): string {
  let frase = `Hello, ${nome}, you have ${idade} yo!`;
  return frase;
}

bemvindo('Matheus', 21);