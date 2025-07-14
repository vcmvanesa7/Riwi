# 📚 Sistema de Gestión Académica - SPA

Este proyecto es una aplicación **Single Page Application (SPA)** construida en **JavaScript Vanilla** que permite gestionar usuarios y cursos según el rol de acceso. Fue desarrollado como parte del bootcamp de formación en desarrollo web Full Stack.

---

## 🧩 Características

✅ Registro e inicio de sesión de usuarios  
✅ Roles: `admin` y `user`  
✅ CRUD de usuarios (admin)  
✅ CRUD de cursos (admin)  
✅ Vista personalizada para usuarios normales  
✅ Ruteo manual mediante `hash` (`#/login`, `#/dashboard`, etc.)  
✅ Uso de `json-server` como base de datos local (simulación de API REST)  
✅ Componentes reutilizables (`Header`, `Sidebar`, `Modal`, `Tabla`)

---

## 🛠️ Tecnologías usadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- [json-server](https://github.com/typicode/json-server)
- Vite (para entorno de desarrollo)

---

## 📁 Estructura del proyecto

spa-system/
│
├── src/
│ ├── components/ → Header, Sidebar, Modal, Tabla de usuarios
│ ├── pages/ → Vistas: login, register, dashboard, cursos, etc.
│ ├── services/ → Lógica de API (fetch a json-server)
│ ├── utils/ → Funciones reutilizables (auth, storage)
│ └── main.js → Enrutador principal
│
├── db.json → Base de datos simulada (json-server)
├── index.html → HTML base
├── vite.config.js → Configuración de Vite
└── README.md → Este archivo

yaml
Copiar código

---

## 🚀 Instalación y ejecución local

> Asegúrate de tener **Node.js** instalado en tu máquina.

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/spa-system.git
cd spa-system
2. Instalar dependencias
bash
Copiar código
npm install
3. Ejecutar json-server (para simular la base de datos)
bash
Copiar código
npx json-server --watch db.json --port 3000
Esto levantará un servidor REST en http://localhost:3000.

4. Ejecutar Vite (servidor de desarrollo)
En otro terminal:

bash
Copiar código
npm run dev
Abre tu navegador en:
📍 http://localhost:5173

👤 Usuarios de prueba
Admin
📧 admin@gmail.com

🔑 Admin123

Usuario común
📧 user@gmail.com

🔑 User1234

📌 Rutas disponibles
#/login → Página de inicio de sesión

#/register → Página de registro

#/dashboard → Panel principal del administrador

#/courses → Gestión de cursos (admin)

#/users → Gestión de usuarios (admin)

#/user-home → Vista del usuario normal

#/ → Página pública si no hay sesión

💡 Autor
Desarrollado por Vanesa como parte del bootcamp de formación en desarrollo web Full Stack en Riwi 🚀.

📝 Licencia
Este proyecto es solo para fines educativos. Puedes adaptarlo y modificarlo libremente.