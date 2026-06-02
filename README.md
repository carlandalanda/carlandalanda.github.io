# carlandalanda.github.io
Un sitio para alguien especial


<h1>💌 Cartas Especiales para Ti 💌</h1>

<div class="carta" data-fecha="2026-06-02">
  <span>💖 Carta 1</span>
  <div class="mensaje">Eres mi razón favorita para sonreír cada día. 🌸</div>
</div>

<div class="carta" data-fecha="2026-06-05">
  <span>💖 Carta 2</span>
  <div class="mensaje">Cada día contigo es un capítulo hermoso de mi historia. 📖</div>
</div>

<div class="carta" data-fecha="2026-06-10">
  <span>💖 Carta 3</span>
  <div class="mensaje">Te quiero más de lo que las palabras pueden decir. 💫</div>
</div>

<script>
function actualizarCartas() {
  const hoy = new Date();
  document.querySelectorAll('.carta').forEach(carta => {
    const fechaCarta = new Date(carta.dataset.fecha);
    if (hoy >= fechaCarta) {
      carta.addEventListener('click', () => {
        const mensaje = carta.querySelector('.mensaje');
        if (mensaje.style.display === 'block') {
          mensaje.style.display = 'none';
        } else {
          mensaje.style.display = 'block';
        }
      });
    } else {
      carta.classList.add('bloqueada');
      const contador = document.createElement('div');
      contador.classList.add('contador');
      carta.appendChild(contador);
      const intervalo = setInterval(() => {
        const ahora = new Date();
        const diff = fechaCarta - ahora;
        if (diff <= 0) {
          clearInterval(intervalo);
          location.reload();
        } else {
          const dias = Math.floor(diff / (1000*60*60*24));
          const horas = Math.floor((diff / (1000*60*60)) % 24);
          const minutos = Math.floor((diff / (1000*60)) % 60);
          contador.textContent = `Faltan ${dias}d ${horas}h ${minutos}m`;
        }
      }, 1000);
    }
  });
}
actualizarCartas();
</script>

</body>
</html>

