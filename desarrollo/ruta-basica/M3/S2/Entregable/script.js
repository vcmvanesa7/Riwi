
// Prefijos por categoría
const PREFIX = {
    "Instrumentos de Viento": "IV",
    "Instrumentos de Percusión": "IP",
    "Instrumentos de Cuerda": "IC",
    "Instrumentos Eléctricos": "IE"
};

// Productos quemados o desde localStorage
let productos = JSON.parse(localStorage.getItem("productos")) || {
    producto1: {
        id: "IV001",
        nombre: "Saxofón Alto",
        categoria: "Instrumentos de Viento",
        precio: 350000,
        cantidad: 5,
        fecha: "2025-06-01",
        estado: "Nuevo",
        descripcion: "Saxofón de latón profesional.",
        imagen: "https://tse3.mm.bing.net/th/id/OIP.Zhd27gKoPSQ1a1FE1JO2igAAAA?rs=1&pid=ImgDetMain"
    },
    producto2: {
        id: "IP001",
        nombre: "Tambor Africano",
        categoria: "Instrumentos de Percusión",
        precio: 120000,
        cantidad: 8,
        fecha: "2025-05-20",
        estado: "Nuevo",
        descripcion: "Tambor manual de madera y piel auténtica.",
        imagen: "https://thumbs.dreamstime.com/b/tambor-africano-25975560.jpg"
    },
    producto3: {
        id: "IC001",
        nombre: "Violín Clásico",
        categoria: "Instrumentos de Cuerda",
        precio: 450000,
        cantidad: 3,
        fecha: "2025-04-15",
        estado: "Usado",
        descripcion: "Violín con acabado barnizado, estado bueno.",
        imagen: "https://thumbs.dreamstime.com/z/violin-2742015.jpg?w=768"
    }
};

function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

// DOM
const form = document.getElementById("inventory-form");
const selectCat = document.getElementById("categoria");
const inputId = document.getElementById("idProducto");
const alertSucc = document.getElementById("alert-success");
const productList = document.getElementById("product-list");
const totalPriceP = document.getElementById("total-price");
const ultimosList = document.getElementById("lista-ultimos");
const filtroEditar = document.getElementById("filtro-editar");
const editarLista = document.getElementById("editar-lista");
const filtroCatalogo = document.getElementById("filtro-catalogo");

function generarID(categoria) {
    const pref = PREFIX[categoria];
    const usados = Object.values(productos)
        .map(p => p.id)
        .filter(id => id.startsWith(pref))
        .map(id => parseInt(id.slice(pref.length)));
    const nuevo = (usados.length ? Math.max(...usados) : 0) + 1;
    return `${pref}${String(nuevo).padStart(3, "0")}`;
}

selectCat.addEventListener("change", () => {
    const cat = selectCat.value;
    inputId.value = generarID(cat);
});

function showSuccess() {
    alertSucc.style.display = "block";
    setTimeout(() => alertSucc.style.display = "none", 3000);
}

function renderUltimos() {
    ultimosList.innerHTML = "";
    const ultimos = Object.values(productos).slice(-5).reverse();
    ultimos.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.id} - ${p.nombre} (${p.categoria}) - $${p.precio} x${p.cantidad} - ${p.fecha} - ${p.estado}`;
        ultimosList.appendChild(li);
    });
}

function renderCatalogo() {
    productList.innerHTML = "";
    let total = 0;
    const filtro = filtroCatalogo?.value || "";

    Object.values(productos).forEach(p => {
        if (filtro && p.categoria !== filtro) return;
        total += p.precio * p.cantidad;

        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
      <div class="product-card-inner">
        <div class="product-card-front">
          <img src="${p.imagen}" alt="${p.nombre}" class="thumb">
          <strong>${p.nombre}</strong>
        </div>
        <div class="product-card-back">
          <p>${p.id}</p>
          <p>${p.categoria}</p>
          <p>$${p.precio} x${p.cantidad}</p>
          <p>${p.fecha}</p>
          <p>${p.estado}</p>
        </div>
      </div>
    `;
        productList.appendChild(card);
    });

    totalPriceP.textContent = `Total: $${total}`;
}

