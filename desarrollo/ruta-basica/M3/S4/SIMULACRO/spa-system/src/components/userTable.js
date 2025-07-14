// components/userTable.js
import { getAllUsers } from '../services/users.js'; // Función que obtiene los usuarios desde json-server

/**
 * Renderiza la tabla de usuarios en el panel de administración
 * @param {HTMLElement} container - Elemento donde se insertará la tabla
 */
export async function renderUserTable(container) {
  try {
    const users = await getAllUsers(); // Obtener usuarios desde la API

    // Estructura HTML de la tabla
    const tableHTML = `
  <section class="user-table-section">
    <h3>Lista de Usuarios</h3>
    <table class="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Rol</th>
          <th>Teléfono</th>
          <th>Matrícula</th>
          <th>Fecha de Ingreso</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${users.map(user => `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.phone || 'No disponible'}</td>
            <td>${user.enrollNumber || 'No generada'}</td>
            <td>${user.dateOfAdmission || 'No registrada'}</td>
            <td>
              <button class="edit-btn" data-id="${user.id}">✏️</button>
              <button class="delete-btn" data-id="${user.id}">🗑️</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </section>
`;


    container.innerHTML = tableHTML;

    // Delegación de eventos para botones Editar y Eliminar
    container.addEventListener('click', (e) => {
      if (e.target.classList.contains('edit-btn')) {
        const id = e.target.dataset.id;
        console.log(`Editar usuario con ID: ${id}`);
        // Aquí luego se llamará a renderModal para editar
      }

      if (e.target.classList.contains('delete-btn')) {
        const id = e.target.dataset.id;
        console.log(`Eliminar usuario con ID: ${id}`);
        // Aquí luego se implementará la lógica de confirmación y DELETE
      }
    });

  } catch (error) {
    container.innerHTML = `<p>Error al cargar usuarios.</p>`;
    console.error('Error al cargar usuarios:', error);
  }
}
