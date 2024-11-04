let total = 0;

function adicionarAoCarrinho(button) {
    const livro = button.parentElement;
    const titulo = livro.getAttribute("data-titulo");
    const preco = parseFloat(livro.getAttribute("data-preco"));

    total += preco;

    const listaCarrinho = document.getElementById("lista-carrinho");
    const itemCarrinho = document.createElement("li");
    itemCarrinho.textContent = `${titulo} - R$ ${preco.toFixed(2)}`;
    listaCarrinho.appendChild(itemCarrinho);

    atualizarTotal();
}

function atualizarTotal() {
    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}
