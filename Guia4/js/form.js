// Validación básica del formulario: usuario = admin, contraseña = admin.
// Muestra alertas Bootstrap y, si procede, inicializa la app y el modal.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formLogin');
  if (!form) return;

  // asegurar contenedor de alertas
  let alertContainer = document.getElementById('formAlert');
  if (!alertContainer) {
    alertContainer = document.createElement('div');
    alertContainer.id = 'formAlert';
    alertContainer.setAttribute('aria-live', 'polite');
    form.prepend(alertContainer);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = document.getElementById('user').value.trim();
    const pass = document.getElementById('password').value.trim();

    alertContainer.innerHTML = '';

    // Credenciales de práctica (no visibles en UI)
    if (user === 'admin' && pass === 'admin') {
      // marcar sesión
      sessionStorage.setItem('logged', 'true');

      // mostrar UI de la app
      document.getElementById('loginView').classList.add('d-none');
      document.getElementById('appContent').classList.remove('d-none');

      // inicializar app y modal
      if (window.initApp) await window.initApp();
      if (window.initModal) window.initModal();

      // alerta de éxito
      alertContainer.innerHTML = `<div class="alert alert-success" role="alert">Inicio de sesión exitoso. Bienvenido.</div>`;

      form.reset();
    } else {
      alertContainer.innerHTML = `<div class="alert alert-danger" role="alert">Credenciales incorrectas.</div>`;
    }
  });
});