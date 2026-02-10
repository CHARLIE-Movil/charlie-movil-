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
    // iPhone (continuación)
    {titulo: "iPhone 12 Pro", precio: "$13,999", detalles: "Pantalla 6.1” Super Retina XDR, 128GB, 6GB RAM, Cámara 12MP", imagen: "img/iphone9.jpg"},
    {titulo: "iPhone 12", precio: "$12,499", detalles: "Pantalla 6.1” Super Retina XDR, 64GB, 4GB RAM, Cámara 12MP", imagen: "img/iphone10.jpg"},

    // Samsung
    {titulo: "Samsung Galaxy S23 Ultra", precio: "$18,999", detalles: "Pantalla 6.8” AMOLED, 256GB, 12GB RAM, Cámara 200MP", imagen: "img/samsung1.jpg"},
    {titulo: "Samsung Galaxy S23+", precio: "$16,999", detalles: "Pantalla 6.6” AMOLED, 256GB, 8GB RAM, Cámara 50MP", imagen: "img/samsung2.jpg"},
    {titulo: "Samsung Galaxy S23", precio: "$15,499", detalles: "Pantalla 6.1” AMOLED, 128GB, 8GB RAM, Cámara 50MP", imagen: "img/samsung3.jpg"},
    {titulo: "Samsung Galaxy Z Fold4", precio: "$39,999", detalles: "Pantalla plegable 7.6” AMOLED, 512GB, 12GB RAM, Cámara 50MP", imagen: "img/samsung4.jpg"},
    {titulo: "Samsung Galaxy Z Flip4", precio: "$22,999", detalles: "Pantalla plegable 6.7” AMOLED, 256GB, 8GB RAM, Cámara 12MP", imagen: "img/samsung5.jpg"},
    {titulo: "Samsung Galaxy S22 Ultra", precio: "$17,999", detalles: "Pantalla 6.8” AMOLED, 256GB, 12GB RAM, Cámara 108MP", imagen: "img/samsung6.jpg"},
    {titulo: "Samsung Galaxy S22+", precio: "$15,999", detalles: "Pantalla 6.6” AMOLED, 128GB, 8GB RAM, Cámara 50MP", imagen: "img/samsung7.jpg"},
    {titulo: "Samsung Galaxy S22", precio: "$14,499", detalles: "Pantalla 6.1” AMOLED, 128GB, 8GB RAM, Cámara 50MP", imagen: "img/samsung8.jpg"},
    {titulo: "Samsung Galaxy A73", precio: "$10,999", detalles: "Pantalla 6.7” AMOLED, 128GB, 6GB RAM, Cámara 108MP", imagen: "img/samsung9.jpg"},
    {titulo: "Samsung Galaxy A53", precio: "$8,999", detalles: "Pantalla 6.5” AMOLED, 128GB, 6GB RAM, Cámara 64MP", imagen: "img/samsung10.jpg"},

    // OPPO
    {titulo: "OPPO Find X5 Pro", precio: "$21,999", detalles: "Pantalla 6.7” AMOLED, 256GB, 12GB RAM, Cámara 50MP", imagen: "img/oppo1.jpg"},
    {titulo: "OPPO Find X5", precio: "$18,999", detalles: "Pantalla 6.55” AMOLED, 256GB, 8GB RAM, Cámara 50MP", imagen: "img/oppo2.jpg"},
    {titulo: "OPPO Reno8 Pro", precio: "$15,999", detalles: "Pantalla 6.7” AMOLED, 256GB, 8GB RAM, Cámara 50MP", imagen: "img/oppo3.jpg"},
    {titulo: "OPPO Reno8", precio: "$13,999", detalles: "Pantalla 6.4” AMOLED, 128GB, 8GB RAM, Cámara 50MP", imagen: "img/oppo4.jpg"},
    {titulo: "OPPO Reno7 Pro", precio: "$12,999", detalles: "Pantalla 6.55” AMOLED, 256GB, 8GB RAM, Cámara 50MP", imagen: "img
            // OPPO (continuación)
    {titulo: "OPPO Reno7", precio: "$11,499", detalles: "Pantalla 6.43” AMOLED, 128GB, 8GB RAM, Cámara 64MP", imagen: "img/oppo6.jpg"},
    {titulo: "OPPO Reno6 Pro", precio: "$10,999", detalles: "Pantalla 6.55” AMOLED, 128GB, 8GB RAM, Cámara 64MP", imagen: "img/oppo7.jpg"},
    {titulo: "OPPO Reno6", precio: "$9,999", detalles: "Pantalla 6.43” AMOLED, 128GB, 8GB RAM, Cámara 64MP", imagen: "img/oppo8.jpg"},
    {titulo: "OPPO A96", precio: "$7,999", detalles: "Pantalla 6.59” LCD, 128GB, 8GB RAM, Cámara 50MP", imagen: "img/oppo9.jpg"},
    {titulo: "OPPO A76", precio: "$6,999", detalles: "Pantalla 6.56” LCD, 128GB, 6GB RAM, Cámara 13MP", imagen: "img/oppo10.jpg"},

    // HONOR
    {titulo: "HONOR Magic4 Pro", precio: "$21,999", detalles: "Pantalla 6.81” OLED, 256GB, 12GB RAM, Cámara 50MP", imagen: "img/honor1.jpg"},
    {titulo: "HONOR Magic4", precio: "$18,999", detalles: "Pantalla 6.81” OLED, 256GB, 8GB RAM, Cámara 50MP", imagen: "img/honor2.jpg"},
    {titulo: "HONOR 70 Pro+", precio: "$15,999", detalles: "Pantalla 6.78” OLED, 256GB, 12GB RAM, Cámara 54MP", imagen: "img/honor3.jpg"},
    {titulo: "HONOR 70 Pro", precio: "$14,999", detalles: "Pantalla 6.78” OLED, 256GB, 8GB RAM, Cámara 54MP", imagen: "img/honor4.jpg"},
    {titulo: "HONOR 70", precio: "$13,499", detalles: "Pantalla 6.67” OLED, 128GB, 8GB RAM, Cámara 54MP", imagen: "img/honor5.jpg"},
    {titulo: "HONOR 60 Pro", precio: "$12,999", detalles: "Pantalla 6.78” OLED, 256GB, 8GB RAM, Cámara 108MP", imagen: "img/honor6.jpg"},
    {titulo: "HONOR 60", precio: "$11,499", detalles: "Pantalla 6.67” OLED, 128GB, 8GB RAM, Cámara 108MP", imagen: "img/honor7.jpg"},
    {titulo: "HONOR 50 Pro", precio: "$10,999", detalles: "Pantalla 6.72” OLED, 256GB, 8GB RAM, Cámara 108MP", imagen: "img/honor8.jpg"},
    {titulo: "HONOR 50", precio: "$9,999", detalles: "Pantalla 6.57” OLED, 128GB, 6GB RAM, Cámara 108MP", imagen: "img/honor9.jpg"},
    {titulo: "HONOR X30", precio: "$8,499", detalles: "Pantalla 6.81” LCD, 128GB, 6GB RAM, Cámara 48MP", imagen: "img/honor10.jpg"},

    // RENO
    {titulo: "RENO 10 Pro+", precio: "$19,999", detalles: "Pantalla 6.74” AMOLED, 256GB, 12GB RAM, Cámara 64MP", imagen: "img/reno1.jpg"},
    {titulo: "RENO 10 Pro", precio: "$17,999", detalles: "Pantalla 6.7” AMOLED, 256GB, 8GB RAM, Cámara 64MP", imagen: "img/reno2.jpg"},
    {titulo: "RENO 10
            // RENO (continuación)
    {titulo: "RENO 10", precio: "$15,999", detalles: "Pantalla 6.7” AMOLED, 128GB, 8GB RAM, Cámara 64MP", imagen: "img/reno3.jpg"},
    {titulo: "RENO 9 Pro+", precio: "$14,999", detalles: "Pantalla 6.7” AMOLED, 256GB, 12GB RAM, Cámara 50MP", imagen: "img/reno4.jpg"},
    {titulo: "RENO 9 Pro", precio: "$13,999", detalles: "Pantalla 6.7” AMOLED, 256GB, 8GB RAM, Cámara 50MP", imagen: "img/reno5.jpg"},
    {titulo: "RENO 9", precio: "$12,499", detalles: "Pantalla 6.7” AMOLED, 128GB, 8GB RAM, Cámara 50MP", imagen: "img/reno6.jpg"},
    {titulo: "RENO 8 Pro+", precio: "$11,999", detalles: "Pantalla 6.7” AMOLED, 256GB, 8GB RAM, Cámara 50MP", imagen: "img/reno7.jpg"},
    {titulo: "RENO 8 Pro", precio: "$10,999", detalles: "Pantalla 6.7” AMOLED, 128GB, 8GB RAM, Cámara 50MP", imagen: "img/reno8.jpg"},
    {titulo: "RENO 8", precio: "$9,999", detalles: "Pantalla 6.4” AMOLED, 128GB, 8GB RAM, Cámara 50MP", imagen: "img/reno9.jpg"},
    {titulo: "RENO 7", precio: "$8,999", detalles: "Pantalla 6.43” AMOLED, 128GB, 6GB RAM, Cámara 64MP", imagen: "img/reno10.jpg"},

    // MOTOROLA
    {titulo: "Motorola Edge 40 Pro", precio: "$18,999", detalles: "Pantalla 6.67” OLED, 256GB, 12GB RAM, Cámara 50MP", imagen: "img/moto1.jpg"},
    {titulo: "Motorola Edge 40", precio: "$16,999", detalles: "Pantalla 6.55” OLED, 256GB, 8GB RAM, Cámara 50MP", imagen: "img/moto2.jpg"},
    {titulo: "Motorola Edge 30 Ultra", precio: "$15,999", detalles: "Pantalla 6.67” OLED, 256GB, 12GB RAM, Cámara 200MP", imagen: "img/moto3.jpg"},
    {titulo: "Motorola Edge 30 Pro", precio: "$14,999", detalles: "Pantalla 6.7” OLED, 256GB, 8GB RAM, Cámara 50MP", imagen: "img/moto4.jpg"},
    {titulo: "Motorola Edge 30", precio: "$13,499", detalles: "Pantalla 6.5” OLED, 128GB, 8GB RAM, Cámara 50MP", imagen: "img/moto5.jpg"},
    {titulo: "Motorola G200", precio: "$11,999", detalles: "Pantalla 6.8” LCD, 128GB, 8GB RAM, Cámara 108MP", imagen: "img/moto6.jpg"},
    {titulo: "Motorola G100", precio: "$10,499", detalles: "Pantalla 6.7” LCD, 128GB, 8GB RAM, Cámara 64MP", imagen: "img/moto7.jpg"},
    {titulo: "Motorola G82", precio: "$8,999", detalles: "Pantalla 6.6” OLED, 128GB, 6GB RAM, Cámara 50MP", imagen: "img/moto8.jpg"},
    {titulo: "Motorola G72", precio: "$7,999", detalles: "Pantalla 6.6” OLED, 128GB, 6GB RAM, Cámara 108MP", imagen: "img/moto9.jpg"},
    {titulo: "Motorola G52", precio: "$6,999", detalles: "Pant
