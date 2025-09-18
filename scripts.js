class Parquimetro {
  constructor(valorInserido) {
    this.valorInserido = valorInserido;
    this.tabela = [
      { preco: 1.00, tempo: 30 },   
      { preco: 1.75, tempo: 60 },   
      { preco: 3.00, tempo: 120 }   
    ];
  }

  calcular() {
    if (isNaN(this.valorInserido) || this.valorInserido < 1) {
      return { mensagem: "Valor insuficiente!", tempo: 0, troco: this.valorInserido || 0 };
    }

    let escolhido = null;

    for (let i = this.tabela.length - 1; i >= 0; i--) {
      if (this.valorInserido >= this.tabela[i].preco) {
        escolhido = this.tabela[i];
        break;
      }
    }

    if (escolhido) {
      const troco = +(this.valorInserido - escolhido.preco).toFixed(2);
      return {
        mensagem: `Tempo adquirido: ${escolhido.tempo} minutos.`,
        tempo: escolhido.tempo,
        troco: troco > 0 ? troco : 0
      };
    }

    return { mensagem: "Erro ao calcular!", tempo: 0, troco: 0 };
  }
}

document.getElementById("calcular").addEventListener("click", () => {
  const valor = parseFloat(document.getElementById("valor").value);
  const parquimetro = new Parquimetro(valor);
  const resultado = parquimetro.calcular();

  document.getElementById("resultado").innerHTML = `
    <p>${resultado.mensagem}</p>
    <p>Troco: R$ ${resultado.troco.toFixed(2)}</p>
  `;
});

// fim
