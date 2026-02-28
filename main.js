let pessoa = {
    nome: "João",
    sobrenome: "Silva",
    idade: 30,
    profissao: "Desenvolvedor"
}

console.log(pessoa.nome + " " + pessoa.sobrenome);

let animais = ['Cachorro', 'Gato', 'Pássaro'];
console.log(animais[0]); // Acessa o primeiro elemento do array
console.log(animais.length); // Exibe o tamanho do array
animais.push('Peixe'); // Adiciona um novo elemento ao final do array
animais.splice(1, 1); // Remove o segundo elemento do array (Gato)
animais.shift(); // Remove o primeiro elemento do array (Cachorro)
animais.pop(); // Remove o último elemento do array (Peixe)
console.log(animais);   