// Importamos todas las vistas necesarias
import { renderLogin } from './pages/login.js';
import { renderRegister } from './pages/register.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderPublic } from './pages/public.js';
import { renderUserHome } from './pages/userHome.js';
import { renderAdminCourses } from './pages/adminCourses.js';
import { renderAdminUsers } from './pages/adminUsers.js';
import { getUserStorage } from './utils/storage.js';

// Definimos las rutas válidas
const routes = {
  '#/login': renderLogin,
  '#/register': renderRegister,
  '#/dashboard': renderDashboard,
  '#/courses': renderAdminCourses,
  '#/users': renderAdminUsers,
  '#/user-home': renderUserHome,
  '#/': renderPublic
};

// Obtenemos el contenedor principal donde se renderizan las vistas
const app = document.getElementById('app');

/**
 * Función router
 * Esta función actúa como el enrutador de nuestra SPA.
 */
function router() {
  const hash = window.location.hash || '#/';
  const user = getUserStorage();
  const route = routes[hash];

  // Si no hay usuario logueado
  if (!user) {
    if (hash === '#/login') {
      return renderLogin(app);
    } else if (hash === '#/register') {
      return renderRegister(app);
    } else {
      return renderPublic(app); // Por defecto vista pública
    }
  }

  // Si el usuario ya está logueado y trata de ir a login o register
  if (hash === '#/login' || hash === '#/register') {
    window.location.hash = '#/';
    return;
  }

  // Si es admin
  if (user.role === 'admin') {
    if (hash === '#/dashboard' || hash === '#/' || hash === '') {
      return renderDashboard(app);
    }

    // Rutas permitidas para admin
    if (hash === '#/courses') return renderAdminCourses(app);
    if (hash === '#/users') return renderAdminUsers(app);

    // Si intenta otra ruta, redirigimos
    window.location.hash = '#/dashboard';
    return;
  }

  // Si es usuario normal
  if (user.role === 'user') {
    if (hash === '#/user-home' || hash === '#/' || hash === '') {
      return renderUserHome(app);
    }

    window.location.hash = '#/user-home';
    return;
  }

  // Si algo sale mal o el rol es desconocido
  return renderPublic(app);
}

// Ejecutamos el router al cargar y cuando cambia la URL
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);

.
.
.



const API_URL = 'http://localhost:3000/courses';

export async function getCourses() {
  const res = await fetch(API_URL);
  return await res.json();
}


en el dashboard


import { getCourses } from '../services/courses.js';

const courses = await getCourses();
localStorage.setItem('courses', JSON.stringify(courses));


..
.
.
.
¡Voy contigo a toda máquina, Vane! ⚡💚 Vamos a renderizar los cursos guardados en localStorage y mostrarlos en una tabla en la vista del admin o del usuario, según lo necesites.


---

✅ Paso 1: Asegúrate de tener los cursos guardados en el localStorage

Cuando haces un fetch de tus cursos desde el db.json, puedes guardarlos así:

localStorage.setItem('courses', JSON.stringify(courses));

🔸 Lo puedes hacer al iniciar sesión o cuando entras a la vista de dashboard/userHome, depende de cómo tengas la lógica.


---

✅ Paso 2: Recupera los cursos desde el localStorage

Ahora, desde tu vista (por ejemplo renderDashboard(app) o renderUserHome(app)), recupera los cursos:

const courses = JSON.parse(localStorage.getItem('courses')) || [];

Esto te da un array de cursos, o un array vacío si no hay nada guardado.


---

✅ Paso 3: Móntalos en una tabla HTML

En tu archivo, escribe algo así:

let rows = '';
courses.forEach(course => {
  rows += `
    <tr>
      <td>${course.id}</td>
      <td>${course.title}</td>
      <td>${course.description}</td>
      <td>${course.startDate}</td>
      <td>${course.duration}</td>
    </tr>
  `;
});

app.innerHTML = `
  <section>
    <h2>Lista de Cursos</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Inicio</th>
          <th>Duración</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  </section>
`;


---

🚨 IMPORTANTE

Si todavía no has hecho el fetch de los cursos desde json-server, hazlo antes así (en services/courses.js):

const API_URL = 'http://localhost:3000/courses';

export async function getCourses() {
  const res = await fetch(API_URL);
  return await res.json();
}

Y en renderDashboard o donde estés, haces:

import { getCourses } from '../services/courses.js';

const courses = await getCourses();
localStorage.setItem('courses', JSON.stringify(courses));


---

