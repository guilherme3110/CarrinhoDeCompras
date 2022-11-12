let productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99,
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98,
    },
    {
        id: 3,
        name: "Agua de Coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98,
    },
    {
        id: 5,
        name: "Uva Crimson",
        price: 17.98,
    },
];

let body = document.querySelector("body")


let main = document.createElement('main')
body.appendChild(main)

let h1 = document.createElement('h1')
h1.innerText = 'Virtual Market'
main.appendChild(h1)

let div = document.createElement('div')
main.appendChild(div)

let p = document.createElement("p")
        p.classList = 'color'
        p.innerText = 'item'

        let span = document.createElement("span")
        span.classList = 'colorValor'
        span.innerText = 'valores'
 div.append(p, span)

let ul = document.createElement('ul')
main.appendChild(ul)

let soma = 0

function renderCard(lista) {
    for(let i = 0; i < lista.length; i++){
        let liProduto = document.createElement("li")
        liProduto.classList.add('productsCart')


        let titulo = document.createElement("p")
        titulo.classList = 'color'
        titulo.innerText = lista[i].name

        let span = document.createElement("span")
        span.classList = 'colorValor'
        span.innerText = `R$ ${lista[i].price}`

        liProduto.append(titulo, span)
        ul.appendChild(liProduto)
        soma += lista[i].price
    }
    
}
renderCard(productsCart)

let section  = document.createElement('section')
main.appendChild(section)

let paragrafo = document.createElement("p")
        paragrafo.classList = 'color'
        paragrafo.innerText = 'total'

        let texto = document.createElement("span")
        texto.classList = 'total'
        texto.innerText = `R$ ${soma}`
 section.append(paragrafo, texto)

let button = document.createElement('button')
main.appendChild(button)
button.innerText = 'Finalizar Compra'