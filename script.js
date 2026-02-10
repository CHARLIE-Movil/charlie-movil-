function abrirModal(titulo, precio, detalles, imagen) {
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-precio').innerText = "Precio: " + precio;
    document.getElementById('modal-detalles').innerText = detalles;
    document.getElementById('modal-img').src = imagen;
    document.getElementById('whatsapp-btn').href = `https://wa.me/5210000000000?text=Hola, me interesa el ${titulo} que vi en tu catálogo.`;
    document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

// Cerrar modal si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        cerrarModal();
    }
}