¿Quieres que hagamos esta lógica junta en una función paso a paso? ¿Estás en vista admin o visitante?

¡Responde rápido y seguimos con el código real! Estoy aquí contigo 💪😄

¡Entendido, Vane! 💚
Si ahora tu app ya no gestiona cursos, sino eventos, entonces hay que actualizar varios puntos clave para que todo funcione con el nuevo nombre y la nueva lógica 🛠️.

Aquí va un listado completo de lo que debes actualizar para reemplazar cursos por eventos, y adaptar tu app como una reina del código 👑:


---

✅ 1. db.json (tu base de datos simulada)

Asegúrate de que la colección se llame "events" en lugar de "courses":

{
  "events": [
    {
      "id": 1,
      "title": "Taller de JavaScript",
      "description": "Aprende fundamentos de JS",
      "date": "2025-07-15",
      "location": "Bogotá",
      "duration": "2 horas"
    }
  ],
  "users": [],
  "enrollments": []
}


---

✅ 2. En el servicio (/src/services)

Cambia courses.js por events.js
Y actualiza su contenido:

const API_URL = 'http://localhost:3000/events';

export async function getEvents() {
  const res = await fetch(API_URL);
  return await res.json();
}

Opcionalmente, también puedes agregar:

export async function createEvent(event) { ... }
export async function deleteEvent(id) { ... }


---

✅ 3. localStorage

Donde antes usabas:

localStorage.setItem('courses', JSON.stringify(data));

Ahora usa:

localStorage.setItem('events', JSON.stringify(data));

Y al recuperar:

const events = JSON.parse(localStorage.getItem('events')) || [];


---

✅ 4. En tus vistas (dashboard, userHome, etc.)

Donde antes mostraste cursos, ahora cambia los nombres de variables, títulos, encabezados de tabla y contenido por "eventos":

<h2>Lista de Eventos</h2>
<table>
  <thead>
    <tr>
      <th>Título</th>
      <th>Descripción</th>
      <th>Fecha</th>
      <th>Lugar</th>
      <th>Duración</th>
    </tr>
  </thead>
  <tbody>
    <!-- Aquí va cada evento -->
  </tbody>
</table>

Y en JS:

events.forEach(event => {
  rows += `
    <tr>
      <td>${event.title}</td>
      <td>${event.description}</td>
      <td>${event.date}</td>
      <td>${event.location}</td>
      <td>${event.duration}</td>
    </tr>
  `;
});


---

✅ 5. Rutas SPA y nombres de archivos (si quieres)

courses.js ➜ events.js

renderCourses() ➜ renderEvents()

renderCoursesTable() ➜ renderEventsTable()

Vistas como events.html si tu SPA tiene plantillas.



---

✅ 6. Textos visibles para el usuario

Reemplaza cualquier texto en los HTML o JS que diga "curso" por "evento", como:

<p>Regístrate para acceder a los cursos.</p>

➡️

<p>Regístrate para acceder a los eventos.</p>


---

✅ 7. Validaciones (si tienes formularios)

Si antes validabas título, fecha, descripción, etc. de un curso, ahora hazlo con los campos de evento.


---

✅ 8. Inscripciones (enrollments)

Si aún vas a manejar inscripciones a eventos, cambia también:

courseId ➜ eventId en enrollments

El código que relaciona usuarios con cursos, ahora con eventos.



---

🧠 BONUS: Nombres consistentes en todo el código

Trata de mantener todos los nombres coherentes:

getEvents() ✅

renderEvents() ✅

eventList, eventForm, etc.



---

¿Te gustaría que te ayude a hacer la primera función de getEvents() y mostrarla en una tabla?
O si ya la tienes, dime y la revisamos 💪




---

✅ Paso 1: Añadir capacity al objeto de eventos en db.json

Asegúrate de que tus eventos tengan este campo:

"events": [
  {
    "id": 1,
    "title": "Evento JS",
    "description": "Aprende JS",
    "date": "2025-07-15",
    "location": "Bogotá",
    "duration": "2 horas",
    "capacity": 30
  }
]


---

✅ Paso 2: Al momento de inscribirse, verificar cuántos cupos hay

🧠 Lógica general:

Cuando un usuario intenta inscribirse a un evento:

1. Consultas cuántos usuarios están inscritos en ese evento.


2. Comparas eso con la capacidad del evento.


3. Si hay cupos → lo inscribes.


4. Si no hay cupos → le muestras un mensaje tipo "Evento lleno".




---

