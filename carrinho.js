var umaPropaganda = function() {
    var propagandas = [
        "O que acha de comprar uma motocicleta?",
        "O que acha de comprar uma lancha?",
        "O que acha de comprar uma bicicleta?",
        "O que acha de comprar um carro?",
    ];

    var posicao = Math.floor(propagandas.length * Math.random());

    var texto = propagandas[posicao];
    var tr = $("<tr>").append($("<td>"));
    tr.addClass("propaganda");
    tr.find("td")
        .attr("colspan", 6)
        .text(texto);
    return tr;
}

var atualizaDados = function () {
    var carrinhos = $('.carrinho');

    carrinhos.each(function () {
        var carrinho = $(this);
        var items = carrinho.find('.item-total:visible');
        var valorTotal = 0;
        for (var i = 0; i < items.length; i++) {
            var item = $(items[i]);
            var valor = parseFloat(item.text());
            valorTotal += valor;
        }
        carrinho.find('.valor-total').text(valorTotal);
        carrinho.find('.quantidade-de-itens').text(items.length);
    });
};

var removeItem = function (event) {
    event.preventDefault();

    var self = $(this);
    self.closest('tr').hide();

    atualizaDados();
};

var undo = function () {
    var carrinho = $(this).closest('.carrinho');
    var trsVisible = carrinho.find('tr:visible');
    trsVisible.removeClass('recuperado');

    var trsHidden = carrinho.find('tr:hidden');
    trsHidden.addClass('recuperado');
    trsHidden.show();

    atualizaDados();
};

var aposCarregamento = function () {
    atualizaDados();
    $('.remove-item').click(removeItem);
    $('.undo').click(undo);

    $(".carrinho").each(function(){
        var carrinho = $(this);
        carrinho.find("tr:nth-child(3n)").each(function(){
            umaPropaganda().insertAfter($(this));
        });
    });
};

$(aposCarregamento);