export const questions = [
  // --- SEÑALES DE TRÁFICO ---
  {
    id: 1,
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
  },
  {
    id: 2,
    category: "Señales de tráfico",
    question: "¿Qué significa una señal triangular con borde rojo?",
    options: ["Prohibición", "Obligación", "Peligro o advertencia", "Información"],
    correct: 2,
    explanation:
      "Las señales triangulares con borde rojo son señales de peligro que advierten de un riesgo próximo.",
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
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
  },
  // --- VELOCIDADES ---
  {
    id: 6,
    category: "Velocidades",
    question: "¿Cuál es la velocidad máxima en autopistas y autovías para turismos?",
    options: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"],
    correct: 3,
    explanation:
      "La velocidad máxima en autopistas y autovías para turismos es de 120 km/h, aunque puede alcanzar 130 km/h cuando el estado de la vía lo permita y se señalice.",
  },
  {
    id: 7,
    category: "Velocidades",
    question: "¿Cuál es la velocidad máxima en vías urbanas?",
    options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
    correct: 2,
    explanation:
      "La velocidad máxima genérica en vías urbanas es de 50 km/h, salvo señalización diferente.",
  },
  {
    id: 8,
    category: "Velocidades",
    question: "¿Cuál es la velocidad máxima en carreteras convencionales para turismos?",
    options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
    correct: 1,
    explanation:
      "La velocidad máxima en carreteras convencionales para turismos es de 90 km/h.",
  },
  {
    id: 9,
    category: "Velocidades",
    question: "En una vía de dos carriles con arcén de al menos 1,5 m, ¿cuál es la velocidad máxima para turismos?",
    options: ["90 km/h", "100 km/h", "110 km/h", "120 km/h"],
    correct: 1,
    explanation:
      "En carreteras de dos carriles con arcén pavimentado de al menos 1,5 m, la velocidad máxima puede llegar a 100 km/h.",
  },
  {
    id: 10,
    category: "Velocidades",
    question: "¿Cuál es la velocidad mínima en autopistas en el carril de la derecha?",
    options: ["60 km/h", "70 km/h", "80 km/h", "No existe velocidad mínima"],
    correct: 0,
    explanation:
      "La velocidad mínima en autopistas es de 60 km/h. Por debajo de ella se considera conducción anormalmente lenta.",
  },
  // --- ALCOHOLEMIA Y DROGAS ---
  {
    id: 11,
    category: "Alcoholemia",
    question: "¿Cuál es la tasa máxima de alcohol en sangre para conductores en general?",
    options: ["0,3 g/l", "0,5 g/l", "0,8 g/l", "1,0 g/l"],
    correct: 1,
    explanation:
      "La tasa máxima de alcohol en sangre para conductores en general es de 0,5 g/l (0,25 mg/l en aire espirado).",
  },
  {
    id: 12,
    category: "Alcoholemia",
    question: "¿Cuál es la tasa máxima de alcohol para conductores noveles (menos de 2 años de permiso)?",
    options: ["0,1 g/l", "0,2 g/l", "0,3 g/l", "0,5 g/l"],
    correct: 2,
    explanation:
      "Los conductores con menos de 2 años de antigüedad del permiso tienen una tasa máxima de 0,3 g/l (0,15 mg/l en aire espirado).",
  },
  {
    id: 13,
    category: "Alcoholemia",
    question: "¿Puede un conductor negarse a realizar la prueba de alcoholemia?",
    options: [
      "Sí, si cree que está en su derecho",
      "Sí, si no ha bebido nada",
      "No, negarse es una infracción muy grave",
      "Sí, pero debe firmar un documento",
    ],
    correct: 2,
    explanation:
      "Negarse a la prueba de alcoholemia es una infracción muy grave que lleva aparejada la retirada del permiso y puede implicar responsabilidad penal.",
  },
  // --- PRIORIDAD DE PASO ---
  {
    id: 14,
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
  },
  {
    id: 15,
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
  },
  {
    id: 16,
    category: "Prioridad de paso",
    question: "¿Qué vehículos tienen siempre preferencia de paso en emergencias?",
    options: [
      "Solo ambulancias",
      "Policía, bomberos y ambulancias en servicio de urgencias",
      "Todos los vehículos oficiales",
      "Los vehículos con señal acústica",
    ],
    correct: 1,
    explanation:
      "Los vehículos de emergencias (policía, bomberos, ambulancias) en servicio urgente con señales acústicas y/o luminosas tienen prioridad de paso.",
  },
  // --- DISTANCIAS DE SEGURIDAD ---
  {
    id: 17,
    category: "Distancias de seguridad",
    question: "¿Qué establece la norma sobre la distancia de seguridad entre vehículos?",
    options: [
      "Mínimo 50 metros siempre",
      "La necesaria para detenerse en caso de frenada brusca del de delante",
      "La misma que la longitud del vehículo",
      "Mínimo 2 segundos de separación",
    ],
    correct: 1,
    explanation:
      "La distancia de seguridad debe ser suficiente para poder detenerse en caso de frenada brusca del vehículo que va delante, sin colisionar con él.",
  },
  {
    id: 18,
    category: "Distancias de seguridad",
    question: "En autopistas, ¿cuándo es obligatorio mantener una distancia mínima de 50 metros?",
    options: [
      "Siempre que se circule a más de 100 km/h",
      "Para vehículos de más de 3.500 kg o que arrastren remolque",
      "Solo para camiones y autobuses",
      "Solo de noche o con lluvia",
    ],
    correct: 1,
    explanation:
      "Los vehículos de más de 3.500 kg o que arrastren un remolque deben mantener en autopistas y autovías una distancia mínima de 50 metros.",
  },
  // --- ADELANTAMIENTOS ---
  {
    id: 19,
    category: "Adelantamientos",
    question: "¿Está permitido adelantar por la derecha en España?",
    options: [
      "Sí, siempre",
      "Solo en autopistas de varios carriles",
      "No está permitido salvo excepciones muy concretas",
      "Solo si el vehículo de delante va a girar a la izquierda",
    ],
    correct: 2,
    explanation:
      "En España, el adelantamiento por la derecha está prohibido salvo en casos muy específicos como cuando el vehículo de delante va a girar a la izquierda o en vías con varios carriles en el mismo sentido.",
  },
  {
    id: 20,
    category: "Adelantamientos",
    question: "¿Cuándo está prohibido adelantar?",
    options: [
      "Solo en curvas sin visibilidad",
      "En curvas, cambios de rasante, intersecciones y pasos a nivel",
      "Solo en carreteras de un carril por sentido",
      "Únicamente de noche",
    ],
    correct: 1,
    explanation:
      "Está prohibido adelantar en curvas y cambios de rasante con visibilidad reducida, intersecciones, pasos a nivel, pasos para peatones y otros lugares peligrosos.",
  },
  // --- ALUMBRADO ---
  {
    id: 21,
    category: "Alumbrado",
    question: "¿Cuándo es obligatorio el uso de las luces de cruce (cortas)?",
    options: [
      "Solo de noche en carretera",
      "Siempre que se conduzca, de día y de noche",
      "En túneles, de noche y cuando la visibilidad sea reducida",
      "Solo en autopistas de noche",
    ],
    correct: 2,
    explanation:
      "Las luces de cruce son obligatorias en túneles, de noche, en condiciones de visibilidad reducida y cuando la iluminación ambiental sea insuficiente.",
  },
  {
    id: 22,
    category: "Alumbrado",
    question: "¿En qué situación se deben usar las luces de carretera (largas)?",
    options: [
      "Siempre en autopistas",
      "En vías interurbanas sin iluminación suficiente, sin cruzarse con otros vehículos",
      "Solo en niebla densa",
      "En ciudad cuando no haya farolas",
    ],
    correct: 1,
    explanation:
      "Las luces de carretera se usan en vías interurbanas con visibilidad reducida cuando no haya vehículos en sentido contrario ni próximos por delante.",
  },
  {
    id: 23,
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
      "Las luces de niebla traseras solo deben usarse cuando la visibilidad sea inferior a 50 metros para no deslumbrar a otros conductores.",
  },
  // --- DOCUMENTACIÓN ---
  {
    id: 24,
    category: "Documentación",
    question: "¿Qué documentos debe llevar obligatoriamente el conductor?",
    options: [
      "Solo el permiso de conducción",
      "Permiso de conducción, permiso de circulación y justificante del seguro",
      "DNI y permiso de conducción",
      "Permiso de circulación y ITV",
    ],
    correct: 1,
    explanation:
      "El conductor debe llevar: permiso de conducción, permiso de circulación del vehículo y el justificante del seguro obligatorio.",
  },
  {
    id: 25,
    category: "Documentación",
    question: "¿Con qué frecuencia deben pasar la ITV los turismos de más de 10 años?",
    options: ["Cada 3 años", "Cada 2 años", "Cada año", "Cada 6 meses"],
    correct: 2,
    explanation:
      "Los turismos de más de 10 años deben pasar la ITV anualmente (cada año).",
  },
  // --- SEGURIDAD VIAL ---
  {
    id: 26,
    category: "Seguridad vial",
    question: "¿Cuándo es obligatorio el uso del cinturón de seguridad?",
    options: [
      "Solo en autopistas y autovías",
      "Siempre, en todos los asientos y en todo tipo de vía",
      "Solo en los asientos delanteros",
      "Solo en carretera, no en ciudad",
    ],
    correct: 1,
    explanation:
      "El cinturón de seguridad es obligatorio en todos los asientos, tanto en vías urbanas como interurbanas.",
  },
  {
    id: 27,
    category: "Seguridad vial",
    question: "¿Hasta qué edad y/o estatura deben ir los niños en silla homologada?",
    options: [
      "Hasta los 10 años o 1,40 m de altura",
      "Hasta los 12 años o 1,35 m de altura",
      "Hasta los 8 años o 1,20 m de altura",
      "Hasta los 6 años solamente",
    ],
    correct: 1,
    explanation:
      "Los menores de 12 años o que midan menos de 1,35 m deben ir en un sistema de retención infantil homologado adaptado a su talla y peso.",
  },
  {
    id: 28,
    category: "Seguridad vial",
    question: "¿Dónde deben ir los niños en el vehículo cuando van en silla de bebé orientada hacia atrás?",
    options: [
      "Pueden ir en el asiento delantero si el airbag está desactivado",
      "Siempre en los asientos traseros",
      "Preferiblemente en la parte trasera, o en el delantero solo si se desactiva el airbag frontal",
      "No importa el asiento, solo que la silla esté bien anclada",
    ],
    correct: 2,
    explanation:
      "Los sistemas de retención infantil orientados hacia atrás solo pueden instalarse en el asiento delantero si se desactiva el airbag frontal.",
  },
  // --- USO DEL TELÉFONO ---
  {
    id: 29,
    category: "Distracciones",
    question: "¿Está permitido usar el teléfono móvil con manos libres al conducir?",
    options: [
      "Sí, siempre que no se sostenga el teléfono",
      "No, está prohibido totalmente",
      "Sí, pero solo en autopistas",
      "Solo si el vehículo está parado en un semáforo",
    ],
    correct: 0,
    explanation:
      "El uso del teléfono con manos libres está permitido, aunque se recomienda evitarlo. Lo que está prohibido es sujetar el teléfono con la mano mientras se conduce.",
  },
  {
    id: 30,
    category: "Distracciones",
    question: "Usar el teléfono móvil sostenido con la mano mientras se conduce es una infracción:",
    options: ["Leve", "Grave", "Muy grave", "No es infracción"],
    correct: 1,
    explanation:
      "Usar el teléfono móvil sostenido con la mano es una infracción grave que conlleva multa y pérdida de puntos del carné.",
  },
  // --- SEMÁFOROS ---
  {
    id: 31,
    category: "Semáforos",
    question: "¿Qué significa la luz ámbar (naranja) de un semáforo?",
    options: [
      "Avanzar con precaución",
      "Prepararse para arrancar",
      "Detenerse si se puede hacer con seguridad",
      "Continuar a velocidad reducida",
    ],
    correct: 2,
    explanation:
      "La luz ámbar obliga a detenerse si se puede hacer sin peligro. Solo se puede pasar si la detención implicara un riesgo mayor.",
  },
  {
    id: 32,
    category: "Semáforos",
    question: "¿Qué indica una flecha verde en un semáforo?",
    options: [
      "Puede avanzar en cualquier dirección",
      "Solo puede avanzar en la dirección indicada por la flecha",
      "Tiene prioridad sobre el resto del tráfico",
      "Puede girar si no hay peatones",
    ],
    correct: 1,
    explanation:
      "Una flecha verde indica que solo puede circular en la dirección que señala la flecha, independientemente del resto de indicaciones del semáforo.",
  },
  // --- ESTACIONAMIENTO ---
  {
    id: 33,
    category: "Estacionamiento",
    question: "¿A qué distancia mínima de un cruce o intersección está prohibido estacionar?",
    options: ["3 metros", "5 metros", "8 metros", "10 metros"],
    correct: 1,
    explanation:
      "Está prohibido estacionar a menos de 5 metros de un cruce o intersección.",
  },
  {
    id: 34,
    category: "Estacionamiento",
    question: "¿Está permitido estacionar en doble fila aunque sea brevemente?",
    options: [
      "Sí, si el conductor permanece dentro",
      "Sí, por un máximo de 5 minutos",
      "No, está prohibido salvo excepciones muy específicas",
      "Sí, si se ponen las luces de emergencia",
    ],
    correct: 2,
    explanation:
      "El estacionamiento en doble fila está prohibido. Las luces de emergencia no lo justifican, aunque en parada momentánea puede tolerarse en circunstancias muy concretas.",
  },
  // --- AUTOPISTAS ---
  {
    id: 35,
    category: "Autopistas",
    question: "¿Está permitido hacer marcha atrás en autopistas?",
    options: [
      "Sí, si nadie viene por detrás",
      "Solo en caso de emergencia y a muy baja velocidad",
      "No, está totalmente prohibido",
      "Solo en el arcén",
    ],
    correct: 2,
    explanation:
      "En autopistas y autovías está totalmente prohibido circular en sentido contrario, hacer cambios de sentido y dar marcha atrás.",
  },
  {
    id: 36,
    category: "Autopistas",
    question: "En caso de avería en autopista, ¿dónde debe situarse el conductor?",
    options: [
      "Dentro del vehículo con el cinturón puesto",
      "Fuera del vehículo, detrás del guardabarrera metálico o en zona segura",
      "Junto al vehículo en el arcén",
      "Delante del vehículo para señalizar",
    ],
    correct: 1,
    explanation:
      "En caso de avería en autopista, el conductor debe situarse fuera de la calzada, al otro lado del guardarraíl o en lugar seguro, y usar el chaleco reflectante.",
  },
  // --- SEÑALES VERTICALES ---
  {
    id: 37,
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
  },
  {
    id: 38,
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
  },
  // --- MARCAS VIALES ---
  {
    id: 39,
    category: "Marcas viales",
    question: "¿Qué indica una línea continua en el centro de la calzada?",
    options: [
      "Se puede cruzar con precaución",
      "Prohibido cruzarla o circular sobre ella",
      "Solo para bicicletas",
      "Separación de sentidos en zona escolar",
    ],
    correct: 1,
    explanation:
      "Una línea continua en el centro de la calzada prohíbe cruzarla o circular sobre ella para realizar adelantamientos.",
  },
  {
    id: 40,
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
  },
  // --- PRIMEROS AUXILIOS ---
  {
    id: 41,
    category: "Primeros auxilios",
    question: "En caso de accidente, ¿cuál es la primera acción que se debe realizar?",
    options: [
      "Mover a los heridos para ponerlos en lugar seguro",
      "Proteger, avisar y socorrer (PAS)",
      "Llamar directamente a los familiares",
      "Hacer fotos del accidente para el seguro",
    ],
    correct: 1,
    explanation:
      "El protocolo básico de actuación en accidentes es PAS: Proteger la zona, Avisar a los servicios de emergencia y Socorrer a los heridos.",
  },
  {
    id: 42,
    category: "Primeros auxilios",
    question: "¿Cuándo NO se debe mover a un herido en un accidente de tráfico?",
    options: [
      "Nunca, siempre se debe mover",
      "Cuando haya riesgo de incendio o explosión",
      "Salvo que exista peligro inminente para su vida (fuego, explosión)",
      "Solo si el herido lo pide",
    ],
    correct: 2,
    explanation:
      "No se debe mover a un herido, salvo que su vida corra peligro inminente (incendio, explosión), ya que puede haber lesiones en la columna vertebral.",
  },
  // --- CASCO ---
  {
    id: 43,
    category: "Seguridad vial",
    question: "¿Es obligatorio llevar casco en ciclomotores y motocicletas?",
    options: [
      "Solo para el conductor",
      "Solo en carretera, no en ciudad",
      "Para conductor y acompañante, siempre",
      "Solo si se circula a más de 45 km/h",
    ],
    correct: 2,
    explanation:
      "El uso del casco es obligatorio tanto para el conductor como para el acompañante en ciclomotores y motocicletas, en cualquier tipo de vía.",
  },
  // --- ANIMALES ---
  {
    id: 44,
    category: "Seguridad vial",
    question: "¿Cómo deben ir los animales domésticos en el interior de un vehículo?",
    options: [
      "Sueltos si son pequeños",
      "En el asiento trasero siempre",
      "Debidamente inmovilizados para no interferir con el conductor",
      "No pueden ir dentro del vehículo",
    ],
    correct: 2,
    explanation:
      "Los animales deben ir debidamente sujetos o separados para no interferir con el conductor ni convertirse en un peligro en caso de frenada.",
  },
  // --- FACTORES DE RIESGO ---
  {
    id: 45,
    category: "Factores de riesgo",
    question: "¿Cuál es la principal causa de accidentes de tráfico en España?",
    options: [
      "El mal estado de las carreteras",
      "Los fallos mecánicos",
      "Los factores humanos (distracciones, velocidad, alcohol)",
      "Las condiciones meteorológicas",
    ],
    correct: 2,
    explanation:
      "Los factores humanos, como las distracciones, el exceso de velocidad y el consumo de alcohol y drogas, son la principal causa de accidentes en España.",
  },
  {
    id: 46,
    category: "Factores de riesgo",
    question: "¿Cómo afecta la fatiga a la conducción?",
    options: [
      "No afecta si se conduce despacio",
      "Aumenta el tiempo de reacción y reduce la atención",
      "Solo afecta en conducción nocturna",
      "Se compensa bebiendo café",
    ],
    correct: 1,
    explanation:
      "La fatiga aumenta el tiempo de reacción, reduce la atención y la capacidad de toma de decisiones, aumentando enormemente el riesgo de accidente.",
  },
  // --- LLUVIA Y CONDICIONES ADVERSAS ---
  {
    id: 47,
    category: "Condiciones adversas",
    question: "Con lluvia intensa, ¿qué precaución adicional se debe tomar?",
    options: [
      "Circular más pegado al arcén",
      "Reducir la velocidad y aumentar la distancia de seguridad",
      "Usar las luces largas para ver mejor",
      "Activar el modo sport del vehículo",
    ],
    correct: 1,
    explanation:
      "Con lluvia, la adherencia se reduce y la distancia de frenado aumenta, por lo que se debe reducir la velocidad y aumentar la distancia de seguridad.",
  },
  {
    id: 48,
    category: "Condiciones adversas",
    question: "¿Qué es el aquaplaning?",
    options: [
      "Un tipo de señal de tráfico en zonas inundables",
      "La pérdida de adherencia por acumulación de agua entre el neumático y el asfalto",
      "La niebla que se forma en los parabrisas",
      "Un sistema de frenado de emergencia",
    ],
    correct: 1,
    explanation:
      "El aquaplaning ocurre cuando una capa de agua se interpone entre el neumático y el asfalto, provocando la pérdida total de adherencia y control del vehículo.",
  },
  // --- PUNTOS DEL CARNÉ ---
  {
    id: 49,
    category: "Puntos del carné",
    question: "¿Con cuántos puntos empieza un conductor novel (permiso por puntos)?",
    options: ["6 puntos", "8 puntos", "10 puntos", "12 puntos"],
    correct: 1,
    explanation:
      "Los conductores noveles empiezan con 8 puntos y pueden llegar a los 12 tras un periodo sin infracciones graves.",
  },
  {
    id: 50,
    category: "Puntos del carné",
    question: "¿Cuántos puntos tiene un conductor con permiso consolidado?",
    options: ["8 puntos", "10 puntos", "12 puntos", "15 puntos"],
    correct: 2,
    explanation:
      "Un conductor con el permiso consolidado (más de 3 años sin infracciones graves) dispone de 12 puntos.",
  },
  // --- ZONAS DE BAJA EMISIÓN ---
  {
    id: 51,
    category: "Normativa urbana",
    question: "¿Qué significa el distintivo ambiental 'cero emisiones'?",
    options: [
      "Vehículo eléctrico o de pila de combustible con autonomía eléctrica mínima de 40 km",
      "Vehículo diésel con filtro de partículas",
      "Vehículo híbrido sin restricciones",
      "Cualquier vehículo fabricado después de 2015",
    ],
    correct: 0,
    explanation:
      "La etiqueta 'CERO' identifica vehículos eléctricos de batería, de pila de combustible o eléctricos de autonomía extendida.",
  },
  {
    id: 52,
    category: "Normativa urbana",
    question: "¿Qué velocidad máxima se aplica en zonas de coexistencia (calles peatonales con acceso de vehículos)?",
    options: ["10 km/h", "20 km/h", "30 km/h", "50 km/h"],
    correct: 0,
    explanation:
      "En zonas de coexistencia y áreas peatonales con acceso de vehículos, la velocidad máxima es de 10 km/h.",
  },
];

export const TOTAL_QUESTIONS_EXAM = 30;
export const MAX_ERRORS_ALLOWED = 3;
