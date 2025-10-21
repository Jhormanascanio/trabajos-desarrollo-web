document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('modal');
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="modal fade" id="miModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Mensaje dinámico</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body" id="modalBody">Texto inicial.</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const miModalEl = document.getElementById('miModal');
  if (miModalEl && window.bootstrap) {
    window.miModal = new bootstrap.Modal(miModalEl);
  }

  const abrirBtn = document.getElementById('abrirModal');
  if (abrirBtn) {
    abrirBtn.addEventListener('click', () => {
      const body = document.getElementById('modalBody');
      if (body) body.textContent = 'Contenido actualizado con JS.';
      if (window.miModal) window.miModal.show();
    });
  }
});

// Construye el modal dinámico y expone initModal() para inicializarlo.

window.initModal = function initModal() {
  const container = document.getElementById('modalContainer');
  if (!container) return;

  container.innerHTML = `
  <div class="modal fade" id="miModal" tabindex="-1" aria-labelledby="miModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="miModalLabel">Mensaje dinámico</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body" id="modalBody">Texto inicial.</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>`;

  const miModalEl = document.getElementById('miModal');
  if (miModalEl && window.bootstrap) {
    window.miModal = new bootstrap.Modal(miModalEl);
  }

  // El botón abrirModal puede existir en la UI principal
  const abrirBtn = document.getElementById('abrirModal');
  if (abrirBtn) {
    abrirBtn.addEventListener('click', () => {
      const body = document.getElementById('modalBody');
      if (body) body.textContent = 'Contenido actualizado con JS.';
      if (window.miModal) window.miModal.show();
    });
  }
};