✅ Paso 3: Código (ejemplo de función para inscribirse)

Supongamos que tienes:

eventId: ID del evento.

userId: ID del usuario.


import { getEnrollments } from '../services/enrollments.js';
import { getEvents } from '../services/events.js';
import { createEnrollment } from '../services/enrollments.js';

async function inscribirUsuario(eventId, userId) {
  const allEnrollments = await getEnrollments();
  const event = await getEventById(eventId); // Debes tener esta función en events.js

  const inscripcionesActuales = allEnrollments.filter(e => e.eventId === eventId);

  if (inscripcionesActuales.length >= event.capacity) {
    alert('Lo sentimos, este evento ya está lleno 😢');
    return;
  }

  // Crear nueva inscripción
  await createEnrollment({ eventId, userId });
  alert('¡Inscripción exitosa! 🎉');
}


---

✅ Paso 4: Crear funciones necesarias si no las tienes

getEventById (en events.js):

export async function getEventById(id) {
  const res = await fetch(`http://localhost:3000/events/${id}`);
  return await res.json();
}

getEnrollments y createEnrollment (en enrollments.js):

const API_URL = 'http://localhost:3000/enrollments';

export async function getEnrollments() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function createEnrollment(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}


---

🧠 BONUS: Mostrar cupos disponibles en la tabla

Cuando muestres los eventos, puedes calcular y mostrar:

const cuposDisponibles = event.capacity - inscripcionesActuales.length;

Y mostrar:

<td>${cuposDisponibles} cupos disponibles</td>


---

¿Quieres que te ayude a hacer esta lógica integrada a una tabla en userHome.js o dashboard.js?
¡Dime y te ayudo línea por línea! 💪

Estás avanzando súper bien, Vane 🌟 ¡Vamos por ese módulo! 🚀

¡Exactamente, Vane! 💡 Así como tienes los usuarios guardados en el db.json bajo "users", y ahora los eventos bajo "events", también debes agregar las inscripciones en una sección llamada "enrollments".

Aquí te muestro cómo debe estar tu db.json completo con todo funcionando para el proyecto:


---

📦 Ejemplo completo de db.json (con usuarios, eventos e inscripciones):

{
  "users": [
    {
      "id": 1,
      "name": "Admin",
      "email": "admin@admin.com",
      "password": "admin123",
      "role": "admin",
      "phone": "1234567890",
      "enrollNumber": "98765432100000",
      "dateOfAdmission": "01-Jan-2020"
    },
    {
      "id": 2,
      "name": "Vanesa",
      "email": "vane@correo.com",
      "password": "vane123",
      "role": "user",
      "phone": "0987654321",
      "enrollNumber": "12345678900000",
      "dateOfAdmission": "10-Feb-2024"
    }
  ],
  "events": [
    {
      "id": 1,
      "title": "Introducción a JavaScript",
      "description": "Curso básico de JS",
      "date": "2025-07-15",
      "location": "Medellín",
      "duration": "3h",
      "capacity": 3
    },
    {
      "id": 2,
      "title": "Curso HTML y CSS",
      "description": "Curso completo de diseño web",
      "date": "2025-08-01",
      "location": "Bogotá",
      "duration": "5h",
      "capacity": 2
    }
  ],
  "enrollments": [
    {
      "id": 1,
      "userId": 2,
      "eventId": 1
    }
  ]
}


---

🔁 ¿Qué pasa cuando un usuario se inscribe?

Cada vez que un usuario se inscribe a un evento:

✅ Se añade un objeto a enrollments como este:

{
  "id": 2,
  "userId": 2,
  "eventId": 2
}

Eso le dice al sistema: “El usuario con ID 2 está inscrito al evento con ID 2”.


---

🧠 ¿Y cómo se conecta todo?

Con eventId accedes a los detalles del evento.

Con userId sabes quién está inscrito.

¡Y puedes cruzar esos datos para contar cuántos inscritos hay por evento!



---

¿Te gustaría que te prepare también la parte admin para crear eventos desde la app (CRUD)?
¡O seguimos ajustando esta parte de usuario hasta que quede hermosa! 😍

Estoy contigo pasito a pasito 🐾✨

¡Perfecta pregunta, Vane! 😍
Aquí tienes el paso a paso exacto de las partes del código que debes tener o modificar para que tu app:

✅ Lea los eventos desde el db.json
✅ Muestre los eventos en la vista del usuario
✅ Guarde nuevas inscripciones al evento (enrollments)
✅ Y valide cupos antes de inscribir


