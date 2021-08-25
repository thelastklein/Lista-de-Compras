let imputCompras = document.getElementById("compras");







function adicionar() {

    let lista = document.getElementById("lista");
    lista.insertAdjacentHTML('afterbegin',`<p> ${imputCompras.value} </p>`);

}