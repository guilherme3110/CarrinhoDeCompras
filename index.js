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
function somaItens(productsCart){
    for(let i = 0; i < productsCart.length; i++){
        
    }

}

productsCart()

let body = document.querySelector("body")
body.appendChild(body)

let main = document.createElement('main')
main.appendChild(body)

let liProduto = document.createElement("li")
liProduto.classList.add(productsCart)


let titulo = document.createElement("p")
titulo.classList = 'color'
titulo.innerText = {productsCart[i].name}

let span = document.createElement("span")
span.classList = 'colorValor'
titulo.innerText = `${productsCart[i].price},00`

boxItem.appendChild(p)
boxItem.appendChild(titulo)
boxItem.appendChild(span)





