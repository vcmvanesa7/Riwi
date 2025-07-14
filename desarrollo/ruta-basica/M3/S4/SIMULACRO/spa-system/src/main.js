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

