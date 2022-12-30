const colores = document.querySelector('#colores');
const coloresSimbolo = document.querySelector('#colores-simbolo');
const categorias = document.querySelector('#categorias');
const categoriasSimbolo = document.querySelector('#categorias-simbolo');
const medidas = document.querySelector('#medidas');
const medidasSimbolo = document.querySelector('#medidas-simbolo');

const abrirCarrito = document.querySelector('#abrir-carrito');
const cerrarCarrito = document.querySelector('#cerrar-carrito');
const menuCarrito = document.querySelector('#menu-carrito');

const carroTranslado = document.querySelector('#carro-translado');


abrirCarrito.addEventListener('click',() =>{
    
    menuCarrito.classList.toggle("grid")
    menuCarrito.classList.toggle("hidden")
    carroTranslado.classList.add("translate-x-0")
    carroTranslado.classList.remove('translate-x-96');
    
});

cerrarCarrito.addEventListener("click",() =>{ 
    
    menuCarrito.classList.toggle('hidden');  
    menuCarrito.classList.toggle('grid');
    carroTranslado.classList.add('translate-x-96');
    carroTranslado.classList.remove('translate-x-0');
    
    
    
});





coloresSimbolo.addEventListener('click', () => {
    colores.classList.toggle('flex');
    colores.classList.toggle('hidden');
});

categoriasSimbolo.addEventListener('click', () => {
    categorias.classList.toggle('flex');
    categorias.classList.toggle('hidden');
});

medidasSimbolo.addEventListener('click', () => {
    medidas.classList.toggle('flex');
    medidas.classList.toggle('hidden');
});
