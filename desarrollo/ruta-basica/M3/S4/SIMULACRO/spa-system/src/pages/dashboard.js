// src/pages/dashboard.js
// Importamos las funciones necesarias
import { getUserStorage } from '../utils/storage.js';
import { renderHeader, setupHeaderEvents } from '../components/header.js'; // 👈 setupHeaderEvents para logout
import { renderSidebar } from '../components/sidebar.js';
import { renderModal, openModal, closeModal } from '../components/modal.js'; // Modal de crear/editar usuario
import { renderUserTable } from '../components/userTable.js';                 // Tabla de usuarios
import { registerUser } from '../services/users.js';                         // 👈 Reutilizar lógica central de registro

/**
 * Función que renderiza el panel de administración.
 * Esta vista solo debe ser accesible para usuarios con rol "admin".
 */
export function renderDashboard(app) {
    const user = getUserStorage(); // Obtenemos el usuario logueado (si existe)

    // Validar que el usuario esté logueado y tenga rol "admin"
    if (!user || user.role !== 'admin') {
        window.location.hash = '#/'; // Redirige si no tiene acceso
        return;
    }

    // Renderizamos todo el contenido del panel
    app.innerHTML = `
      ${renderHeader()}                     <!-- Encabezado con info del admin -->
      ${renderSidebar()}                   <!-- Menú lateral de navegación -->

      <section class="dashboard">
        <h2>Panel de Administración</h2>
        <p>Bienvenido, administrador.</p>

        <!-- Botón para abrir el modal de creación de usuarios -->
        <button id="create-user-btn">+ Crear Usuario</button>

        <!-- Contenedor para el modal -->
        <div id="modal-container"></div>

        <!-- Contenedor para la tabla de usuarios -->
        <div id="user-table-container"></div>
      </section>
    `;

    setupHeaderEvents(); // 👈 Activa el botón "Cerrar sesión" del Header

    // 1. Insertamos el modal dentro del contenedor
    const modalContainer = document.getElementById('modal-container');
    renderModal(modalContainer);

    // 2. Evento para abrir el modal al hacer clic en "Crear Usuario"
    const createUserBtn = document.getElementById('create-user-btn');
    createUserBtn.addEventListener('click', () => {
        openModal(); // Mostramos el modal vacío para crear nuevo usuario
    });

    // 3. Cargamos la tabla de usuarios al iniciar el panel
    const userTableContainer = document.getElementById('user-table-container');
    renderUserTable(userTableContainer);

    // 4. Escuchamos el formulario del modal (crear o editar)
    const userForm = document.getElementById('user-form');

    userForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita recarga

        // Obtenemos valores del formulario (solo campos visibles)
        const newUser = {
            name: document.getElementById('modal-name').value.trim(),
            email: document.getElementById('modal-email').value.trim(),
            password: document.getElementById('modal-password').value.trim(),
            role: document.getElementById('modal-role').value,
            phone: document.getElementById('modal-phone')?.value.trim() || ''
            // enrollNumber y dateOfAdmission los gestiona registerUser
        };

        const userId = userForm.dataset.userId;

        try {
            if (userId) {
                // Edición (PUT)
                await fetch(`http://localhost:3000/users/${userId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newUser)
                });

                if (newUser.role === 'admin') {
                    const key = document.getElementById('modal-admin-key').value;
                    if (key !== 'claveadmin123') {
                        alert('Clave secreta incorrecta. No se creó el usuario.');
                        return;
                    }
                }

                // Creación (POST) delegada a registerUser
                const created = await registerUser(newUser);
                if (!created) {
                    // Si la validación o el registro falla, salimos sin cerrar modal
                    return;
                }
            }

            // Limpiar, cerrar modal y actualizar tabla
            userForm.reset();
            userForm.removeAttribute('data-user-id');
            closeModal();
            renderUserTable(userTableContainer); // Recarga tabla

        } catch (error) {
            console.error('Error al guardar el usuario:', error);
            alert('Ocurrió un error al guardar el usuario.');
        }
    });
}