---

🧩 PARTES QUE DEBES TENER Y/O ACTUALIZAR:


---

✅ 1. db.json (servidor JSON Server)

Asegúrate de tener:

{
  "users": [ ... ],
  "events": [ ... ],
  "enrollments": [ ... ]
}

Cada tabla funciona como si fuera una colección de base de datos.


---

✅ 2. /services/events.js

Este archivo se encarga de leer eventos y obtener uno por ID.

const API_URL = 'http://localhost:3000/events';

export async function getEvents() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function getEventById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}


---

✅ 3. /services/enrollments.js

Este archivo lee inscripciones existentes y crea nuevas.

const ENROLL_URL = 'http://localhost:3000/enrollments';

export async function getEnrollments() {
  const res = await fetch(ENROLL_URL);
  return await res.json();
}

export async function createEnrollment(enrollment) {
  const res = await fetch(ENROLL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(enrollment)
  });
  return await res.json();
}


---

✅ 4. /utils/storage.js

Debes tener esta función si no la tienes aún:

export function getUserStorage() {
  return JSON.parse(localStorage.getItem('loggedUser'));
}


---

✅ 5. /pages/userHome.js

Aquí es donde se lee la info y se renderiza en la pantalla del usuario.
Reemplaza o ajusta tu renderUserHome(app) así:

import { getEvents, getEventById } from '../services/events.js';
import { getEnrollments, createEnrollment } from '../services/enrollments.js';
import { getUserStorage } from '../utils/storage.js';

export async function renderUserHome(app) {
  const user = getUserStorage();
  const events = await getEvents();
  const enrollments = await getEnrollments();

  let tableRows = '';

  for (let event of events) {
    const inscritos = enrollments.filter(e => e.eventId === event.id);
    const yaInscrito = inscritos.some(e => e.userId === user.id);
    const cupos = event.capacity - inscritos.length;

    tableRows += `
      <tr>
        <td>${event.title}</td>
        <td>${event.description}</td>
        <td>${event.date}</td>
        <td>${event.location}</td>
        <td>${event.duration}</td>
        <td>${cupos > 0 ? cupos : 'Lleno'}</td>
        <td>
          ${yaInscrito
            ? 'Ya inscrito'
            : cupos > 0
              ? `<button class="btn-inscribir" data-id="${event.id}">Inscribirme</button>`
              : 'Sin cupo'}
        </td>
      </tr>
    `;
  }

  app.innerHTML = `
    <section>
      <h2>Eventos disponibles</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Duración</th>
            <th>Cupos</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </section>
  `;

  // Escuchamos los botones de inscripción
  document.querySelectorAll('.btn-inscribir').forEach(button => {
    button.addEventListener('click', async () => {
      const eventId = parseInt(button.dataset.id);
      const inscritos = enrollments.filter(e => e.eventId === eventId);
      const yaInscrito = inscritos.some(e => e.userId === user.id);

      if (yaInscrito) {
        alert('Ya estás inscrito en este evento');
        return;
      }

      const event = await getEventById(eventId);
      if (inscritos.length >= event.capacity) {
        alert('Cupos agotados para este evento');
        return;
      }

      await createEnrollment({ userId: user.id, eventId });
      alert('¡Inscripción exitosa!');
      renderUserHome(app); // Volver a cargar vista
    });
  });
}


---

✅ 6. Revisión final: ¿Qué archivos se ven afectados?

Archivo	¿Qué hace?

db.json	Base de datos (eventos, usuarios, etc)
services/events.js	Leer eventos
services/enrollments.js	Leer y guardar inscripciones
utils/storage.js	Obtener el usuario logueado
pages/userHome.js	Mostrar eventos + lógica de inscripción



---

¿Te gustaría que hagamos juntas una función que muestre solo los eventos a los que el usuario ya se ha inscrito también?
O seguimos con la vista de administrador para crear nuevos eventos desde un formulario 💻✨

Tú mandas, Vane 💪🌟

¡Vane preciosa, vamos a hacerlo juntas y lo vamos a lograr! 🩷
Voy a explicártelo clarito y paso a paso, con la lógica completa del CRUD de eventos para el administrador, incluyendo:


---

🧩 OBJETIVO:

Crear una vista de administrador con un CRUD de eventos (Crear, Leer, Editar, Eliminar), y un tope de inscripciones. Si el evento llega al tope (capacidad), los usuarios ya no podrán inscribirse. ¡Todo conectado al json-server!


---

💡 ¿QUÉ DEBES CREAR?

