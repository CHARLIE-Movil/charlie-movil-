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

// Cerrar modal si se hace clic fuera
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        cerrarModal();
    }
};

// ====== NAVEGACIÓN ENTRE PRODUCTOS ======
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

// ====== CARGAR PRODUCTOS DINÁMICAMENTE ======
// Aquí puedes agregar todos los equipos con sus datos
productos = [
    {
        titulo: "iPhone 15 Pro Max",
        precio: "$25,999",
        detalles: "Pantalla 6.7” Super Retina XDR, 512GB, 8GB RAM, Cámara 48MP",
        imagen: "img/iphone1.jpg"
    },
    {
        titulo: "Samsung Galaxy S23 Ultra",
        precio: "$18,999",
        detalles: "Pantalla 6.8” AMOLED, 256GB, 12GB RAM, Cámara 200MP",
        imagen: "img/samsung1.jpg"
    }
    // Aquí seguirán los demás equipos...
];
