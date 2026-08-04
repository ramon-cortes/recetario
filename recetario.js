//AQUÍ: Agregar más recetas (sólo hay una)
import { recetasDb } from './db.js';

// -------- Crea objetos ------------------------------
let input = document.getElementById('input-buscar');
let contenido = document.getElementById('contenido');
let categoria = document.getElementById('categoria');
// ----------------------------------------------------

// -------- Agrega eventos ----------------------------
document.getElementById('buscar').addEventListener('click', (e) => buscar(e));
document.getElementById('categoria').addEventListener('change', (e) => buscarCategoria(e));
document.getElementById('inicio').addEventListener('click', (e) => listarRecetas());
// ----------------------------------------------------

// -------- Crear lista de recetas---------------------
function listarRecetas(encontrados) {
  // encontrados es un arreglo con los ids de las recetas deseadas
  let divListaWrapper = document.createElement('div');
  divListaWrapper.classList.add('lista-wrapper');
  contenido.innerHTML = '';
  contenido.appendChild(divListaWrapper);

  // Crea lista de divs para: id, titulo, foto & hr (linea espaciadora)
  let divListado = '';
  let estasRecetas = [];
  // si no hay arreglo encontrados es que se deben listar todos
  if (!encontrados) {
    for (const receta of recetasDb) {
      divListado = divListado + `
        <div class="clickeable" id="i${receta.id}">${receta.id}</div>
        <div class="clickeable" id="t${receta.id}">${receta.titulo}</div>
        <div><img id="f${receta.id}" class="foto-thumb clickeable" alt="" src="${receta.foto}"></div>
        <div class="hr-delgada">&nbsp;</div>`;
      estasRecetas.push(receta.id);
    }
    // Quita la categoría
    categoria.value = 'todos';
  } else {
    // sólo listar las recetas encontradas (encontrados)
    for (const i of encontrados) {
      divListado = divListado + `
        <div class="clickeable" id="i${recetasDb[i-1].id}">${recetasDb[i-1].id}</div>
        <div class="clickeable" id="t${recetasDb[i-1].id}">${recetasDb[i-1].titulo}</div>
        <div><img id="f${recetasDb[i-1].id}" class="foto-thumb clickeable" alt="" src="${recetasDb[i-1].foto}"></div>
        <div class="hr-delgada">&nbsp;</div>`;
      estasRecetas.push(recetasDb[i-1].id);
    }
  }
  
  divListaWrapper.innerHTML = divListado;

  // Agrega evento click a cada receta del listado
  for (const id of estasRecetas) {
    //console.log(`i${id}`);
    document.getElementById(`i${id}`).addEventListener('click', (e) => muestraReceta(e));
    document.getElementById(`t${id}`).addEventListener('click', (e) => muestraReceta(e));
    document.getElementById(`f${id}`).addEventListener('click', (e) => muestraReceta(e));
  }
}
// ----------------------------------------------------

// -------- Muestra Receta-----------------------------
function muestraReceta(e) {
  let id = Number(e.target.id.slice(1,e.target.id.length));
  //console.log(`muestra la receta con id ${id}`);
  
  // Crea div para la receta y limpia contenido
  let divRecetaWrapper = document.createElement('div');
  divRecetaWrapper.classList.add('receta-wrapper');
  contenido.innerHTML = '';
  
  let orderedLists = creaOls(id);
  
  divRecetaWrapper.innerHTML = `
    <div class="titulo">${recetasDb[id-1].titulo}</div>
    <div class="comensales">
      <img class="foto-thumb" src="${recetasDb[id-1].foto}" alt="">
      <span>Comensales: ${recetasDb[id-1].comensales}</span>
    </div>
    <div class="titulo-secundario ingredientes">Ingredientes</div>
    <div class="ingredientes">
      ${orderedLists[0]}
    </div>    
    <div class="titulo-secundario pasos">Pasos</div>
    <div class="pasos">
      ${orderedLists[1]}
    </div>
    <div class="titulo-secundario notas">Notas</div>
    <div class="notas">${recetasDb[id-1].notas}</div>`;
  contenido.appendChild(divRecetaWrapper);
}
// ----------------------------------------------------

// -------- Crea ordered list--------------------------
function creaOls(id) {
  let ols = [];

  //Crea Ordered list ingredientes
  let li = '';
  for (const ingrediente of recetasDb[id-1].ingredientes) {
    li += `<li>${ingrediente.toString().replace(/,/g, ', ')}</li>`;    
  }    
  ols.push(`<ol>${li}</ol>`);

  //Crea Ordered list pasos
  li = '';
  for (const paso of recetasDb[id-1].pasos) {
    li += `<li>${paso.toString()}</li>`;    
  }    
  ols.push(`<ol>${li}</ol>`);  
  return ols;
}
// ----------------------------------------------------

// -------- Buscar categoría---------------------------
function buscarCategoria(e) {
  let encontrados = [];
  // Busca en cada receta
  for (const receta of recetasDb) {
    if (receta.categoria == categoria.value) {
      encontrados.push(receta.id);
    }    
  }

  // Si encontró algo lo lista
  if (encontrados.length !== 0) {
    listarRecetas(encontrados);
  }
}
// ----------------------------------------------------

// -------- Buscar ------------------------------------
function buscar(e) {
  let encontrados = [];
  // Busca en cada receta
  for (const receta of recetasDb) {
    let palabrasBuscar = input.value.toLowerCase().split(' ');
    // Busca cada palabra del usuario
    for (const palabra of palabrasBuscar) {
      let reg = new RegExp(String.raw`${palabra}`);
      // Busca en el título
      if (reg.test(receta.titulo.toLowerCase()) && palabra) {
        encontrados.push(receta.id);
      }
      // Busca en cada ingrediente (sólo el nombre del ingrediente)
      for (const ingrediente of receta.ingredientes) {
        let palabraEnIngrediente = ingrediente[0].toLowerCase().split(' ');
        // Busca en cada palabra de cada ingrediente
        for (const estaPalabraEnIngrediente of palabraEnIngrediente) {
          if (estaPalabraEnIngrediente == palabra && palabra) {
            encontrados.push(receta.id);
          }
        }
      }
      // NO busca en cada paso
    }    
  }
  // Remueve las recetas que econtró 2 veces
  // Puede pasar si una palabra aparece en el título, pero también en el ingrediente
  encontrados = encontrados.filter((value, i, encontrados) => encontrados.indexOf(value) === i);

  //console.log(encontrados);  
  if (encontrados.length !== 0) {
    listarRecetas(encontrados);
  }

  // Quita la categoría
  categoria.value = 'todos';
}
// ----------------------------------------------------

listarRecetas();

// -------- xxxxxxxxxxxx ------------------------------
// ----------------------------------------------------