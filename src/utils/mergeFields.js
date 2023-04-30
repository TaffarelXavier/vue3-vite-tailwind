

// Exemplo
// const template = 'Olá, {nome}! Seu email é {email}.';
// const data = { nome: 'João', email: 'joao@example.com' };
// const mensagem = mergeFields(template, data);

function mergeFields(template, data) {
  // Procura por cada campo do template e substitui pelo valor correspondente
  return template.replace(/\{([\w\s\-\.]*)\}/g, function(match, field) {
    // Verifica se o campo existe no objeto de dados
    if (data.hasOwnProperty(field)) {
      return data[field];
    } else {
      // Se não encontrar, retorna o próprio campo sem substituir
      return match;
    }
  });
}


export default mergeFields;
