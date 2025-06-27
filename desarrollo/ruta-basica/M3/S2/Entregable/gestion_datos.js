// ——————————————————————————
// Inicialización y persistencia
// ——————————————————————————
let productos = JSON.parse(localStorage.getItem('productos')) || [];

const formulario = document.getElementById('formularioProducto');
const catalogo   = document.getElementById('catalogoProductos');
const filtro     = document.getElementById('filtroCategoria');

function guardarEnLocalStorage() {
  localStorage.setItem('productos', JSON.stringify(productos));
}

// ——————————————————————————
// RENDERIZADO
// ——————————————————————————
function renderProductos(lista) {
  catalogo.innerHTML = '';
  if (lista.length === 0) {
    catalogo.innerHTML = '<p class="mensaje-vacio">No hay productos disponibles.</p>';
    return;
  }
  lista.forEach(p => {
    const card = document.createElement('div');
    card.className = 'producto-card';
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p><strong>Precio:</strong> $${p.precio.toLocaleString()}</p>
      <p><strong>Cantidad:</strong> ${p.cantidad}</p>
      <p><strong>Categoría:</strong> ${p.categoria}</p>
      <p><strong>Fecha ingreso:</strong> ${p.fecha}</p>
      <p>${p.descripcion}</p>
      <p><small>ID: ${p.id}</small></p>
      <div class="acciones">
        <button onclick="editarProducto(${p.id})">✏️</button>
        <button onclick="eliminarProducto(${p.id})">🗑️</button>
      </div>
    `;
    catalogo.appendChild(card);
  });
}

// ——————————————————————————
// ELIMINAR
// ——————————————————————————
function eliminarProducto(id) {
  if (!confirm('¿Eliminar este producto?')) return;
  productos = productos.filter(p => p.id !== id);
  guardarEnLocalStorage();
  aplicarFiltro(); // para refrescar con filtro activo
}

// ——————————————————————————
// EDITAR (carga en el formulario)
// ——————————————————————————
function editarProducto(id) {
  const p = productos.find(x => x.id === id);
  if (!p) return;
  document.getElementById('id').value          = p.id;
  document.getElementById('nombre').value      = p.nombre;
  document.getElementById('precio').value      = p.precio;
  document.getElementById('cantidad').value    = p.cantidad;
  document.getElementById('fecha').value       = p.fecha;
  document.getElementById('descripcion').value = p.descripcion;
  document.getElementById('categoria').value   = p.categoria;
  document.getElementById('imagen').value      = p.imagen;
  window.scrollTo({ top: document.getElementById('agregar').offsetTop - 50, behavior: 'smooth' });
}

// ——————————————————————————
// SUBMIT FORM
// ——————————————————————————
formulario.addEventListener('submit', e => {
  e.preventDefault();
  const id          = parseInt(document.getElementById('id').value);
  const nombre      = document.getElementById('nombre').value.trim();
  const precio      = parseInt(document.getElementById('precio').value);
  const cantidad    = parseInt(document.getElementById('cantidad').value);
  const fecha       = document.getElementById('fecha').value;
  const descripcion = document.getElementById('descripcion').value.trim();
  const categoria   = document.getElementById('categoria').value;
  const imagen      = document.getElementById('imagen').value.trim();

  // Validaciones básicas
  if (!id || !nombre || !precio || !cantidad || !fecha || !categoria || !imagen) {
    return alert('Completa todos los campos obligatorios.');
  }

  // Evitar ID duplicado al agregar
  const existe = productos.some(p => p.id === id);
  if (existe && !document.getElementById('formularioProducto').dataset.editando) {
    return alert('El ID ya existe. Para editar, usa el botón ✏️ del producto.');
  }

  const nuevo = { id, nombre, precio, cantidad, fecha, descripcion, categoria, imagen };
  if (existe) {
    productos = productos.map(p => p.id === id ? nuevo : p);
  } else {
    productos.push(nuevo);
  }

  // Limpiar estado edición
  delete formulario.dataset.editando;
  formulario.reset();
  guardarEnLocalStorage();
  aplicarFiltro();
});

// ——————————————————————————
// FILTRAR
// ——————————————————————————
function aplicarFiltro() {
  const cat = filtro.value;
  if (cat === 'todos') renderProductos(productos);
  else renderProductos(productos.filter(p => p.categoria === cat));
}

filtro.addEventListener('change', aplicarFiltro);

// ——————————————————————————
// INIT
// ——————————————————————————
renderProductos(productos);