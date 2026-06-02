# carlandalanda.github.io
Un sitio para alguien especial
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Cartas para Ti 💖</title>
<style>
  body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #ffdde1, #ee9ca7);
    text-align: center;
    padding: 30px;
    color: #fff;
  }
  h1 {
    margin-bottom: 20px;
  }
  .carta {
    width: 250px;
    height: 150px;
    margin: 20px auto;
    background: #fff;
    color: #333;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    cursor: pointer;
    transform: scale(0.9);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .carta:hover {
    transform: scale(1);
    box-shadow: 0 12px 25px rgba(0,0,0,0.3);
  }
  .bloqueada {
    background: rgba(255,255,255,0.7);
    color: #555;
    cursor: default;
  }
  .contador {
    font-size: 0.9em;
    color: #ff4f81;
    position: absolute;
    bottom: 10px;
  }
  .mensaje {
    display: none;
    padding: 15px;
  }
</style>
</head>
<body>

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