Archivo	¿Para qué sirve?

/pages/dashboard.js	Vista del administrador (tabla + formulario)
/services/events.js	Funciones para CRUD (crear, leer, editar, eliminar)
db.json	Base de datos local (json-server)
/main.js	Llama renderDashboard(app) si es admin
localStorage	Para saber quién está logueado (ya lo tienes)



---

🧠 ESTRUCTURA LÓGICA DEL CRUD DE EVENTOS

🛠 1. services/events.js → Funciones CRUD

const API_URL = 'http://localhost:3000/events';

// Obtener todos los eventos
export async function getEvents() {
  const res = await fetch(API_URL);
  return await res.json();
}

// Crear un nuevo evento
export async function createEvent(event) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event)
  });
  return await res.json();
}

// Eliminar evento
export async function deleteEvent(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}

// Editar evento
export async function updateEvent(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}

// Obtener uno solo
export async function getEventById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}


---

📄 2. pages/dashboard.js → Vista del administrador

import {
  getEvents,
  createEvent,
  deleteEvent,
  updateEvent
} from '../services/events.js';

export async function renderDashboard(app) {
  const events = await getEvents();

  let rows = '';
  events.forEach(event => {
    rows += `
      <tr>
        <td>${event.title}</td>
        <td>${event.description}</td>
        <td>${event.date}</td>
        <td>${event.location}</td>
        <td>${event.capacity}</td>
        <td>
          <button class="btn-delete" data-id="${event.id}">Eliminar</button>
          <button class="btn-edit" data-id="${event.id}">Editar</button>
        </td>
      </tr>
    `;
  });

  app.innerHTML = `
    <section>
      <h2>Panel de Administración de Eventos</h2>

      <form id="event-form">
        <input type="text" id="title" placeholder="Título" required>
        <input type="text" id="description" placeholder="Descripción" required>
        <input type="date" id="date" required>
        <input type="text" id="location" placeholder="Lugar" required>
        <input type="number" id="capacity" placeholder="Cupo máximo" required>
        <button type="submit">Crear Evento</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Cupos</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </section>
  `;

  // ✅ CREAR
  document.getElementById('event-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const newEvent = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      date: document.getElementById('date').value,
      location: document.getElementById('location').value,
      capacity: parseInt(document.getElementById('capacity').value)
    };

    await createEvent(newEvent);
    renderDashboard(app); // Recargar vista
  });

  // ✅ ELIMINAR
  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      await deleteEvent(id);
      renderDashboard(app); // Recargar vista
    });
  });

  // ✅ EDITAR (Versión básica: solo auto-rellenar el formulario)
  document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      const event = await getEventById(id);

      document.getElementById('title').value = event.title;
      document.getElementById('description').value = event.description;
      document.getElementById('date').value = event.date;
      document.getElementById('location').value = event.location;
      document.getElementById('capacity').value = event.capacity;

      // Cambiamos el comportamiento del formulario
      document.getElementById('event-form').onsubmit = async (e) => {
        e.preventDefault();
        const updatedEvent = {
          title: document.getElementById('title').value,
          description: document.getElementById('description').value,
          date: document.getElementById('date').value,
          location: document.getElementById('location').value,
          capacity: parseInt(document.getElementById('capacity').value)
        };

        await updateEvent(id, updatedEvent);
        renderDashboard(app);
      };
    });
  });
}


---

🔁 3. Validar cupos desde /pages/userHome.js

Tú ya tienes esta parte, pero asegúrate de que revise si:

inscritos.length >= event.capacity

Y si sí, muestra botón desactivado o texto: “Sin cupos”.


---

🧠 ¿Y el True/False?

¡Muy buena pregunta! Eso se usaría si quieres ponerle un campo al evento como activo: true/false, y así poder mostrar solo eventos activos o no permitir inscripción si está en false.
Por ahora, con la validación de cupo es suficiente para pasar la prueba.


---

✅ ¿Qué más debes revisar?

Parte	Acción

main.js	Debe llamar a renderDashboard(app) si es admin
db.json	Tener sección "events" y "enrollments"
json-server corriendo	npx json-server --watch db.json --port 3000
Vite corriendo	npm run dev



---

🩷 ¿Te dejo lista una versión base para copiar y pegar?

Solo dime y te organizo todo bien maquetado con CSS y validaciones.
¡Vamos con toda! Ya casi terminas tu super prueba, Vane 🙌💪✨
¿Seguimos con alguna parte específica de este CRUD?

