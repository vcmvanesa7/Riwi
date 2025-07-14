// src/pages/adminCourses.js

// 🧠 Función que obtiene al usuario logueado desde localStorage
import { getUserStorage } from '../utils/storage.js';

// 📦 Funciones del CRUD de cursos desde services
import {
  getAllCourses,
  deleteCourse,
  createCourse,
  updateCourse
} from '../services/courses.js';

// 🧩 Componentes reutilizables
import { renderHeader, setupHeaderEvents } from '../components/header.js';
import { renderSidebar } from '../components/sidebar.js';

// ✅ Vista principal para el administrador donde gestiona cursos
export async function renderAdminCourses(app) {
  const user = getUserStorage(); // Verificamos si hay un usuario logueado

  // 🔐 Verificamos que sea un admin
  if (!user || user.role !== 'admin') {
    window.location.hash = '#/'; // Si no lo es, lo sacamos de esta vista
    return;
  }

  // 🖼️ Renderizamos la estructura HTML del dashboard de cursos
  app.innerHTML = `
    ${renderHeader()}        <!-- Header superior con logout -->
    ${renderSidebar()}       <!-- Menú lateral con navegación -->

    <section class="dashboard">
      <h2>Gestión de Cursos</h2>

      <!-- Botón para abrir el modal de crear curso -->
      <button id="open-course-modal">+ Crear Curso</button>

      <!-- Tabla de cursos existentes -->
      <table id="courses-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha Inicio</th>
            <th>Duración</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <!-- Modal para crear o editar curso -->
      <div id="course-modal" class="modal" style="display: none;">
        <div class="modal-content">
          <span id="close-course-modal" class="close">&times;</span>
          <h3 id="course-modal-title">Crear Curso</h3>

          <form id="course-form">
            <label for="course-title">Título:</label>
            <input type="text" id="course-title" required />

            <label for="course-description">Descripción:</label>
            <textarea id="course-description" required></textarea>

            <label for="course-start">Fecha de inicio:</label>
            <input type="date" id="course-start" required />

            <label for="course-duration">Duración:</label>
            <input type="text" id="course-duration" required />

            <button type="submit" id="course-submit">Guardar</button>
          </form>
        </div>
      </div>
    </section>
  `;

  // 🔁 Activamos eventos de logout
  setupHeaderEvents();

  // 🛠️ Activamos eventos del modal y la tabla
  setupCourseEvents();

  // 🧾 Cargamos y mostramos los cursos actuales en la tabla
  renderCourseTable();
}

/**
 * Configura los eventos del modal de cursos
 */
function setupCourseEvents() {
  const modal = document.getElementById('course-modal');
  const form = document.getElementById('course-form');
  const tbody = document.querySelector('#courses-table tbody');

  const titleInput = document.getElementById('course-title');
  const descInput = document.getElementById('course-description');
  const dateInput = document.getElementById('course-start');
  const durInput = document.getElementById('course-duration');
  const closeBtn = document.getElementById('close-course-modal');

  let editingId = null;

  // ➕ Abrir modal para crear nuevo curso
  document.getElementById('open-course-modal').addEventListener('click', () => {
    modal.style.display = 'block';
    form.reset();
    editingId = null;
  });

  // ❌ Cerrar modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    form.reset();
    editingId = null;
  });

  // ✏️ Editar o eliminar curso
  tbody.addEventListener('click', async (e) => {
    const id = e.target.dataset.id;
    if (e.target.classList.contains('edit-btn')) {
      const courses = await getAllCourses();
      const course = courses.find(c => c.id == id);
      if (course) {
        editingId = id;
        modal.style.display = 'block';
        titleInput.value = course.title;
        descInput.value = course.description;
        dateInput.value = course.startDate;
        durInput.value = course.duration;
      }
    }

    if (e.target.classList.contains('delete-btn')) {
      const confirmDelete = confirm('¿Eliminar curso?');
      if (confirmDelete) {
        await deleteCourse(id);
        renderCourseTable();
      }
    }
  });

  // 💾 Guardar curso nuevo o editado
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newCourse = {
      title: titleInput.value.trim(),
      description: descInput.value.trim(),
      startDate: dateInput.value,
      duration: durInput.value.trim()
    };

    if (editingId) {
      await updateCourse(editingId, newCourse);
    } else {
      await createCourse(newCourse);
    }

    modal.style.display = 'none';
    form.reset();
    editingId = null;
    renderCourseTable();
  });
}

/**
 * Renderiza la tabla de cursos
 */
async function renderCourseTable() {
  const courses = await getAllCourses();
  const tbody = document.querySelector('#courses-table tbody');
  tbody.innerHTML = '';

  courses.forEach(course => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${course.title}</td>
      <td>${course.description}</td>
      <td>${course.startDate}</td>
      <td>${course.duration}</td>
      <td>
        <button class="edit-btn" data-id="${course.id}">Editar</button>
        <button class="delete-btn" data-id="${course.id}">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
