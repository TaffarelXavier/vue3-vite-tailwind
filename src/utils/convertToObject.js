export default function convertToObject(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i].name] = array[i].value;
  }
  return obj;
}

// Exemplo de uso:
// const array = [
//   { name: 'time', value: '00:00:04:036' },
//   { name: 'status', value: '2' },
//   { name: 'data', value: '2023-04-25' },
//   { name: 'vendedor', value: '3' },
//   { name: 'cliente_codigo', value: '1136' },
//   { name: 'cliente_nome', value: 'MARIA JOSE CAR DO NASCIMENTO' },
//   { name: 'codigo_interno', value: '' },
//   { name: 'cidade', value: '1' },
//   { name: 'endereco', value: 'R GUIDO DE OLIVEIRA 88 FAROL' },
//   { name: 'observacoes', value: 'adfa' },
//   { name: 'comments', value: 'on' }
// ];

// const result = convertToObject(array);
// console.log(result);
