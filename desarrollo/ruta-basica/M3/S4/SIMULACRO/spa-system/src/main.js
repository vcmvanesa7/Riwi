// Importamos todas las vistas
import { renderLogin } from './pages/login.js';
import { renderRegister } from './pages/register.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderPublic } from './pages/public.js';
import { renderUserHome } from './pages/userHome.js';
import { getUserStorage } from './utils/storage.js';

// Obtenemos el contenedor principal donde se renderizan las vistas
const app = document.getElementById('app');

/**
 *  Función router
 * Esta función actúa como el enrutador de nuestra SPA
 * Decide qué vista mostrar según:
 *  - si hay o no un usuario logueado,
 *  - el rol del usuario,
 *  - el hash (fragmento de URL).
 */
function router() {
  const user = getUserStorage();            // Obtenemos el usuario logueado (si existe)
  const hash = window.location.hash;        // Capturamos el hash actual (#/login, #/register, etc.)

  //  Si NO hay usuario logueado
  if (!user) {
    if (hash === '#/login') {
      renderLogin(app);
    } else if (hash === '#/register') {
      renderRegister(app);
    } else {
      renderPublic(app); // Por defecto muestra la vista pública
    }
    return; // Sale de la función
  }

  //  Si el usuario YA está logueado y trata de ir al login o register, lo redirigimos
  if (hash === '#/login' || hash === '#/register') {
    window.location.hash = ''; // Lo mandamos a la raíz (decidirá qué vista mostrar según su rol)
    return;
  }

  //  Si es admin y el hash coincide o no hay hash, mostrar dashboard
  if (user.role === 'admin') {
    if (hash === '#/dashboard' || hash === '' || hash === '#/') {
      renderDashboard(app);
    } else {
      window.location.hash = '#/dashboard'; // Redirige forzadamente si intenta otra ruta
    }
    return; // Detiene aquí para evitar que siga evaluando
  }

  //  Si es usuario normal
  if (user.role === 'user') {
    if (hash === '#/user-home' || hash === '' || hash === '#/') {
      renderUserHome(app);
    } else {
      window.location.hash = '#/user-home'; // Redirige forzadamente si intenta otra ruta
    }
    return;
  }

  //  Si algo sale mal (usuario con rol no válido), volvemos a la vista pública
  renderPublic(app);
}

//  Ejecutamos el router al cargar la página
window.addEventListener('DOMContentLoaded', router);

//  También cuando cambia el hash (URL)
window.addEventListener('hashchange', router);
