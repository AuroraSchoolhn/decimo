// Función para obtener un número entero aleatorio entre min y max
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Función para cambiar de posición y forma a una caja
    function animarCaja(elemento) {
      // Dimensiones de la ventana
      const anchoPantalla = window.innerWidth - 150; // Margen para evitar desbordamiento
      const altoPantalla = window.innerHeight - 150;

      // 1. Nueva posición aleatoria dentro de la pantalla
      const posX = getRandomInt(10, Math.max(10, anchoPantalla));
      const posY = getRandomInt(10, Math.max(10, altoPantalla));

      // 2. Nuevas dimensiones aleatorias
      const tamaño = getRandomInt(80, 160);

      // 3. Forma aleatoria (Border-Radius) para crear figuras orgánicas/curvas
      const r1 = getRandomInt(20, 80);
      const r2 = getRandomInt(20, 80);
      const r3 = getRandomInt(20, 80);
      const r4 = getRandomInt(20, 80);

      // Aplicar estilos dinámicos al elemento
      elemento.style.left = `${posX}px`;
      elemento.style.top = `${posY}px`;
      elemento.style.width = `${tamaño}px`;
      elemento.style.height = `${tamaño}px`;
      elemento.style.borderRadius = `${r1}% ${100 - r1}% ${r2}% ${100 - r2}% / ${r3}% ${r4}% ${100 - r4}% ${100 - r3}%`;
    }

    const caja1 = document.getElementById('caja1');
    const caja2 = document.getElementById('caja2');

    // Mover inmediatamente al cargar la página
    animarCaja(caja1);
    animarCaja(caja2);

    // Mover las cajas continuamente cada determinado tiempo
    // Usamos intervalos ligeramente distintos para que no se muevan al mismo tiempo
    setInterval(() => animarCaja(caja1), 3500);
    setInterval(() => animarCaja(caja2), 4200);
