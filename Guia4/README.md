# Práctica Bootstrap + JS puro (Parte 5)

Contenido:
- Página que integra la Guía (Partes 1–5) y ejemplos.
- Componentes: navbar, card, modal.
- Formulario de login con validación básica (usuario: admin, contraseña: admin — no se muestran en la UI).
- Interactividad con JS puro (modales, toasts, alertas dinámicas).
- Buenas prácticas: separación de archivos, nombres claros y accesibilidad básica.

Ejecución:
1. Abrir la carpeta `Parte4` en VSCode.
2. Usar Live Server (recomendado) o ejecutar desde la carpeta:
   `python -m http.server 5500`
3. Abrir en el navegador:
   `http://localhost:5500/index.html`

Archivos principales:
- index.html
- components/navbar.html
- components/card.html
- css/styles.css
- js/main.js
- js/modal.js
- js/form.js

Notas:
- Fetch de components requiere servir la carpeta por HTTP (no funciona con file://).
- Si necesitas que cambie las credenciales o que persista sesión en localStorage, lo actualizo.