class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}

class Vingador extends Pessoa {
  constructor(
    nome,
    altura,
    peso,
    poderes,
    temArmadura,
    temArma,
    isMembroFundador,
    isImortal
  ) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.temArma = temArma;
    this.isMembroFundador = isMembroFundador;
    this.isImortal = isImortal;
  }

  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[2]}`);
  }
}

const doutorEstranho = new Vingador(
  "Dr. Stephen Vincent Strange",
  "1.75",
  "85kg",
  [
    "Mestre das Artes Místicas",
    "Olho de Agamotto",
    "Capa de Levitação",
    "Livro Vishanti",
    "Esfera de Agamotto",
  ],
  true,
  true,
  false
);

document.getElementById("lutar").onclick = function () {
  doutorEstranho.lutar();
};
