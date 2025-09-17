  async function cargarContenido(id, url) {
    const path = "components/"+id+"/"+url;
    const resp = await fetch(path);
    const html = await resp.text();
    document.getElementById(id).innerHTML = html;
  }
  cargarContenido("content", "products.html");

