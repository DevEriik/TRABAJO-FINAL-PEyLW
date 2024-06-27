document.addEventListener("DOMContentLoaded", () => {
    const localidadesPorProvincias = {
      "Buenos Aires": [
          "La Plata", "Mar del Plata", "Bahía Blanca", "Tandil", "Junín", 
          "San Nicolás de los Arroyos", "Pergamino", "Mercedes", "Azul", "Olavarría",
          "Necochea", "Tres Arroyos", "Chascomús", "Dolores", "Luján", "San Pedro", 
          "Adrogué", "San Isidro", "Lomas de Zamora", "Quilmes", "Morón",
          "Tigre", "San Fernando", "Campana", "Zárate", "San Antonio de Areco",
          "Capilla del Señor", "Chivilcoy", "Alberti", "Suipacha", "Saladillo",
          "Villa Gesell", "Pinamar", "Miramar", "Tornquist", "Sierra de la Ventana",
          "Punta Alta", "Coronel Suárez", "Villa Mercedes", "Balcarce", "Las Flores"
      ],
      "Catamarca": [
          "San Fernando del Valle de Catamarca", "Andalgalá", "Belén", "Santa María", "Tinogasta",
          "Fiambalá", "Aconquija", "El Rodeo", "La Puerta", "La Merced",
          "Pomán", "San José", "Recreo", "Saujil", "Los Altos"
      ],
      "Chaco": [
          "Resistencia", "Barranqueras", "Fontana", "Presidencia Roque Sáenz Peña", "Castelli",
          "Villa Ángela", "General José de San Martín", "Charata", "Quitilipi", "Las Breñas",
          "Machagai", "General Pinedo", "Juan José Castelli", "La Leonesa", "Colonia Benítez"
      ],
      "Chubut": [
          "Rawson", "Comodoro Rivadavia", "Puerto Madryn", "Trelew", "Esquel",
          "Gaiman", "Dolavon", "Rawson", "Puerto Pirámides", "Sarmiento",
          "Rada Tilly", "Gobernador Costa", "Puerto Deseado", "El Hoyo", "Lago Puelo"
      ],
      "Córdoba": [
          "Córdoba", "Villa Carlos Paz", "Río Cuarto", "Alta Gracia", "Villa María",
          "San Francisco", "Jesús María", "Bell Ville", "Río Tercero", "Cosquín",
          "La Falda", "Villa General Belgrano", "Capilla del Monte", "Villa Allende",
          "Mina Clavero", "Dean Funes", "La Cumbre", "Huerta Grande", "Villa Dolores",
          "Marcos Juárez", "Arroyito", "Villa del Rosario", "Colonia Caroya", "Laboulaye"
      ],
      "Corrientes": [
          "Corrientes", "Goya", "Mercedes", "Curuzú Cuatiá", "Esquina",
          "Ituzaingó", "Paso de los Libres", "Santo Tomé", "Empedrado", "Saladas",
          "San Cosme", "Santa Lucía", "Bella Vista", "San Roque", "La Cruz"
      ],
      "Entre Ríos": [
          "Paraná", "Concordia", "Gualeguaychú", "Gualeguay", "Victoria",
          "Villaguay", "La Paz", "Colón", "Federación", "Chajarí",
          "Diamante", "Nogoyá", "San José de Feliciano", "Rosario del Tala", "Basavilbaso"
      ],
      "Formosa": [
          "Formosa", "Clorinda", "Pirané", "Formosa", "Las Lomitas",
          "El Colorado", "Ibarreta", "Ingeniero Juárez", "Villa Escolar", "Comandante Fontana",
          "Laguna Blanca", "Herradura", "Tatané", "Colonia Pastoril", "Buena Vista"
      ],
      "Jujuy": [
          "San Salvador de Jujuy", "Palpalá", "San Pedro", "La Quiaca", "Libertador General San Martín",
          "Humahuaca", "Purmamarca", "Tilcara", "Maimará", "Abra Pampa",
          "El Carmen", "San Antonio", "Yuto", "La Esperanza", "Perico"
      ],
      "La Pampa": [
          "Santa Rosa", "General Pico", "Toay", "Realicó", "General Acha",
          "Macachín", "Jacinto Arauz", "Eduardo Castex", "Victorica", "Quemú Quemú",
          "Lonquimay", "Guatraché", "General San Martín", "Miguel Riglos", "Intendente Alvear"
      ],
      "La Rioja": [
          "La Rioja", "Chilecito", "Aimogasta", "Chamical", "Villa Unión",
          "Chepes", "Anillaco", "Famatina", "Vinchina", "Mazán",
          "Aminga", "Sanagasta", "Tama", "Nonogasta", "Malanzán"
      ],
      "Mendoza": [
          "Mendoza", "San Rafael", "Godoy Cruz", "Guaymallén", "Luján de Cuyo",
          "Maipú", "Malargüe", "San Martín", "Junín", "Tunuyán",
          "San Carlos", "La Paz", "General Alvear", "Las Heras", "Rivadavia",
          "San Martín", "Santa Rosa", "La Consulta", "Gral. Lavalle", "Uspallata"
      ],
      "Misiones": [
          "Posadas", "Puerto Iguazú", "Eldorado", "Oberá", "San Vicente",
          "Jardín América", "Montecarlo", "Leandro N. Alem", "Apostoles", "Puerto Rico",
          "Puerto Esperanza", "Wanda", "San Javier", "Colonia Wanda", "Colonia Aurora"
      ],
      "Neuquén": [
          "Neuquén", "Cutral Có", "Plottier", "Zapala", "San Martín de los Andes",
          "Centenario", "Junín de los Andes", "Villa La Angostura", "Chos Malal", "Rincón de los Sauces",
          "Aluminé", "Villa Pehuenia", "Loncopué", "Buta Ranquil", "El Cholar"
      ],
      "Río Negro": [
          "Viedma", "San Carlos de Bariloche", "General Roca", "Cipolletti", "Allen",
          "Cinco Saltos", "Villa Regina", "Choele Choel", "Viedma", "Catriel",
          "Sierra Grande", "San Antonio Oeste", "Dina Huapi", "Ingeniero Jacobacci", "Chimpay"
      ],
      "Salta": [
          "Salta", "San Ramón de la Nueva Orán", "Tartagal", "San Salvador de Jujuy", "Metán",
          "Cafayate", "Rosario de la Frontera", "Orán", "San Antonio de los Cobres", "Joaquín V. González",
          "Embarcación", "Aguaray", "General Güemes", "Campo Quijano", "Cerrillos"
      ],
      "San Juan": [
          "San Juan", "Rawson", "Caucete", "Chimbas", "Santa Lucía", "Pocito", "San José de Jáchal",
          "Albardón", "Zonda", "Rivadavia", "Capital", "San Martín",
          "9 de Julio", "Angaco", "Calingasta", "Iglesia", "Ullum"
      ],
      "San Luis": [
          "San Luis", "Villa Mercedes", "Merlo", "San Francisco del Monte de Oro", "La Punta",
          "Santa Rosa de Conlara", "Juana Koslay", "Naschel", "Villa de Merlo", "Justo Daract",
          "Candelaria", "La Toma", "Buena Esperanza", "La Carolina", "El Trapiche"
      ],
      "Santa Cruz": [
          "Río Gallegos", "Caleta Olivia", "Río Turbio", "Puerto Deseado", "Pico Truncado",
          "El Calafate", "Perito Moreno", "Las Heras", "28 de Noviembre", "Gobernador Gregores",
          "Puerto San Julián", "Puerto Santa Cruz", "Comandante Luis Piedra Buena", "Los Antiguos", "Julia Dufour"
      ],
      "Santa Fe": [
          "Rosario", "Santa Fe", "Rafaela", "Venado Tuerto", "San Lorenzo",
          "Santo Tomé", "Funes", "Villa Gobernador Gálvez", "Capitán Bermúdez", "Granadero Baigorria",
          "Casilda", "Esperanza", "San Justo", "Reconquista", "Avellaneda",
          "Villa Constitución", "Gálvez", "Roldán", "Firmat", "Cañada de Gómez"
      ],
      "Santiago del Estero": [
          "Santiago del Estero", "La Banda", "Termas de Río Hondo", "Florencia", "Añatuya",
          "Frías", "Clodomira", "Suncho Corral", "Forres", "Bandera",
          "Sacháyoj", "Quimilí", "Los Telares", "Colonia Dora", "Villa Ojo de Agua"
      ],
      "Tierra del Fuego": [
          "Ushuaia", "Río Grande", "Tolhuin", "Puerto Williams", "San Sebastián",
          "Porvenir", "Cameron", "Lapataia", "Estancia Harberton", "Cerro Sombrero",
          "Puerto Almanza", "San Pablo", "Onaisín", "Puerto Navarino", "Puerto Toro"
      ],
      "Tucumán": [
          "San Miguel de Tucumán", "Yerba Buena", "Tafí Viejo", "Concepción", "Banda del Río Salí",
          "Río Grande", "Agua Dulce", "Monteros", "Lules", "Aguilares",
          "Famaillá", "Simoca", "Tafí del Valle", "Alberdi", "Burruyacú",
          "Villa Mariano Moreno", "Villa Quinteros", "Villa Carmela", "Ranchillos", "Los Ralos"
      ]
    };
  
    document.getElementById('provincia').addEventListener('change', function() {
        const provincia = this.value
        const localidadSelect = document.getElementById('localidad')
  
        localidadSelect.innerHTML = '<option value="">...</option>';
        
        if (provincia && localidadesPorProvincias[provincia]) {
          const localidades = localidadesPorProvincias[provincia];
  
          localidades.forEach(function(localidad){
              const option = document.createElement('option')
              option.value = localidad
              option.text = localidad
              localidadSelect.add(option)
          })
        }
    })
  });
  