function renderEditar(filtro = "") {
    editarLista.innerHTML = "";
    Object.entries(productos).forEach(([key, p]) => {
        if (filtro && !p.id.includes(filtro) && !p.categoria.includes(filtro)) return;
        const li = document.createElement("li");
        li.innerHTML = `
      <strong>${p.nombre}</strong> (${p.id}) - ${p.categoria}<br>
      Cantidad: ${p.cantidad} | Precio: $${p.precio}<br>
      <button onclick="modificarCantidad('${key}', 1)">+1</button>
      <button onclick="modificarCantidad('${key}', -1)">-1</button>
      <button onclick="eliminarProducto('${key}')">Eliminar</button>
    `;
        editarLista.appendChild(li);
    });
}

function modificarCantidad(key, delta) {
    productos[key].cantidad = Math.max(0, productos[key].cantidad + delta);
    guardarProductos();
    renderCatalogo();
    renderEditar(filtroEditar.value);
}

function eliminarProducto(key) {
    delete productos[key];
    guardarProductos();
    renderCatalogo();
    renderEditar(filtroEditar.value);
    renderUltimos();
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const categoria = selectCat.value;
    let id = inputId.value;
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const fecha = document.getElementById("fecha").value;
    const estado = document.querySelector('input[name="estado"]:checked').value;
    const descripcion = document.getElementById("descripcion").value.trim();
    const imagen = document.getElementById("imagenURL").value.trim();

    if (!id && categoria) {
        id = generarID(categoria);
        inputId.value = id;
    }

    if (!nombre || !categoria || !id || !(precio > 0) || !(cantidad >= 0) || !fecha || !imagen) {
        alert("Por favor completa todos los campos correctamente.");
        return;
    }

    const editKey = form.dataset.editKey;
    if (editKey) {
        productos[editKey] = { id, nombre, categoria, precio, cantidad, fecha, estado, descripcion, imagen };
        delete form.dataset.editKey;
        document.getElementById("btn-add").textContent = "Agregar";
    } else {
        const newKey = "producto" + (Object.keys(productos).length + 1);
        productos[newKey] = { id, nombre, categoria, precio, cantidad, fecha, estado, descripcion, imagen };
        showSuccess();
    }

    guardarProductos();
    renderUltimos();
    renderCatalogo();
    renderEditar(filtroEditar.value);
    form.reset();
    inputId.value = "";
    selectCat.value = "";
});

filtroCatalogo?.addEventListener("change", renderCatalogo);
filtroEditar?.addEventListener("input", e => renderEditar(e.target.value));

// Mostrar por consola usando estructuras pedidas
console.log("\n--- Listado con for...in ---");
const primerProd = Object.values(productos)[0];
for (let prop in primerProd) {
    console.log(`${prop}: ${primerProd[prop]}`);
}

console.log("\n--- Listado con for...of y Object.entries() ---");
for (let [key, prod] of Object.entries(productos)) {
    console.log(`${key}: ${prod.nombre} - ${prod.categoria} - $${prod.precio}`);
}

console.log("\n--- Set de IDs únicos ---");
const idsSet = new Set();
Object.values(productos).forEach(p => idsSet.add(p.id));
console.log(idsSet);

console.log("\n--- Map de Categoría => Productos ---");
const categoriaMap = new Map();
Object.values(productos).forEach(p => {
    if (!categoriaMap.has(p.categoria)) categoriaMap.set(p.categoria, []);
    categoriaMap.get(p.categoria).push(p.nombre);
});
categoriaMap.forEach((nombres, cat) => {
    console.log(`${cat}: ${nombres.join(", ")}`);
});

// Inicialización
guardarProductos();
renderUltimos();
renderCatalogo();
renderEditar();
