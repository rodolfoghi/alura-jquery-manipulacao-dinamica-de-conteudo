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
};

$(aposCarregamento);