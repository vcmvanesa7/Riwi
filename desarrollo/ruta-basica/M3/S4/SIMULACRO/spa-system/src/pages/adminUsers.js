// src/pages/adminUsers.js

// 👉 Importamos las funciones necesarias
import { getUserStorage } from '../utils/storage.js';
import { renderHeader, setupHeaderEvents } from '../components/header.js';
import { renderSidebar } from '../components/sidebar.js';
import { renderModal, openModal, closeModal } from '../components/modal.js';
import { renderUserTable } from '../components/userTable.js';
import { registerUser } from '../services/users.js';

/**
 * Vista para gestionar usuarios (solo accesible por el admin)
 */
export function renderAdminUsers(app) {
    const user = getUserStorage();

    // 🚨 Validación de seguridad: solo admins
    if (!user || user.role !== 'admin') {
        window.location.hash = '#/';
        return;
    }

    // 🧱 Renderizamos la interfaz de gestión de usuarios
    app.innerHTML = `
    ${renderHeader()}
    ${renderSidebar()}

    <section class="admin-users">
      <h2>Gestión de Usuarios</h2>

      <!-- Botón para abrir el modal de creación de usuarios -->
      <button id="create-user-btn">+ Crear Usuario</button>

      <!-- Contenedor del modal -->
      <div id="modal-container"></div>

      <!-- Contenedor para la tabla de usuarios -->
      <div id="user-table-container"></div>
    </section>
  `;

    setupHeaderEvents(); // 🔐 Activa botón de cerrar sesión

    // 🧩 1. Insertamos el modal de creación/edición
    const modalContainer = document.getElementById('modal-container');
    renderModal(modalContainer);

    // 🧩 2. Botón para abrir el modal
    const createUserBtn = document.getElementById('create-user-btn');
    createUserBtn.addEventListener('click', () => openModal());

    // 🧩 3. Renderizamos tabla de usuarios
    const userTableContainer = document.getElementById('user-table-container');
    renderUserTable(userTableContainer);

    // 🧩 4. Lógica del formulario del modal
    const userForm = document.getElementById('user-form');
    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Capturamos los valores del formulario
        const newUser = {
            name: document.getElementById('modal-name').value.trim(),
            email: document.getElementById('modal-email').value.trim(),
            password: document.getElementById('modal-password').value.trim(),
            role: document.getElementById('modal-role').value,
            phone: document.getElementById('modal-phone')?.value.trim() || ''
        };

        const userId = userForm.dataset.userId;

        try {
            if (userId) {
                // Edición: validamos y conservamos matrícula y fecha
                const isValid = await registerUser(newUser, userId);
                if (!isValid) return;

                const res = await fetch(`http://localhost:3000/users/${userId}`);
                const currentUser = await res.json();

                newUser.enrollNumber = currentUser.enrollNumber;
                newUser.dateOfAdmission = currentUser.dateOfAdmission;

                // Actualizamos el usuario
                await fetch(`http://localhost:3000/users/${userId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newUser)
                });

            } else {
                // Creación: validamos clave si es admin
                if (newUser.role === 'admin') {
                    const key = document.getElementById('modal-admin-key').value;
                    if (key !== 'claveadmin123') {
                        alert('Clave secreta incorrecta. No se creó el usuario.');
                        return;
                    }
                }

                const created = await registerUser(newUser);
                if (!created) return;
            }

            // Finalizamos
            userForm.reset();
            userForm.removeAttribute('data-user-id');
            closeModal();
            renderUserTable(userTableContainer);

        } catch (error) {
            console.error('Error al guardar el usuario:', error);
            alert('Ocurrió un error al guardar el usuario.');
        }
    });
}
