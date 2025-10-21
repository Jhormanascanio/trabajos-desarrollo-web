// Este archivo es el script principal que inicializa la interactividad de la página.
// Aquí se pueden incluir funciones generales que se aplican a toda la aplicación.

// Inicialización de eventos y funciones al cargar la página
document.addEventListener('DOMContentLoaded', async () => {
  // Cargar navbar
  try {
    const resNav = await fetch('components/navbar.html');
    if (resNav.ok) {
      document.getElementById('navbar').innerHTML = await resNav.text();
    }
  } catch (err) {
    console.error('Error cargando navbar:', err);
  }

  // Cargar card
  try {
    const resCard = await fetch('components/card.html');
    if (resCard.ok) {
      document.getElementById('card').innerHTML = await resCard.text();
    } else {
      throw new Error('card fetch no ok');
    }
  } catch (err) {
    // fallback inline
    document.getElementById('card').innerHTML = `
      <div class="card mx-auto" style="width: 18rem;">
        <img src="https://picsum.photos/300/180" class="card-img-top" alt="imagen aleatoria">
        <div class="card-body">
          <h5 class="card-title">Componente Card</h5>
          <p class="card-text">Esta tarjeta muestra el uso de componentes de Bootstrap y JS puro.</p>
          <button class="btn btn-primary" id="btnSaludo">Saludar</button>
        </div>
      </div>
    `;
    console.error('Error cargando card, usando fallback.', err);
  }

  // Añadir listener al botón Saludar (después de inyectar)
  const btnSaludo = document.getElementById('btnSaludo');
  if (btnSaludo) {
    btnSaludo.addEventListener('click', () => {
      alert('¡Hola desde Bootstrap con JS puro!');
    });
  }
});

/*
  Define initApp() para inyectar navbar y card cuando el usuario esté autenticado.
  También auto-inicia si ya hay sesión en sessionStorage.
*/
// Código encargado de inyectar componentes y controlar la app una vez autenticado.

// initApp: inyecta navbar y card y añade listeners de la app
window.initApp = async function initApp() {
  // Cargar navbar
  try {
    const navRes = await fetch('components/navbar.html');
    if (navRes.ok) {
      document.getElementById('navbarContainer').innerHTML = await navRes.text();
    } else {
      document.getElementById('navbarContainer').innerHTML = '<nav class="navbar navbar-dark bg-primary p-2"><div class="container-fluid"><span class="navbar-brand">Práctica Bootstrap</span></div></nav>';
    }
  } catch (err) {
    console.error('Error cargando navbar:', err);
  }

  // Cargar card
  try {
    const cardRes = await fetch('components/card.html');
    if (cardRes.ok) {
      document.getElementById('cardContainer').innerHTML = await cardRes.text();
    } else {
      throw new Error('card fetch no ok');
    }
  } catch (err) {
    // Fallback: inline
    document.getElementById('cardContainer').innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Componente Card (fallback)</h5>
          <p class="card-text">No se pudo cargar el componente desde components/, usando fallback.</p>
          <button id="btnSaludo" class="btn btn-primary">Saludar</button>
        </div>
      </div>`;
    console.error('Error cargando card component, usando fallback.', err);
  }

  // Listener para botón Saludar (después de inyectar card)
  const btnSaludo = document.getElementById('btnSaludo');
  if (btnSaludo) {
    btnSaludo.addEventListener('click', () => {
      // Mensaje dinámico simple
      const el = document.createElement('div');
      el.className = 'toast align-items-center text-bg-primary border-0';
      el.role = 'status';
      el.ariaLive = 'polite';
      el.innerHTML = `<div class="d-flex"><div class="toast-body">¡Hola desde Bootstrap con JS puro!</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar"></button></div>`;
      document.body.appendChild(el);
      const toast = new bootstrap.Toast(el, { delay: 2500 });
      toast.show();
      // eliminar al cerrar
      el.addEventListener('hidden.bs.toast', () => el.remove());
    });
  }

  // Logout
  const btnLogout = document.getElementById('btnLogout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      sessionStorage.removeItem('logged');
      // ocultar app y mostrar login
      document.getElementById('appContent').classList.add('d-none');
      document.getElementById('loginView').classList.remove('d-none');
      // limpiar UI
      const formAlert = document.getElementById('formAlert');
      if (formAlert) formAlert.innerHTML = '';
    });
  }
};

// Auto-inicializar si ya está en sesión
document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('logged') === 'true') {
    document.getElementById('loginView').classList.add('d-none');
    document.getElementById('appContent').classList.remove('d-none');
    if (window.initApp) window.initApp();
    if (window.initModal) window.initModal();
  }
});