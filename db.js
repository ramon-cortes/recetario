// NOTAS: id = debe ser consecutivo y empezar en 1
// º = alt + 167
//------------------"BASE DE DATOS"------------------
export const recetasDb = [
  {
    id:           1,
    titulo:       'Pan de Plátano',
    categoria:    'postre',
    ingredientes: [
      ['2-3 plátanos', '(dependiendo del tamaño)', '-'],
      ['Mantequilla', '1/2', 'barra suavizada'],
      ['Azúcar (mejor mozcabado)', '1/2', 'taza'],
      ['Leche', '1/4', 'taza'],
      ['Vainilla', '1', 'cucharada'],
      ['Huevos', '2', '-'],
      ['Harina', '1', 'taza'],
      ['Sal', '1', 'pisca'],
      ['Bicarbonato', '1', 'pisca'],
      ['Royal', '1', 'cucharadita'],
      ['Clavo', '1', 'pisca'],
      ['Canela', '1', 'cucharadita']
    ],
    pasos:        [
      'Ingredientes secos juntos', 
      'Agregar pasitas o arándanos al gusto', 
      'Molde chaparro engrasado',
      'Hornear a 180 C unos 30 min.',
      'Untar mermelada o similar en la base de la galleta y tapar',
      'Espolvorear o sumergir la tapa en azúcar glas'
    ],
    notas:        ['Rinde unas 10-15 galletas aprox'],
    comensales:   '3-4',
    foto:         './img/pan-platano.jpg'
  },
  {
    id:           2,
    titulo:       'Galletas Sandwich',
    categoria:    'postre',
    ingredientes: [
      ['Mantequilla', 250, 'gr'],
      ['Azúcar glas', 100, 'gr'],
      ['Huevo', 1, 'pz'],
      ['Vainilla', 1, 'cucharadita'],
      ['Harina', 400, 'gr'],
      ['Sal', 1, 'pizca']
    ],
    pasos:        [
      'Mezclar mantequilla con azúcar', 
      'Añadir huevo', 
      'Añadir vainilla',
      'Añadir harina con sal y seguir mezclando (a mano) ',
      'Dejar reposar 30 minutos en el refri',
      'Formar las galletas (base y tapa) ',
      'Hornear a 180º C unos 10-15 minutos hasta que empiecen a dorar'
    ],
    notas:        ['-'],
    comensales:   '3-4',
    foto:         './img/galleta-sandwich.jpg'
  },
  {
    id:           3,
    titulo:       'otra 3',
    categoria:    'fuerte',
    ingredientes: [
      ['ingrediente 10', 200, 'gr'],
      ['ingrediente 20', 400, 'gr'],
      ['jitomate 30', 550, 'ml']
    ],
    pasos:        [
      'paso 1', 
      'paso 2', 
      'paso 3'
    ],
    notas:        ['notas'],
    comensales:   '3-4',
    foto:         './img/sin-foto.jpg'
  }
]