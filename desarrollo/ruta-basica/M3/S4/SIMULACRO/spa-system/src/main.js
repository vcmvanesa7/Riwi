//Cargar la vista correspondiente
import { renderLogin } from './pages/login.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderPublic } from './pages/public.js';
import { getUserStorage } from './utils/storage.js'

const app = document.getElementById('app')

function router() {
  const user = getUserStorage();

  if (!user) {   //si no hay usuario logueado
    renderPublic(app);
  } else if (user.role === 'admin') {
    renderDashboard('app');
  } else {

  }
}