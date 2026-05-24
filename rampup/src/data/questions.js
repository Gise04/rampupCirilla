export const questions = [
  // --- DEFINICIONES ---
  {
    id: 1,
    category: "Definiciones",
    question: "¿Qué es un conductor novel según la normativa española?",
    options: [
      "El que circula durante los primeros dos años de su permiso",
      "El que circula durante el primer año de su primer permiso",
      "El menor de 25 años que conduce",
      "El que aún no ha superado el período de prueba de 3 años",
    ],
    correct: 1,
    explanation:
      "Conductor novel es quien circula durante el PRIMER AÑO desde la obtención de su primer permiso de conducción.",
    image: { type: "scenario", scene: "document" },
  },
  {
    id: 2,
    category: "Definiciones",
    question: "Un peatón que empuja su bicicleta por la calzada, ¿qué es a efectos de la normativa?",
    options: [
      "Conductor de bicicleta",
      "Peatón",
      "Usuario de VMP",
      "Ciclista",
    ],
    correct: 1,
    explanation:
      "El peatón que empuja una bici o ciclomotor se considera peatón. Solo cuando empuja una moto se le considera conductor.",
    image: null,
  },
  {
    id: 3,
    category: "Definiciones",
    question: "¿Cuál es la velocidad máxima de un ciclomotor?",
    options: ["30 km/h", "45 km/h", "50 km/h", "60 km/h"],
    correct: 1,
    explanation:
      "Un ciclomotor tiene motor hasta 50cc y una velocidad máxima de 45 km/h.",
    image: null,
  },
  {
    id: 4,
    category: "Definiciones",
    question: "¿Qué es un Vehículo de Movilidad Personal (VMP)?",
    options: [
      "Cualquier vehículo eléctrico de 2 ruedas",
      "Vehículo con velocidad entre 6 y 25 km/h que circula solo por calzada",
      "Bicicleta eléctrica con motor",
      "Ciclomotor de menos de 25 cc",
    ],
    correct: 1,
    explanation:
      "Los VMP (ej. patinetes eléctricos) van de 6 a 25 km/h, solo circulan por calzada (no aceras), y está prohibido usar móvil o auriculares en ellos.",
    image: null,
  },
  {
    id: 5,
    category: "Definiciones",
    question: "¿Qué es la tara de un vehículo?",
    options: [
      "El peso máximo autorizado",
      "El peso del vehículo sin carga",
      "El peso de la carga máxima permitida",
      "La diferencia entre MMA y el peso real",
    ],
    correct: 1,
    explanation:
      "La tara es el peso del propio vehículo vacío. La MMA (Masa Máxima Autorizada) es el peso máximo con carga permitido.",
    image: null,
  },
  {
    id: 6,
    category: "Definiciones",
    question: "¿Qué es una travesía?",
    options: [
      "Un camino rural sin asfaltar",
      "Una autopista que atraviesa una ciudad",
      "Una carretera que atraviesa un poblado",
      "Un carril reservado para vehículos de alta ocupación",
    ],
    correct: 2,
    explanation:
      "Una travesía es el tramo de carretera convencional que atraviesa un poblado.",
    image: null,
  },
  {
    id: 7,
    category: "Definiciones",
    question: "¿Cuántas plazas máximo puede tener un turismo según la normativa?",
    options: ["7 plazas", "8 plazas", "9 plazas", "12 plazas"],
    correct: 2,
    explanation:
      "Un turismo puede tener hasta 9 plazas. Si tiene más de 9 plazas se considera autobús.",
    image: null,
  },
  // --- DOCUMENTACIÓN ---
  {
    id: 8,
    category: "Documentación",
    question: "¿Cuáles son los documentos OBLIGATORIOS que debe llevar un conductor?",
    options: [
      "Permiso de conducción, permiso de circulación y tarjeta ITV",
      "Permiso de conducción, permiso de circulación, tarjeta ITV y recibo del seguro",
      "Solo el permiso de conducción",
      "DNI, permiso de conducción y permiso de circulación",
    ],
    correct: 0,
    explanation:
      "Son obligatorios: permiso de conducción, permiso de circulación y tarjeta ITV. El recibo del seguro es recomendable pero NO obligatorio.",
    image: { type: "scenario", scene: "document" },
  },
  {
    id: 9,
    category: "Documentación",
    question: "¿Cada cuántos años debe renovarse el permiso de conducción para menores de 65 años?",
    options: ["Cada 5 años", "Cada 8 años", "Cada 10 años", "Cada 15 años"],
    correct: 2,
    explanation:
      "El permiso de conducción se renueva cada 10 años para conductores menores de 65 años, y cada 5 años a partir de esa edad.",
    image: { type: "scenario", scene: "document" },
  },
  {
    id: 10,
    category: "Documentación",
    question: "¿En qué plazo debe comunicarse al organismo competente la venta de un vehículo?",
    options: ["5 días", "10 días", "15 días", "30 días"],
    correct: 1,
    explanation:
      "La venta de un vehículo debe comunicarse en 10 días. El comprador de un vehículo de ocasión debe solicitar la documentación en 30 días.",
    image: null,
  },
  {
    id: 11,
    category: "Documentación",
    question: "Un vehículo con ITV desfavorable, ¿qué puede hacer?",
    options: [
      "Circular normalmente durante 15 días",
      "Solo ir al taller, con un plazo de 2 meses para repetir la inspección",
      "No puede circular bajo ningún concepto",
      "Circular únicamente en vías urbanas",
    ],
    correct: 1,
    explanation:
      "Con ITV desfavorable, el vehículo solo puede ir directamente al taller para reparar los defectos. Tiene 2 meses para repetir la inspección. Si es negativa, necesita grúa.",
    image: null,
  },
  {
    id: 12,
    category: "Documentación",
    question: "¿En qué plazo debe comunicarse un cambio de datos personales del conductor?",
    options: ["5 días", "10 días", "15 días", "30 días"],
    correct: 2,
    explanation:
      "Los cambios de datos personales deben comunicarse en 15 días. También se dispone de 15 días para pasar la ITV extraordinaria cuando se modifica un vehículo.",
    image: null,
  },
  // --- PERMISO POR PUNTOS ---
  {
    id: 13,
    category: "Permiso por puntos",
    question: "¿Con cuántos puntos empieza un conductor novel (primer año)?",
    options: ["6 puntos", "8 puntos", "10 puntos", "12 puntos"],
    correct: 1,
    explanation:
      "Los conductores noveles (primer año de permiso) empiezan con 8 puntos. Un conductor consolidado tiene 12 puntos.",
    image: { type: "scenario", scene: "points" },
  },
  {
    id: 14,
    category: "Permiso por puntos",
    question: "¿Cuántos puntos tiene un conductor con el permiso consolidado?",
    options: ["8 puntos", "10 puntos", "12 puntos", "15 puntos"],
    correct: 2,
    explanation:
      "Un conductor con el permiso consolidado dispone de 12 puntos.",
    image: { type: "scenario", scene: "points" },
  },
  {
    id: 15,
    category: "Permiso por puntos",
    question: "¿Cuántos puntos se pueden perder como máximo en un solo día?",
    options: ["4 puntos", "6 puntos", "8 puntos", "10 puntos"],
    correct: 2,
    explanation:
      "Se pueden perder como máximo 8 puntos al día, independientemente del número de infracciones cometidas.",
    image: { type: "scenario", scene: "points" },
  },
  {
    id: 16,
    category: "Permiso por puntos",
    question: "¿Cómo se recuperan todos los puntos perdidos cuando el saldo ha llegado a cero?",
    options: [
      "Esperar 2 años sin infracciones",
      "Hacer un curso de 10 horas",
      "Esperar 6 meses + curso de 20 horas + examen → recupera 8 puntos",
      "Automáticamente al renovar el permiso",
    ],
    correct: 2,
    explanation:
      "Para recuperación total tras agotar puntos: esperar 6 meses + curso de 20 horas + examen = recupera 8 puntos. Para recuperación parcial (sin llegar a cero): curso de 10 horas = +4 puntos.",
    image: { type: "scenario", scene: "points" },
  },
  {
    id: 17,
    category: "Permiso por puntos",
    question: "¿Cuánto tiempo sin infracciones se necesita para recuperar los 12 puntos sin hacer ningún curso?",
    options: ["1 año", "18 meses", "2 años", "3 años"],
    correct: 2,
    explanation:
      "Sin hacer ningún curso, se recuperan los 12 puntos tras 2 años sin cometer infracciones que acarreen pérdida de puntos.",
    image: null,
  },
  // --- SEÑALIZACIÓN ---
  {
    id: 18,
    category: "Señalización",
    question: "¿Cuál es el orden de preferencia de las señales de tráfico?",
    options: [
      "Semáforos > agentes > señales verticales > marcas viales",
      "Agentes > señales circunstanciales > semáforos > señales verticales > marcas viales > código",
      "Señales verticales > semáforos > agentes > marcas viales",
      "Código de circulación > marcas viales > señales verticales > semáforos",
    ],
    correct: 1,
    explanation:
      "El orden es: agentes > señales circunstanciales (variables) > semáforos > señales verticales > marcas viales > código de circulación.",
    image: null,
  },
  {
    id: 19,
    category: "Señalización",
    question: "¿Qué significa un semáforo con luz ámbar fija?",
    options: [
      "Pasar con precaución a velocidad reducida",
      "Detenerse, salvo que no pueda hacerse con seguridad",
      "Pasar cediendo el paso",
      "Prepararse para arrancar",
    ],
    correct: 1,
    explanation:
      "El semáforo amarillo fijo obliga a detenerse, salvo que la detención no pueda hacerse con seguridad (por estar demasiado cerca del semáforo).",
    image: null,
  },
  {
    id: 20,
    category: "Señalización",
    question: "¿Qué indica un semáforo con luz ámbar intermitente?",
    options: [
      "Prohibido el paso",
      "Paso libre sin restricciones",
      "Pasar cediendo el paso y con precaución",
      "Solo pueden pasar vehículos de emergencias",
    ],
    correct: 2,
    explanation:
      "El semáforo amarillo intermitente indica que se puede pasar cediendo el paso y con precaución.",
    image: null,
  },
  {
    id: 21,
    category: "Señalización",
    question: "¿Qué indica una flecha verde en un semáforo?",
    options: [
      "Puede avanzar en cualquier dirección",
      "Puede avanzar en la dirección indicada, cediendo el paso",
      "Tiene prioridad sobre el resto del tráfico",
      "Puede girar si no hay peatones",
    ],
    correct: 1,
    explanation:
      "Una flecha verde en un semáforo indica que puede circular en esa dirección cediendo el paso al tráfico que no tenga la señal roja.",
    image: null,
  },
  // --- SEÑALES DE TRÁFICO ---
  {
    id: 22,
    category: "Señales de tráfico",
    question: "¿Qué indica una señal circular con borde rojo y un número en su interior?",
    options: [
      "Velocidad mínima obligatoria",
      "Velocidad máxima permitida",
      "Velocidad recomendada",
      "Fin de limitación de velocidad",
    ],
    correct: 1,
    explanation:
      "Las señales circulares con borde rojo y número indican la velocidad máxima permitida en ese tramo.",
    image: { type: "speed-sign", value: 50 },
  },
  {
    id: 23,
    category: "Señales de tráfico",
    question: "Una señal octogonal roja con la palabra 'STOP' obliga a:",
    options: [
      "Reducir la velocidad a 20 km/h",
      "Ceder el paso sin detenerse si no hay tráfico",
      "Detenerse completamente y ceder el paso",
      "Tocar el claxon antes de continuar",
    ],
    correct: 2,
    explanation:
      "La señal STOP obliga a detenerse completamente en la línea de stop y ceder el paso a todos los vehículos.",
    image: { type: "stop-sign" },
  },
  {
    id: 24,
    category: "Señales de tráfico",
    question: "La señal de 'Ceda el paso' es de forma:",
    options: [
      "Circular con borde rojo",
      "Triangular con el vértice hacia abajo",
      "Octogonal roja",
      "Rectangular azul",
    ],
    correct: 1,
    explanation:
      "La señal de 'Ceda el paso' es un triángulo invertido (vértice hacia abajo) con borde rojo.",
    image: { type: "give-way" },
  },
  {
    id: 25,
    category: "Señales de tráfico",
    question: "¿Qué indica una señal circular azul con una flecha blanca?",
    options: [
      "Prohibición de circulación",
      "Sentido obligatorio",
      "Recomendación de circulación",
      "Fin de obligación",
    ],
    correct: 1,
    explanation:
      "Las señales circulares azules con flecha blanca indican sentido o dirección obligatoria.",
    image: { type: "obligation", icon: "arrow-right" },
  },
  {
    id: 26,
    category: "Señales de tráfico",
    question: "¿Qué forma tienen las señales de prohibición?",
    options: [
      "Triangulares con borde rojo",
      "Circulares con borde rojo",
      "Rectangulares azules",
      "Octogonales rojas",
    ],
    correct: 1,
    explanation:
      "Las señales de prohibición son circulares con borde rojo y fondo blanco (excepto el Stop que es octogonal rojo).",
    image: { type: "prohibition", icon: "no-entry" },
  },
  {
    id: 27,
    category: "Señales de tráfico",
    question: "¿Qué señal prohíbe tanto la parada como el estacionamiento?",
    options: [
      "R-307 (parada y estacionamiento prohibido)",
      "R-308 (estacionamiento prohibido)",
      "R-500 (fin de restricciones)",
      "R-101 (prohibido el paso)",
    ],
    correct: 0,
    explanation:
      "La R-307 prohíbe tanto la parada como el estacionamiento. La R-308 solo prohíbe el estacionamiento (la parada breve sí está permitida con R-308).",
    image: { type: "no-stop-no-park" },
  },
  {
    id: 28,
    category: "Señales de tráfico",
    question: "¿Qué indica la señal R-500?",
    options: [
      "Prohibido el paso a todos los vehículos",
      "Fin de todas las prohibiciones y restricciones anteriores",
      "Límite de velocidad de 500 metros",
      "Zona de estacionamiento restringido",
    ],
    correct: 1,
    explanation:
      "La R-500 indica el fin de todas las prohibiciones y restricciones impuestas por señales anteriores.",
    image: { type: "end-restrictions" },
  },
  {
    id: 29,
    category: "Señales de tráfico",
    question: "¿Qué tipo de señal es la de 'Calzada con prioridad'?",
    options: [
      "Una señal de prohibición circular",
      "Una señal triangular de peligro",
      "Una señal de prioridad romboidal amarilla",
      "Una señal informativa rectangular",
    ],
    correct: 2,
    explanation:
      "La señal de 'Calzada con prioridad' es romboidal (en forma de diamante) con fondo amarillo y borde blanco.",
    image: { type: "priority-road" },
  },
  // --- MARCAS VIALES ---
  {
    id: 30,
    category: "Marcas viales",
    question: "¿Qué indica una línea continua en el centro de la calzada?",
    options: [
      "Se puede cruzar con precaución",
      "Prohibido cruzarla o circular sobre ella para adelantar",
      "Solo para bicicletas",
      "Separación de sentidos en zona escolar",
    ],
    correct: 1,
    explanation:
      "Una línea continua en el centro de la calzada prohíbe cruzarla o circular sobre ella para realizar adelantamientos.",
    image: { type: "scenario", scene: "overtaking" },
  },
  {
    id: 31,
    category: "Marcas viales",
    question: "¿Qué significa una línea blanca discontinua en el centro de la calzada?",
    options: [
      "Prohibición de adelantar",
      "Se puede cruzar para adelantar si hay visibilidad suficiente",
      "Separación de carriles en autopista",
      "Carril bici",
    ],
    correct: 1,
    explanation:
      "Una línea discontinua en el centro permite cruzarla para adelantar cuando las condiciones de visibilidad y tráfico lo permitan.",
    image: { type: "scenario", scene: "overtaking" },
  },
  // --- ALUMBRADO ---
  {
    id: 32,
    category: "Alumbrado",
    question: "¿Cuándo es obligatorio el uso de las luces de carretera (largas)?",
    options: [
      "Siempre en autopistas",
      "En vías interurbanas insuficientemente iluminadas, a más de 40 km/h y sin deslumbrar",
      "Solo en niebla densa",
      "En ciudad cuando no haya farolas",
    ],
    correct: 1,
    explanation:
      "Las luces de carretera son OBLIGATORIAS en vías interurbanas cuando la vía está insuficientemente iluminada, se circula a más de 40 km/h y no hay riesgo de deslumbrar.",
    image: { type: "scenario", scene: "lights" },
  },
  {
    id: 33,
    category: "Alumbrado",
    question: "¿Cuándo se utilizan las luces de niebla traseras?",
    options: [
      "Siempre que llueva",
      "Cuando la visibilidad sea inferior a 50 metros",
      "Solo en autopistas",
      "En cualquier condición de lluvia o niebla",
    ],
    correct: 1,
    explanation:
      "Las luces de niebla traseras solo deben usarse cuando la visibilidad sea inferior a 50 metros, para no deslumbrar a otros conductores.",
    image: { type: "scenario", scene: "fog" },
  },
  {
    id: 34,
    category: "Alumbrado",
    question: "¿De qué colores son las luces del vehículo según su posición?",
    options: [
      "Delante blanco, detrás rojo, lateral amarillo",
      "Delante amarillo, detrás rojo, lateral blanco",
      "Delante blanco, detrás naranja, lateral rojo",
      "Todos blancos salvo los de freno que son rojos",
    ],
    correct: 0,
    explanation:
      "Los colores reglamentarios son: delante blanco (o amarillo selectivo), detrás rojo y lateral amarillo auto.",
    image: { type: "scenario", scene: "lights" },
  },
  {
    id: 35,
    category: "Alumbrado",
    question: "¿En qué situación está prohibido usar solo las luces de posición al circular?",
    options: [
      "De noche en autopista",
      "Siempre está prohibido circular usando solo la luz de posición",
      "En túneles",
      "En zonas urbanas iluminadas",
    ],
    correct: 1,
    explanation:
      "La luz de posición (2 blancas delante + 2 rojas detrás) NUNCA puede usarse sola mientras se circula. Solo se usa en parada/estacionamiento o junto a otras luces.",
    image: { type: "scenario", scene: "lights" },
  },
  {
    id: 36,
    category: "Alumbrado",
    question: "¿Cuándo es obligatoria la luz de estacionamiento?",
    options: [
      "Siempre que el vehículo esté parado en la calle",
      "De noche en travesías insuficientemente iluminadas",
      "Solo en autopistas y autovías",
      "Cuando el vehículo esté en un aparcamiento",
    ],
    correct: 1,
    explanation:
      "La luz de estacionamiento es obligatoria de noche en travesías insuficientemente iluminadas.",
    image: null,
  },
  // --- VELOCIDADES ---
  {
    id: 37,
    category: "Velocidades",
    question: "¿Cuál es la velocidad máxima en autopistas y autovías para turismos?",
    options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"],
    correct: 2,
    explanation:
      "La velocidad máxima en autopistas y autovías para turismos es de 120 km/h.",
    image: { type: "speed-sign", value: 120 },
  },
  {
    id: 38,
    category: "Velocidades",
    question: "¿Cuál es la velocidad máxima en carreteras convencionales para turismos?",
    options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
    correct: 1,
    explanation:
      "La velocidad máxima en carreteras convencionales para turismos es de 90 km/h.",
    image: { type: "speed-sign", value: 90 },
  },
  {
    id: 39,
    category: "Velocidades",
    question: "¿Cuál es la velocidad máxima en vías urbanas con 2 o más carriles por sentido?",
    options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
    correct: 2,
    explanation:
      "En vías urbanas con 2 o más carriles por sentido, la velocidad máxima es de 50 km/h.",
    image: { type: "speed-sign", value: 50 },
  },
  {
    id: 40,
    category: "Velocidades",
    question: "¿Cuál es la velocidad máxima en una calle urbana con un solo carril por sentido?",
    options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
    correct: 1,
    explanation:
      "En vías urbanas con un solo carril por sentido, la velocidad máxima es de 30 km/h.",
    image: { type: "speed-sign", value: 30 },
  },
  {
    id: 41,
    category: "Velocidades",
    question: "¿Cuál es la velocidad máxima en calles de plataforma única (calzada y acera al mismo nivel)?",
    options: ["10 km/h", "20 km/h", "30 km/h", "50 km/h"],
    correct: 1,
    explanation:
      "En vías urbanas de plataforma única (calzada y acera al mismo nivel) la velocidad máxima es de 20 km/h, desde la reforma urbana de 2021.",
    image: { type: "speed-sign", value: 20 },
  },
  {
    id: 42,
    category: "Velocidades",
    question: "¿Cuál es la velocidad mínima en autopistas?",
    options: ["40 km/h", "50 km/h", "60 km/h", "No existe velocidad mínima"],
    correct: 2,
    explanation:
      "La velocidad mínima en autopistas es de 60 km/h. Por debajo se considera conducción anormalmente lenta.",
    image: { type: "scenario", scene: "highway" },
  },
  {
    id: 43,
    category: "Velocidades",
    question: "El transporte escolar que circula fuera de poblado, ¿qué reducción de velocidad debe aplicar?",
    options: ["5 km/h menos", "10 km/h menos", "20 km/h menos", "No tiene reducción"],
    correct: 1,
    explanation:
      "El transporte escolar fuera de poblado debe reducir en 10 km/h la velocidad máxima genérica aplicable.",
    image: null,
  },
  {
    id: 44,
    category: "Velocidades",
    question: "Una carretera convencional con separación física entre sentidos, ¿qué velocidad máxima permite a los turismos?",
    options: ["90 km/h", "100 km/h", "110 km/h", "120 km/h"],
    correct: 1,
    explanation:
      "En carreteras convencionales con separación física entre sentidos, la velocidad máxima para turismos, motos y autocaravanas ligeras es de 100 km/h.",
    image: { type: "speed-sign", value: 100 },
  },
  // --- ADELANTAMIENTOS ---
  {
    id: 45,
    category: "Adelantamientos",
    question: "¿Cuándo está permitido adelantar por la derecha?",
    options: [
      "Nunca está permitido",
      "Cuando el vehículo de delante va a girar a la izquierda, o en poblado con carriles delimitados",
      "Solo en autopistas de varios carriles",
      "Cuando el adelantamiento por la izquierda es peligroso",
    ],
    correct: 1,
    explanation:
      "Se puede adelantar por la derecha cuando: el vehículo de delante va a girar a la izquierda; estamos en poblado con carriles delimitados; o se adelanta a un tranvía en vía doble sentido.",
    image: { type: "scenario", scene: "overtaking" },
  },
  {
    id: 46,
    category: "Adelantamientos",
    question: "Al adelantar a un ciclista, ¿qué distancia lateral mínima debe dejarse?",
    options: ["0,5 metros", "1 metro", "1,5 metros", "2 metros"],
    correct: 2,
    explanation:
      "Al adelantar a peatones, ciclistas y usuarios de VMP, debe dejarse una separación lateral mínima de 1,5 metros.",
    image: { type: "scenario", scene: "overtaking" },
  },
  {
    id: 47,
    category: "Adelantamientos",
    question: "¿Qué vehículos se pueden adelantar aunque haya línea continua en el centro de la calzada?",
    options: [
      "Ninguno, la línea continua prohíbe todo adelantamiento",
      "Peatones, animales, ciclos y ciclomotores",
      "Solo en emergencias",
      "Cualquier vehículo que vaya muy despacio",
    ],
    correct: 1,
    explanation:
      "Con línea continua se puede adelantar a: peatones, animales y vehículos de tracción animal, ciclos y ciclomotores (de 2, 3 o 4 ruedas).",
    image: { type: "scenario", scene: "overtaking" },
  },
  {
    id: 48,
    category: "Adelantamientos",
    question: "¿Cuáles son los pasos correctos para realizar un adelantamiento? (regla RSM)",
    options: [
      "Señalizar, mirar por el retrovisor, maniobrar",
      "Retrovisor, Señalización, Maniobra",
      "Maniobrar, señalizar al terminar, comprobar espejo",
      "Acelerar, señalizar, adelantar",
    ],
    correct: 1,
    explanation:
      "La regla RSM indica el orden correcto: primero comprobar el Retrovisor, luego hacer la Señalización, y finalmente ejecutar la Maniobra.",
    image: { type: "scenario", scene: "overtaking" },
  },
  // --- INMOVILIZACIONES ---
  {
    id: 49,
    category: "Inmovilizaciones",
    question: "¿Qué diferencia hay entre parada y estacionamiento?",
    options: [
      "La parada es voluntaria y menos de 2 minutos sin abandonar el vehículo; el estacionamiento es el resto",
      "La parada puede durar hasta 5 minutos; el estacionamiento más tiempo",
      "No hay diferencia, son lo mismo",
      "La parada es solo en vías urbanas; el estacionamiento en cualquier vía",
    ],
    correct: 0,
    explanation:
      "La parada es voluntaria, dura menos de 2 minutos y el conductor no abandona el vehículo. El estacionamiento es cualquier otra inmovilización que no sea detención ni parada.",
    image: { type: "prohibition", icon: "no-parking" },
  },
  {
    id: 50,
    category: "Inmovilizaciones",
    question: "Al estacionar en una pendiente ascendente, ¿qué marcha se debe dejar?",
    options: [
      "Marcha atrás",
      "Punto muerto",
      "Primera marcha",
      "Cualquier marcha, solo importa el freno de mano",
    ],
    correct: 2,
    explanation:
      "En pendiente ascendente se deja primera marcha; en descendente se deja marcha atrás. Así el vehículo queda bloqueado mecánicamente aunque falle el freno de mano.",
    image: null,
  },
  {
    id: 51,
    category: "Inmovilizaciones",
    question: "¿A qué distancia mínima de un cruce está prohibido estacionar?",
    options: ["3 metros", "5 metros", "8 metros", "10 metros"],
    correct: 1,
    explanation:
      "Está prohibido estacionar a menos de 5 metros de un cruce o intersección.",
    image: { type: "prohibition", icon: "no-parking" },
  },
  {
    id: 52,
    category: "Inmovilizaciones",
    question: "¿Está permitido remolcar un vehículo averiado con otro vehículo particular?",
    options: [
      "Sí, con una cuerda de al menos 5 metros",
      "Sí, si la distancia no supera 5 km",
      "No, el arrastre está reservado a vehículos de auxilio en carretera",
      "Sí, solo en vías urbanas",
    ],
    correct: 2,
    explanation:
      "El arrastre de vehículos averiados está reservado a los vehículos de auxilio en carretera. No puede realizarlo un particular.",
    image: null,
  },
  // --- PRIORIDAD DE PASO ---
  {
    id: 53,
    category: "Prioridad de paso",
    question: "En una intersección sin señalizar, ¿quién tiene prioridad de paso?",
    options: [
      "El vehículo que circula más deprisa",
      "El vehículo que viene por la derecha",
      "El vehículo de mayor tamaño",
      "El vehículo que llega primero",
    ],
    correct: 1,
    explanation:
      "En intersecciones no señalizadas, tiene prioridad el vehículo que viene por la derecha (regla de la derecha).",
    image: { type: "warning", icon: "intersection" },
  },
  {
    id: 54,
    category: "Prioridad de paso",
    question: "¿Quién tiene preferencia de paso en una rotonda?",
    options: [
      "El que entra en la rotonda",
      "El que ya circula dentro de la rotonda",
      "El que viene por la derecha al entrar",
      "Los vehículos pesados siempre",
    ],
    correct: 1,
    explanation:
      "En las rotondas tiene preferencia quien ya circula dentro de ellas. El que entra debe ceder el paso.",
    image: { type: "scenario", scene: "roundabout" },
  },
  {
    id: 55,
    category: "Prioridad de paso",
    question: "¿Tienen preferencia los peatones en un paso de peatones señalizado?",
    options: [
      "Solo si el semáforo está en verde para ellos",
      "Sí, los peatones tienen siempre prioridad en los pasos señalizados",
      "Solo si el conductor gira",
      "Solo en vías urbanas",
    ],
    correct: 1,
    explanation:
      "Los peatones tienen prioridad en los pasos de peatones señalizados, cuando el vehículo gira, cuando cruzan el arcén, y en zonas residenciales/zona 30.",
    image: null,
  },
  {
    id: 56,
    category: "Prioridad de paso",
    question: "¿Tiene un ciclista prioridad dentro de una glorieta frente al vehículo que entra?",
    options: [
      "No, debe ceder el paso siempre",
      "Sí, el ciclista que ya está dentro tiene prioridad",
      "Solo si lleva casco",
      "Depende del tipo de vía",
    ],
    correct: 1,
    explanation:
      "Los ciclistas tienen prioridad en el paso ciclista, cuando el vehículo gira, si el ciclista entró primero al cruce, y dentro de glorieta.",
    image: { type: "scenario", scene: "roundabout" },
  },
  // --- TRANSPORTE ---
  {
    id: 57,
    category: "Transporte",
    question: "¿Hasta qué altura deben llevar los niños sistema de retención infantil homologado?",
    options: [
      "Hasta 1,20 m de altura",
      "Hasta 1,35 m de altura",
      "Hasta 1,40 m de altura",
      "Hasta los 12 años sin importar la altura",
    ],
    correct: 1,
    explanation:
      "Los menores que midan menos de 1,35 m deben usar un sistema de retención infantil homologado adaptado a su talla y peso.",
    image: { type: "scenario", scene: "child-seat" },
  },
  {
    id: 58,
    category: "Transporte",
    question: "¿Dónde puede instalarse una silla de bebé orientada hacia atrás?",
    options: [
      "Solo en el asiento trasero",
      "En el asiento delantero si se desactiva el airbag frontal",
      "En cualquier asiento con cinturón",
      "Preferiblemente en la parte trasera, o delante si se desactiva el airbag",
    ],
    correct: 3,
    explanation:
      "Los sistemas de retención orientados hacia atrás se colocan preferiblemente en la parte trasera. En el asiento delantero solo si se desactiva completamente el airbag frontal.",
    image: { type: "scenario", scene: "child-seat" },
  },
  {
    id: 59,
    category: "Transporte",
    question: "¿Es obligatorio el uso del cinturón de seguridad en todos los asientos?",
    options: [
      "Solo en los asientos delanteros",
      "Solo en autopistas y autovías",
      "Sí, en todos los asientos y en todo tipo de vía",
      "Solo en carretera, no en ciudad",
    ],
    correct: 2,
    explanation:
      "El cinturón de seguridad es obligatorio en todos los asientos, tanto en vías urbanas como interurbanas.",
    image: { type: "scenario", scene: "seatbelt" },
  },
  // --- CONOCIMIENTO DEL VEHÍCULO ---
  {
    id: 60,
    category: "Conocimiento del vehículo",
    question: "¿Cómo debe frenar un conductor cuando su vehículo dispone de ABS?",
    options: [
      "Frenar intermitentemente (bombeo) para no bloquear las ruedas",
      "Frenar a fondo, el ABS evita el bloqueo de ruedas",
      "Frenar suavemente y progresivamente siempre",
      "El ABS no cambia la técnica de frenado",
    ],
    correct: 1,
    explanation:
      "Con ABS se debe frenar a FONDO. El sistema evita el bloqueo de ruedas automáticamente, por lo que el bombeo manual es contraproducente.",
    image: { type: "scenario", scene: "mechanics" },
  },
  {
    id: 61,
    category: "Conocimiento del vehículo",
    question: "¿Sobre qué ruedas actúa el freno de estacionamiento (de mano)?",
    options: [
      "Sobre las 4 ruedas",
      "Solo sobre las 2 ruedas delanteras",
      "Solo sobre las 2 ruedas traseras",
      "Sobre las ruedas motrices",
    ],
    correct: 2,
    explanation:
      "El freno de estacionamiento (freno de mano) actúa sobre las 2 ruedas traseras. El freno de servicio (pedal) actúa sobre las 4 ruedas.",
    image: { type: "scenario", scene: "mechanics" },
  },
  {
    id: 62,
    category: "Conocimiento del vehículo",
    question: "¿Cuándo debe cambiarse un neumático por desgaste?",
    options: [
      "Cuando el dibujo de la banda de rodadura sea inferior a 2 mm",
      "Cuando el dibujo de la banda de rodadura sea inferior a 1,6 mm",
      "Cuando tenga más de 5 años",
      "Cuando la presión caiga por debajo de 2 bar",
    ],
    correct: 1,
    explanation:
      "El neumático debe cambiarse cuando el dibujo de la banda de rodadura sea inferior a 1,6 mm. Los clavos de nieve pueden sobresalir como máximo 2 mm.",
    image: { type: "scenario", scene: "mechanics" },
  },
  {
    id: 63,
    category: "Conocimiento del vehículo",
    question: "¿Con qué frecuencia y en qué condición debe comprobarse la presión de los neumáticos?",
    options: [
      "Cada semana, con los neumáticos calientes",
      "Cada mes, con los neumáticos en frío",
      "Antes de cada viaje largo, calientes o fríos",
      "Solo en la ITV anual",
    ],
    correct: 1,
    explanation:
      "La presión de los neumáticos debe comprobarse una vez al mes y siempre en frío (antes de circular), ya que el calor aumenta la presión y daría una lectura incorrecta.",
    image: { type: "scenario", scene: "mechanics" },
  },
  {
    id: 64,
    category: "Conocimiento del vehículo",
    question: "¿Cómo debe estar colocado el reposacabezas para ser eficaz?",
    options: [
      "Por debajo de la nuca",
      "El borde superior entre el límite superior de la cabeza y los ojos, a máximo 4 cm de distancia",
      "A la altura de los hombros",
      "Lo más alto posible",
    ],
    correct: 1,
    explanation:
      "El reposacabezas debe tener el borde superior entre el límite superior de la cabeza y la altura de los ojos, con un máximo de 4 cm de distancia de la cabeza.",
    image: { type: "scenario", scene: "seatbelt" },
  },
  {
    id: 65,
    category: "Conocimiento del vehículo",
    question: "¿A qué distancia mínima del airbag debe colocarse el conductor?",
    options: ["10 cm", "15 cm", "20 cm", "25 cm"],
    correct: 3,
    explanation:
      "El conductor debe colocarse a una distancia mínima de 25 cm del airbag para que su despliegue sea eficaz y no cause lesiones.",
    image: { type: "scenario", scene: "seatbelt" },
  },
  // --- ESTADO PSICOFÍSICO ---
  {
    id: 66,
    category: "Estado psicofísico",
    question: "¿Cuándo alcanza el alcohol su nivel máximo en sangre?",
    options: [
      "Inmediatamente después de beber",
      "Entre 30 y 90 minutos después de la última copa",
      "A las 2 horas de beber",
      "Depende del tipo de bebida",
    ],
    correct: 1,
    explanation:
      "El alcohol alcanza su nivel máximo en sangre entre 30 y 90 minutos después de la última copa. La eliminación es más lenta durante las horas de sueño.",
    image: { type: "scenario", scene: "alcohol" },
  },
  {
    id: 67,
    category: "Estado psicofísico",
    question: "¿En qué horas del día el riesgo de somnolencia al volante es más alto?",
    options: [
      "8:00-10:00 y 16:00-18:00",
      "3:00-5:00 y 14:00-16:00",
      "12:00-14:00 y 22:00-24:00",
      "6:00-8:00 y 20:00-22:00",
    ],
    correct: 1,
    explanation:
      "Las horas más peligrosas para la somnolencia son 3:00-5:00 (madrugada) y 14:00-16:00 (sobremesa), coincidiendo con los ritmos circadianos del sueño.",
    image: { type: "scenario", scene: "fatigue" },
  },
  {
    id: 68,
    category: "Estado psicofísico",
    question: "¿Qué son los microsueños?",
    options: [
      "Sueños muy cortos que no afectan a la conducción",
      "Episodios involuntarios de sueño de pocos segundos que ocurren al volante",
      "La sensación de somnolencia que se puede combatir con música",
      "Un efecto secundario del café que mejora la atención",
    ],
    correct: 1,
    explanation:
      "Los microsueños son episodios involuntarios de sueño de pocos segundos. No se pueden combatir: la única solución es parar y descansar.",
    image: { type: "scenario", scene: "fatigue" },
  },
  {
    id: 69,
    category: "Estado psicofísico",
    question: "Conducir con 35 grados de temperatura exterior equivale a conducir con una tasa de alcohol de:",
    options: ["0,2 g/l", "0,3 g/l", "0,5 g/l", "0,8 g/l"],
    correct: 2,
    explanation:
      "Conducir con 35 grados de temperatura exterior afecta a las capacidades del conductor de forma equivalente a hacerlo con una tasa de 0,5 g/l de alcohol en sangre.",
    image: { type: "scenario", scene: "fatigue" },
  },
  // --- ALCOHOL Y DROGAS ---
  {
    id: 70,
    category: "Alcohol y drogas",
    question: "¿Cuál es la tasa máxima de alcohol en sangre para conductores en general?",
    options: ["0,3 g/l", "0,5 g/l", "0,8 g/l", "1,0 g/l"],
    correct: 1,
    explanation:
      "La tasa máxima de alcohol en sangre para conductores en general es de 0,5 g/l (0,25 mg/l en aire espirado).",
    image: { type: "scenario", scene: "alcohol" },
  },
  {
    id: 71,
    category: "Alcohol y drogas",
    question: "¿Cuál es la tasa máxima de alcohol para conductores noveles y profesionales?",
    options: ["0,1 g/l", "0,2 g/l", "0,3 g/l", "0,5 g/l"],
    correct: 2,
    explanation:
      "Los conductores noveles (primeros 2 años) y profesionales tienen una tasa máxima de 0,3 g/l (0,15 mg/l en aire espirado).",
    image: { type: "scenario", scene: "alcohol" },
  },
  {
    id: 72,
    category: "Alcohol y drogas",
    question: "¿Puede un conductor negarse a realizar la prueba de alcoholemia?",
    options: [
      "Sí, si cree que está en su derecho",
      "Sí, si no ha bebido nada",
      "No, negarse es una infracción muy grave",
      "Sí, pero debe firmar un documento",
    ],
    correct: 2,
    explanation:
      "Negarse a la prueba de alcoholemia es una infracción muy grave que puede implicar responsabilidad penal.",
    image: { type: "scenario", scene: "alcohol" },
  },
  {
    id: 73,
    category: "Alcohol y drogas",
    question: "¿Cómo afecta el cannabis a la conducción?",
    options: [
      "Mejora los reflejos y la concentración",
      "Solo afecta si se consume en grandes cantidades",
      "Altera la percepción, aumenta el tiempo de reacción y produce somnolencia",
      "Tiene un efecto mínimo, similar al café",
    ],
    correct: 2,
    explanation:
      "El cannabis altera la percepción de distancias y velocidades, aumenta el tiempo de reacción y produce somnolencia, incrementando gravemente el riesgo de accidente.",
    image: { type: "scenario", scene: "alcohol" },
  },
  {
    id: 74,
    category: "Alcohol y drogas",
    question: "¿Cómo engañan las anfetaminas al conductor?",
    options: [
      "Mejoran realmente la atención y los reflejos",
      "Producen euforia y disminuyen la sensación de fatiga aunque el conductor sigue deteriorado",
      "Reducen la velocidad de reacción pero mejoran la visión",
      "Solo son peligrosas en dosis muy altas",
    ],
    correct: 1,
    explanation:
      "Las anfetaminas hacen al conductor impulsivo e impaciente, y disminuyen la sensación de fatiga, lo que engaña haciéndole creer que está en condiciones de conducir cuando en realidad está deteriorado.",
    image: { type: "scenario", scene: "alcohol" },
  },
  // --- SITUACIONES DE RIESGO ---
  {
    id: 75,
    category: "Situaciones de riesgo",
    question: "¿Qué es el aquaplaning?",
    options: [
      "Un tipo de señal en zonas inundables",
      "La pérdida de adherencia cuando una capa de agua separa el neumático del asfalto",
      "La niebla que se forma en los parabrisas",
      "Un sistema de frenado de emergencia",
    ],
    correct: 1,
    explanation:
      "El aquaplaning ocurre cuando una capa de agua se interpone entre el neumático y el asfalto, provocando la pérdida total de adherencia. Las causas principales son velocidad excesiva y mal estado del neumático.",
    image: { type: "scenario", scene: "rain" },
  },
  {
    id: 76,
    category: "Situaciones de riesgo",
    question: "¿Cuándo es más deslizante la calzada con lluvia?",
    options: [
      "Cuando lleva horas lloviendo",
      "Al inicio de la lluvia, con las primeras gotas",
      "En cualquier momento por igual",
      "Solo cuando hay charcos visibles",
    ],
    correct: 1,
    explanation:
      "La calzada es más deslizante con las primeras gotas de lluvia, ya que el agua mezcla el polvo y el aceite acumulados en el asfalto. Con lluvia intensa la calzada se lava y mejora ligeramente.",
    image: { type: "scenario", scene: "rain" },
  },
  {
    id: 77,
    category: "Situaciones de riesgo",
    question: "Con nieve o hielo, ¿cuánto puede aumentar la distancia de frenado?",
    options: [
      "Se duplica (x2)",
      "Se triplica (x3)",
      "Puede multiplicarse por 10",
      "Se incrementa en un 50%",
    ],
    correct: 2,
    explanation:
      "En nieve o hielo, la distancia de frenado puede multiplicarse por 10 respecto a condiciones normales. Las cadenas deben colocarse en las ruedas motrices.",
    image: { type: "scenario", scene: "snow" },
  },
  {
    id: 78,
    category: "Situaciones de riesgo",
    question: "¿Cuándo deben colocarse las cadenas de nieve?",
    options: [
      "Solo cuando el vehículo esté parado en el hielo",
      "En las ruedas motrices cuando lo exija la calzada",
      "En las 4 ruedas siempre que nieve",
      "Solo en las ruedas traseras de los vehículos tracción trasera",
    ],
    correct: 1,
    explanation:
      "Las cadenas se colocan en las ruedas motrices cuando la calzada lo exija por nieve o hielo.",
    image: { type: "scenario", scene: "snow" },
  },
  {
    id: 79,
    category: "Situaciones de riesgo",
    question: "¿Cuándo deben usarse las luces de niebla traseras?",
    options: [
      "Siempre que llueva o haya niebla",
      "Solo si la visibilidad es inferior a 50 metros",
      "De noche en carretera siempre",
      "Cuando la visibilidad sea inferior a 100 metros",
    ],
    correct: 1,
    explanation:
      "Las luces de niebla traseras solo se usan si la visibilidad es inferior a 50 metros. Usarlas en otras condiciones puede deslumbrar a los conductores de detrás.",
    image: { type: "scenario", scene: "fog" },
  },
  {
    id: 80,
    category: "Situaciones de riesgo",
    question: "Si el vehículo derrapa por el eje trasero, ¿cómo debe reaccionar el conductor?",
    options: [
      "Girar el volante al lado contrario al derrape",
      "Girar el volante al mismo lado que el derrape",
      "Frenar a fondo inmediatamente",
      "Soltar el volante y frenar suavemente",
    ],
    correct: 1,
    explanation:
      "En un derrape trasero se gira el volante al mismo lado al que derrapa la parte trasera. En un derrape delantero se gira al lado contrario.",
    image: { type: "scenario", scene: "rain" },
  },
  {
    id: 81,
    category: "Situaciones de riesgo",
    question: "Al circular por un túnel, ¿qué luces son obligatorias?",
    options: [
      "Luces de posición",
      "Luces de cruce (cortas)",
      "Luces de carretera (largas)",
      "No hay obligación de encender luces en túneles bien iluminados",
    ],
    correct: 1,
    explanation:
      "En los túneles es obligatorio circular con las luces de cruce (cortas) encendidas, independientemente de la iluminación del túnel.",
    image: { type: "scenario", scene: "tunnel" },
  },
  // --- ACCIDENTES Y PRIMEROS AUXILIOS ---
  {
    id: 82,
    category: "Accidentes y primeros auxilios",
    question: "¿Cuál es la principal causa de accidentes de tráfico en España?",
    options: [
      "El mal estado de las carreteras (35-45%)",
      "Los fallos mecánicos (20-30%)",
      "Los factores humanos (70-90%)",
      "Las condiciones meteorológicas (40-60%)",
    ],
    correct: 2,
    explanation:
      "Los factores humanos (distracciones, velocidad, alcohol, etc.) son la causa principal de accidentes, con un 70-90% de los casos. El factor vía contribuye un 10-35% y el vehículo un 4-13%.",
    image: { type: "scenario", scene: "firstaid" },
  },
  {
    id: 83,
    category: "Accidentes y primeros auxilios",
    question: "¿Dónde son más frecuentes los accidentes pero más graves en mortalidad?",
    options: [
      "Más frecuentes en carretera, más graves en ciudad",
      "Más frecuentes en ciudad (vías urbanas), más graves en carretera (interurbana)",
      "Igualmente frecuentes y graves en ambos tipos de vía",
      "Más frecuentes y graves en autopistas",
    ],
    correct: 1,
    explanation:
      "La mayoría de accidentes ocurren en vías urbanas, pero los más mortales son los de vías interurbanas por la mayor velocidad.",
    image: { type: "scenario", scene: "firstaid" },
  },
  {
    id: 84,
    category: "Accidentes y primeros auxilios",
    question: "En caso de accidente, ¿cuál es el protocolo PAS?",
    options: [
      "Parar, Asegurarse, Socorrer",
      "Proteger, Avisar, Socorrer",
      "Prevenir, Alertar, Salvar",
      "Parar, Avisar, Señalizar",
    ],
    correct: 1,
    explanation:
      "PAS: Proteger la zona del accidente (señalizar con triángulos), Avisar a los servicios de emergencia (112) y Socorrer a los heridos.",
    image: { type: "scenario", scene: "firstaid" },
  },
  {
    id: 85,
    category: "Accidentes y primeros auxilios",
    question: "¿Cuál es la proporción correcta de compresiones e insuflaciones en la RCP?",
    options: [
      "15 compresiones + 1 insuflación",
      "20 compresiones + 2 insuflaciones",
      "30 compresiones + 2 insuflaciones",
      "10 compresiones + 1 insuflación",
    ],
    correct: 2,
    explanation:
      "La RCP (Reanimación Cardiopulmonar) se realiza con ciclos de 30 compresiones torácicas + 2 insuflaciones.",
    image: { type: "scenario", scene: "firstaid" },
  },
  {
    id: 86,
    category: "Accidentes y primeros auxilios",
    question: "¿Se debe quitar el casco a un motorista accidentado?",
    options: [
      "Sí, siempre inmediatamente",
      "No, nunca bajo ninguna circunstancia",
      "No, salvo en caso de asfixia",
      "Solo si está inconsciente",
    ],
    correct: 2,
    explanation:
      "No se debe quitar el casco a un motorista accidentado salvo en caso de asfixia, ya que puede haber lesiones en la columna cervical.",
    image: { type: "scenario", scene: "firstaid" },
  },
  {
    id: 87,
    category: "Accidentes y primeros auxilios",
    question: "¿Qué es la 'hora de oro' en los accidentes de tráfico?",
    options: [
      "El tiempo que tiene la aseguradora para atender el siniestro",
      "La primera hora tras el accidente, en la que ocurren más muertes evitables",
      "El tiempo límite para interponer una denuncia",
      "El tiempo recomendado para esperar antes de mover a un herido",
    ],
    correct: 1,
    explanation:
      "La 'hora de oro' es la primera hora posterior al accidente, durante la cual se producen más muertes evitables. Una atención rápida es crucial.",
    image: { type: "scenario", scene: "firstaid" },
  },
  {
    id: 88,
    category: "Accidentes y primeros auxilios",
    question: "¿En qué tipo de vía se producen más accidentes según la estadística?",
    options: [
      "En curvas",
      "En rectas",
      "En intersecciones",
      "En autopistas",
    ],
    correct: 1,
    explanation:
      "Estadísticamente, la mayoría de accidentes se producen en rectas (no en curvas), ya que es donde los conductores tienden a bajar la guardia.",
    image: null,
  },
  // --- DOCUMENTACIÓN (continuación) ---
  {
    id: 89,
    category: "Documentación",
    question: "¿Con qué frecuencia deben pasar la ITV los turismos de más de 10 años?",
    options: ["Cada 3 años", "Cada 2 años", "Cada año", "Cada 6 meses"],
    correct: 2,
    explanation:
      "Los turismos de más de 10 años deben pasar la ITV anualmente (cada año).",
    image: { type: "scenario", scene: "document" },
  },
  // --- UTILIZACIÓN DE LA VÍA ---
  {
    id: 90,
    category: "Señalización",
    question: "¿Qué vehículos están obligados a circular por el arcén?",
    options: [
      "Solo peatones y ciclistas",
      "Peatones, animales, ciclos, ciclomotores y vehículos especiales ligeros",
      "Todos los vehículos lentos",
      "Solo ciclomotores y bicicletas",
    ],
    correct: 1,
    explanation:
      "Están obligados a circular por el arcén: peatones, animales, ciclos, ciclomotores y vehículos especiales ligeros.",
    image: null,
  },
  {
    id: 91,
    category: "Señalización",
    question: "¿Para qué vehículos está prohibido el carril izquierdo en autopistas?",
    options: [
      "Para todos los vehículos en condiciones normales",
      "Para camiones pesados, furgones pesados y conjuntos de más de 7 metros",
      "Solo para vehículos de más de 7,5 toneladas",
      "Para autobuses y camiones en todo momento",
    ],
    correct: 1,
    explanation:
      "El carril izquierdo en autopistas está prohibido para camiones pesados, furgones pesados y conjuntos de vehículos de más de 7 metros de longitud.",
    image: { type: "scenario", scene: "highway" },
  },
  {
    id: 92,
    category: "Adelantamientos",
    question: "¿Está prohibida la marcha atrás en autopistas y autovías?",
    options: [
      "No, se permite en el arcén en caso de emergencia",
      "Sí, está totalmente prohibida",
      "Solo está prohibida en los túneles de autopista",
      "Se permite si la distancia es inferior a 15 metros",
    ],
    correct: 1,
    explanation:
      "En autopistas y autovías está totalmente prohibido circular en sentido contrario, hacer cambios de sentido y dar marcha atrás.",
    image: { type: "scenario", scene: "highway" },
  },
  {
    id: 93,
    category: "Inmovilizaciones",
    question: "En caso de avería en autopista, ¿dónde debe situarse el conductor?",
    options: [
      "Dentro del vehículo con el cinturón puesto",
      "Fuera de la calzada, al otro lado del guardarraíl o en zona segura",
      "Junto al vehículo en el arcén",
      "Delante del vehículo para señalizar",
    ],
    correct: 1,
    explanation:
      "En caso de avería en autopista, el conductor debe situarse fuera de la calzada, al otro lado del guardarraíl o en lugar seguro, con el chaleco reflectante puesto.",
    image: { type: "scenario", scene: "highway" },
  },
  {
    id: 94,
    category: "Señales de tráfico",
    question: "¿Qué significa un toque corto de silbato de un agente de tráfico?",
    options: [
      "Reanudar la marcha",
      "Detenerse",
      "Reducir la velocidad",
      "Ceder el paso",
    ],
    correct: 1,
    explanation:
      "Un toque corto de silbato significa detenerse. Un toque largo significa reanudar la marcha.",
    image: null,
  },
  {
    id: 95,
    category: "Velocidades",
    question: "¿Qué límite de velocidad se aplica al transporte de mercancías peligrosas?",
    options: [
      "El mismo límite genérico sin reducción",
      "10 km/h menos que el límite genérico, dentro y fuera de poblado",
      "Solo se reduce en vías urbanas (5 km/h menos)",
      "20 km/h menos fuera de poblado",
    ],
    correct: 1,
    explanation:
      "Los vehículos que transportan mercancías peligrosas deben circular 10 km/h por debajo del límite genérico aplicable, tanto dentro como fuera de poblado.",
    image: null,
  },
  {
    id: 96,
    category: "Conocimiento del vehículo",
    question: "¿Qué característica tiene un retrovisor convexo?",
    options: [
      "Muestra los objetos más grandes y más cerca",
      "Ofrece mayor campo de visión pero los objetos se ven más pequeños y más lejos",
      "Solo sirve para ver vehículos que vienen de frente",
      "Reduce el punto ciego lateral",
    ],
    correct: 1,
    explanation:
      "El retrovisor convexo ofrece un campo de visión más amplio, pero los vehículos se ven más pequeños y más lejos de lo que realmente están.",
    image: null,
  },
  {
    id: 97,
    category: "Señalización",
    question: "¿Qué ocurre cuando dos señales del mismo tipo se contradicen?",
    options: [
      "Prevalece la más antigua",
      "Prevalece la más restrictiva",
      "Prevalece la más prioritaria según el tipo",
      "El conductor decide cuál seguir",
    ],
    correct: 1,
    explanation:
      "Cuando dos señales del mismo tipo se contradicen, prevalece la más restrictiva. Cuando son de distinto tipo, prevalece la de mayor prioridad según el orden establecido.",
    image: null,
  },
  {
    id: 98,
    category: "Situaciones de riesgo",
    question: "¿Qué luces deben usar los vehículos V-2 (luz amarilla giratoria)?",
    options: [
      "Solo de noche cuando trabajan en vías",
      "De día y de noche cuando trabajan en vías, entran en autovías o circulan a ≤40 km/h",
      "Solo en autopistas y autovías",
      "Únicamente en obras",
    ],
    correct: 1,
    explanation:
      "Los vehículos V-2 (luz amarilla giratoria) deben usarla de día y de noche cuando trabajan en vías, cuando entran en autovías, o cuando circulan a 40 km/h o menos.",
    image: null,
  },
  {
    id: 99,
    category: "Definiciones",
    question: "¿Qué diferencia a una autopista de una autovía?",
    options: [
      "La autopista tiene mayor velocidad máxima",
      "La autopista puede tener peaje, no admite acceso desde propiedades colindantes y prohíbe bicis",
      "La autovía tiene mayor número de carriles",
      "No hay ninguna diferencia práctica",
    ],
    correct: 1,
    explanation:
      "La autopista puede tener peaje, no permite acceso desde propiedades colindantes y prohíbe la circulación de bicicletas. La autovía puede permitir bicicletas en algunas situaciones.",
    image: { type: "scenario", scene: "highway" },
  },
  {
    id: 100,
    category: "Señalización",
    question: "¿Qué significa la señal R-122 (prohibido el cambio de sentido)?",
    options: [
      "Prohíbe girar tanto a la izquierda como a la derecha",
      "Solo prohíbe el cambio de sentido completo (180°), pero permite girar a izquierda o derecha",
      "Prohíbe todas las maniobras de giro",
      "Solo aplica en intersecciones con semáforo",
    ],
    correct: 1,
    explanation:
      "La señal R-122 prohíbe el cambio de sentido (dar la vuelta), pero sí permite girar a la izquierda o a la derecha en la intersección.",
    image: null,
  },
  {
    id: 101,
    category: "Señalización",
    question: "¿Qué vehículos pueden acceder al carril VAO con un solo ocupante?",
    options: [
      "Ninguno, el carril VAO siempre requiere mínimo 2 ocupantes",
      "Vehículos con placa de discapacidad (V-15), buses, taxis, ambulancias, policía, bomberos, motos y etiqueta 0 emisiones",
      "Solo los vehículos eléctricos",
      "Cualquier vehículo en caso de emergencia",
    ],
    correct: 1,
    explanation:
      "Pueden acceder al carril VAO con un solo ocupante: vehículos con placa de discapacidad (V-15), autobuses, taxis, ambulancias, policía, bomberos, motocicletas y vehículos con etiqueta 0 emisiones.",
    image: null,
  },
  {
    id: 102,
    category: "Señales de tráfico",
    question: "¿Qué forma tienen las señales de advertencia de peligro?",
    options: [
      "Circulares con borde rojo",
      "Triangulares con borde rojo y vértice hacia arriba",
      "Triangulares con vértice hacia abajo",
      "Rectangulares con fondo amarillo",
    ],
    correct: 1,
    explanation:
      "Las señales de advertencia de peligro son triangulares con borde rojo y el vértice apuntando hacia arriba, con fondo blanco o amarillo.",
    image: { type: "warning", icon: "exclamation" },
  },
  {
    id: 103,
    category: "Velocidades",
    question: "¿Qué distancia de seguridad mínima deben mantener en carretera los vehículos de más de 3.500 kg y los conjuntos de más de 10 metros?",
    options: ["25 metros", "50 metros", "100 metros", "150 metros"],
    correct: 1,
    explanation:
      "Los vehículos de más de 3.500 kg y los conjuntos de más de 10 metros deben guardar una distancia de seguridad obligatoria de al menos 50 metros respecto al vehículo que les precede en vías fuera de poblado.",
    image: { type: "scenario", scene: "highway" },
  },
  {
    id: 104,
    category: "Prioridad de paso",
    question: "¿Qué vehículos tienen siempre preferencia de paso en emergencias?",
    options: [
      "Solo ambulancias",
      "Policía, bomberos y ambulancias en servicio de urgencias con señales acústicas y/o luminosas",
      "Todos los vehículos oficiales",
      "Los vehículos con señal acústica únicamente",
    ],
    correct: 1,
    explanation:
      "Los vehículos de emergencias (policía, bomberos, ambulancias) en servicio urgente con señales acústicas y/o luminosas tienen prioridad de paso.",
    image: { type: "priority-road" },
  },
];

export const TOTAL_QUESTIONS_EXAM = 30;
export const MAX_ERRORS_ALLOWED = 3;
