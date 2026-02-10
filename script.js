// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    sidebar.style.width = '250px';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.width = '0';
});

// ====== MODAL DE PRODUCTOS ======
let productos = [];
let productoActual = 0;

function abrirModal(titulo, precio, detalles, imagen) {
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-precio').innerText = precio;
    document.getElementById('modal-detalles').innerText = detalles;
    document.getElementById('modal-img').src = imagen;
    document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        cerrarModal();
    }
};

function siguienteProducto() {
    productoActual = (productoActual + 1) % productos.length;
    mostrarProducto(productoActual);
}

function anteriorProducto() {
    productoActual = (productoActual - 1 + productos.length) % productos.length;
    mostrarProducto(productoActual);
}

function mostrarProducto(index) {
    const p = productos[index];
    abrirModal(p.titulo, p.precio, p.detalles, p.imagen);
}

// ====== LISTA DE 60 EQUIPOS ======
productos = [
    // iPhone
    {titulo: "iPhone 15 Pro Max", precio: "$25,999", detalles: "Pantalla 6.7” Super Retina XDR, 512GB, 8GB RAM, Cámara 48MP", imagen: "img/iphone1.jpg"},
    {titulo: "iPhone 15 Pro", precio: "$23,999", detalles: "Pantalla 6.1” Super Retina XDR, 256GB, 8GB RAM, Cámara 48MP", imagen: "img/iphone2.jpg"},
    {titulo: "iPhone 14 Pro Max", precio: "$22,499", detalles: "Pantalla 6.7” Super Retina XDR, 256GB, 6GB RAM, Cámara 48MP", imagen: "img/iphone3.jpg"},
    {titulo: "iPhone 14 Pro", precio: "$20,999", detalles: "Pantalla 6.1” Super Retina XDR, 128GB, 6GB RAM, Cámara 48MP", imagen: "img/iphone4.jpg"},
    {titulo: "iPhone 14", precio: "$18,999", detalles: "Pantalla 6.1” Super Retina XDR, 128GB, 6GB RAM, Cámara 12MP", imagen: "img/iphone5.jpg"},
    {titulo: "iPhone 13 Pro Max", precio: "$17,999", detalles: "Pantalla 6.7” Super Retina XDR, 256GB, 6GB RAM, Cámara 12MP", imagen: "img/iphone6.jpg"},
    {titulo: "iPhone 13 Pro", precio: "$16,999", detalles: "Pantalla 6.1” Super Retina XDR, 128GB, 6GB RAM, Cámara 12MP", imagen: "img/iphone7.jpg"},
    {titulo: "iPhone 13", precio: "$15,499", detalles: "Pantalla 6.1” Super Retina XDR, 128GB, 4GB RAM, Cámara 12MP", imagen: "img/iphone8.jpg"},
    {titulo: "iPhone 12 Pro Max", precio: "$14,999", detalles: "Pantalla 6.
