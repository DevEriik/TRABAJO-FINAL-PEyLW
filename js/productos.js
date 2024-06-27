const productos = [
  {
    id: 1,
    nombre: "Asrock B365 Placa Madre",
    imagen: "images/Compo/AsRock B365 Placa Madre.png",
    precio: 143800,
    descripcion: "Soporta procesadores Intel® Core™ de 9ª y 8ª Generación (Socket 1151) Soporta memoria DDR4 2666 MHz 2 PCIe 3.0 x16, 2 PCIe 3.0 x1, 1 M.2 Key E para WiFi AMD Quad CrossFireX™ Opciones de salida gráficos: HDMI, Display Port Audio 7.1 canales HD (Códec de audio Realtek ALC1200), Compatibilidad Conexión DTS 6 SATA3, 1 Ultra M.2 (PCIe Gen3 x4), 1 Ultra M.2 (PCIe Gen3 x4 & SATA3) 2 USB 3.1 Gen2 (Trasero Tipo A+C) 6 USB 3.1 Gen1 (2 Frontales, 4 Traseros) Intel® Gigabit LAN ASRock Polychrome SYNC",
  },

  {
    id: 2,
    nombre: "Gabinete MSI Mag Forge M100a",
    imagen: "images/Compo/Gabinete.png",
    precio: 62690,
    descripcion: "Diseño gamer con panel lateral de acrílico 4 ventiladores RGB incluidos para personalización Estructura Mid Tower: optimiza espacio en escritorio No incluye fuente: elige la ideal para tus necesidades Dimensiones: 388 mm alto, 200 mm ancho, 423 mm largo Iluminacion Led: Rainbow, auto-RGB"
  },

  {
    id: 3,
    nombre: "GEFORCE RTX 3090 VENTUS 3X",
    imagen: "images/Compo/Placa-videoR75700G.png",
    precio: 896364,
    descripcion: "GeForce RTX™ 3090 es una Gran GPU Feroz(BFGPU) con desempeño de clase TITAN. Está impulsada por la arquitectura Ampere, la segunda generación de RTX de NVIDIA, que redobla la apuesta en trazado de rayos y desempeño de IA con los RT Cores y Tensor Cores mejorados, más los nuevos multiprocesadores de streaming. Además, cuenta con una impresionante memoria G6X de 24 GB, todo para ofrecer la máxima experiencia de juego."
  },

  {
    id: 4,
    nombre: "Teclado Mecanico REDRAGON FIZZ PRO 60%",
    imagen: "images/Compo/Teclado-Mecanico-REDRAGON-FIZZ-PRO.png",
    precio: 80000,
    descripcion: "Conexión sin demoras: gracias a su conectividad wireless, el K616-RGB FIZZ PRO te asegurará una respuesta ultrarrápida de 1 ms en modo inalámbrico de 2,4 GHz, 0 latencia y 0 input lag. ¡Lo mismo que en el modo cableado! Además, permite conexión a través de Bluetooth 5.0 con una velocidad de transmisión de hasta 2 Mbps, manteniendo siempre al mínimo las pérdidas (por esta vía es posible conectar hasta 3 dispositivos, ¡increíble!)."
  },

  {
    id: 5,
    nombre: "Teclado Gamer VSG Mecanico Quasar",
    imagen: "images/Compo/Teclado-Gamer-VSG-mecanico.png",
    precio: 60000,
    descripcion: "Idioma: Español Latinoamérica <br> Layout: QWERTY Color de la retroiluminación: <br> RGB Ergonómico y apto para diversos usos. <br>  Resiste a salpicaduras. <br> Función antighosting incorporada. <br> Tipo de teclado: mecánico. <br> Tecla cilíndrica. <br> Con conector USB 2.0. <br> Medidas: 370mm de ancho, 150mm de alto y 33mm de profundidad."
  },

  {
    id: 6,
    nombre: "Mouse Pad MPG500",
    imagen: "images/Compo/MPG500-MOUSEPAD.png",
    precio: 27500,
    descripcion: "12 modos y colores de iluminación y ¡combínalo con tu setup Su base está fabricada en goma natural mantendrá tu tapete justo donde tú lo coloques. Su superficie de deslizamiento está fabricada en Micro-Fibra Multi Spandex que garantiza un deslizamiento suave a lo largo del tiempo Material: spandex, microfibra, goma Voltaje: 5v cc 1.5a Puerto: micro USB"
  },

  {
    id: 7,
    nombre: "Mouse Pad HyperX FURY S PRO",
    imagen: "images/Compo/MousePad-HyperX-FURY-S-PRO.png",
    precio: 500,
    descripcion: "Tamaño del mouse pad: L. <br> Color: negro y rojo. <br> Es antideslizante. <br> Tiene 450mm de largo y su ancho es de 400mm. <br> Su grosor es de 4mm."
  },

  {
    id: 8,
    nombre: "Mouse Redragon Storm Pro",
    imagen: "images/Compo/Mouse-Redragon-Storm-Pro.png",
    precio: 53000,
    descripcion: "Es inalámbrico. <br> Puede conectarse a cualquier dispositivo a través de Bluetooth. <br> Utiliza cable. <br> Incluye batería recargable. <br> Posee rueda de desplazamiento. <br> Con luces para mejorar la experiencia de uso. <br> Con sensor óptico. <br> Resolución de 16000dpi.",
  },

  {
    id: 9,
    nombre: "Mouse Gamer Xtrike",
    imagen: "images/Compo/Mouse-Gamer-Xtrike.png",
    precio: 8999,
    descripcion: "Mouse Gaming – Modelo GM 206 <br> Luz de Fondo: ÓPTICA <br> Diseño de alto perfil con soporte completo para la palma y el pulgar. <br>Rueda de desplazamiento retro iluminada con agarre mejorado Luz de fondo de 7 colores."
  },

  {
    id: 10,
    nombre: "Mouse Gamer Redragon M607",
    imagen: "images/Compo/Mouse-Gamer-Redragon M607.png",
    precio: 25000,
    descripcion: "Utiliza cable. <br> Posee rueda de desplazamiento. <br> Con luces para mejorar la experiencia de uso. <br> Con sensor óptico. <br> Resolución de 7200dpi."
  },

  {
    id: 11,
    nombre: "Mouse Gamer LOGITECH G502 K/DA EDITION",
    imagen: "images/Compo/Mouse-Gamer-LOGITECH-G502 KDA-EDITION.png",
    precio: 100000,
    descripcion: "Utiliza cable. <br> Posee rueda de desplazamiento. <br> Con luces para mejorar la experiencia de uso. <br> Con sensor óptico.<br> Resolución de 25600dpi."
  },

  {
    id: 12,
    nombre: "Monitor Asus 27' 165Hz",
    imagen: "images/Compo/Monitor-Asus-27-165Hz.png",
    precio: 491360,
    descripcion: "Voltaje: 100V/240V <br> Tamaño de la pantalla: 27 <br> Pantalla Full HD de 27 para imágenes nítidas y realistas <br> Frecuencia de actualización de 165 Hz para movimientos fluidos <br> Tecnologías GSync y FreeSync Premium para evitar interrupciones <br> Parlantes incorporados para una experiencia de sonido completa <br> Base giratoria y reclinable para ajustar el ángulo de visión <br> Compatible con Windows 7, 8.1 y 10 para mayor versatilidad"
  },

  {
    id: 13,
    nombre: "Cooler Fan GAMEMAX",
    imagen: "images/Compo/FAN-GAMEMAX.png",
    precio: 9500,
    descripcion: "- Marca : Gamemax <br> - Modelo : GMX-12-CBB Argb Rainbow <br>  - UPC / EAN : 6931858791120 <br> - P/N : 201830703598X <br> - Tensión nominal : Ventilador 12V <br> - Tensión nominal : RGB LED 5V <br>  - Corriente nominal: ventilador 0,25 A <br> - Corriente nominal: LED RGB 0,5 A (máx.) <br> - Velocidad de rotación : 1200RPM <br> - Volumen de aire : 58.8CFM <br> - Presión estática : 2,18 mm <br> - Nivel de ruido : 28,8 DBA <br> - Conector : 4 y 3 pines + ARGB 3 pines", 
  },

  {
    id: 14,
    nombre: "Cooler CoolerMaster Hyper 212",
    imagen: "images/Compo/Cooler-cpu-CoolerMaster-Hyper212.png",
    precio: 46850,
    descripcion: "Product Number: RR-2V2L-18PD-R1 <br> Exterior Color: Silver, Black <br>  CPU Socket: LGA1700*, LGA1200, LGA1151, LGA1150, LGA1155, LGA1156, AM4 <br> Heat Sink Dimensions (L x W x H): 120 x 80.5 x 157 mm / 4.7 x 3.2 x 6.2 inch <br> Heat Sink Material: Copper (Heat Pipes), Aluminum, 4 Heat Pipes <br> Fan Dimensions (L x W x H): 120 x 120 x 25 mm / 4.7 x 4.7 x 1 inch <br> Fan Quantity: 1 PCS <br> Fan Speed: 650-1800 RPM ± 5%"
  },

  {
    id: 15,
    nombre: "Auriculares Logitech G Series G733",
    imagen: "images/Compo/Auriculares-Logitech-GSeries-G733.png",
    precio: 240000,
    descripcion: "Audífonos inalámbricos con micrófono para juegos diseñados para desempeño y confort. Equipados con todo el sonido envolvente, los filtros de voz y la iluminación avanzada que necesitas para lucir, sonar y jugar con más estilo que nunca."
  },
];
