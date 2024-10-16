// Definindo a classe Pessoa
class Pessoa {
    // Propriedades da classe
    nome;
    idade;
    altura;
    peso;
  
    // Construtor para inicializar as propriedades
    constructor(nome, idade, altura, peso) {
        this.nome = nome;   // Nome da pessoa
        this.idade = idade; // Idade da pessoa
        this.altura = altura; // Altura da pessoa em metros
        this.peso = peso;     // Peso da pessoa em kg
    }

    // Método para calcular o IMC
    valorImc() {
        // IMC = peso / (altura * altura)
        return this.peso / (this.altura * this.altura);
    }

    // Método para classificar o IMC com base nas faixas da OMS
    classificaImc() {
        const imc = this.valorImc(); // Calcula o IMC chamando o método valorImc()
        
        // Classifica o IMC em diferentes faixas
        if (imc < 18.5) {
            return 'Abaixo do peso'; // Se o IMC for menor que 18.5, está abaixo do peso
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';    // IMC entre 18.5 e 24.9 é considerado peso normal
        } else if (imc >= 25 && imc < 30) {
            return 'Sobrepeso';      // IMC entre 25 e 29.9 indica sobrepeso
        } else if (imc >= 30 && imc < 35) {
            return 'Obesidade grau I'; // IMC entre 30 e 34.9 é obesidade grau I
        } else if (imc >= 35 && imc < 40) {
            return 'Obesidade grau II (severa)'; // IMC entre 35 e 39.9 é obesidade grau II
        } else {
            return 'Obesidade grau III (mórbida)'; // IMC acima de 40 é obesidade grau III
        }
    }
}

// Criando um novo objeto da classe Pessoa
const pessoa1 = new Pessoa('Ramom', 18, 1.65, 83); // Nome: Ramom, Idade: 18, Altura: 1.65m, Peso: 83kg

// Calcula o IMC da pessoa
const imc = pessoa1.valorImc(); 

// Classifica o IMC da pessoa
const classifica = pessoa1.classificaImc(); 

// Exibe o objeto pessoa1 e o IMC arredondado para duas casas decimais, junto com sua classificação
console.log(pessoa1, `IMC: ${imc.toFixed(2)} Classificação: ${classifica}`);
