function cajon() {
    
    const cajon = document.getElementById('areacomun');
    cajon.innerHTML = `
    <div id="gira">
      <img src="/images/logo.svg" alt="Frasco" class="frasco">
    </div>`;
    cajon.style.position = "fixed";
    document.getElementById('areacomun').style.height="800px";
  }