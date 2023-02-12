const ejercicio_input = document.querySelector("#ejercicio");
const peso_input = document.querySelector("#peso");
const reps_input = document.querySelector("#reps");
const medida_input = document.querySelector("#medida");

const add_button = document.querySelector("#add");
const delete_button = document.querySelector("#delete");


const content_div = document.getElementById("content");

document.addEventListener('DOMContentLoaded', () => {
  const entrenamiento = JSON.parse(localStorage.getItem("entrenamiento"));

  if (entrenamiento === null || entrenamiento.length === 0) {
    const parrafo = document.createElement("p");
    const text_parrafo = document.createTextNode("No hay elementos para mostrar.");
    parrafo.appendChild(text_parrafo);
    content_div.appendChild(parrafo);
 } else {
    for (let i = 0; i < entrenamiento.length; i++) {
      const div_ejercicios = document.createElement("div");
      const text_ejercicios_reps = document.createTextNode(`${entrenamiento[i].ejercicio}-${entrenamiento[i].reps}`);
      const button_delete = document.createElement("button");
      const text_button_delete = document.createTextNode("Eliminar");
      button_delete.appendChild(text_button_delete);

      button_delete.onclick = () => {
        deleteExercise(i, entrenamiento);
      };

      div_ejercicios.appendChild(text_ejercicios_reps);
      div_ejercicios.appendChild(button_delete);

      content_div.appendChild(div_ejercicios);
    }
  }

  add_button.addEventListener('click', (e) => {
    e.preventDefault();
    const entrenamiento = JSON.parse(localStorage.getItem("entrenamiento")) || [];
    const ejercicio = ejercicio_input.value;
    const peso = peso_input.value;
    const reps = reps_input.value;
    const medida = medida_input.value;

    const ejercicios = {
      "ejercicio": ejercicio,
      "peso": peso,
      "reps": reps,
      "medida": medida
    };

    entrenamiento.push(ejercicios);

    localStorage.setItem('entrenamiento', JSON.stringify(entrenamiento));
    content_div.innerHTML = '';

    for (let i = 0; i < entrenamiento.length; i++) {
      const div_ejercicios = document.createElement("div");
      const text_ejercicios_reps = document.createTextNode(`${entrenamiento[i].ejercicio}-${entrenamiento[i].reps}`);
      const button_delete = document.createElement("button");
      const text_button_delete = document.createTextNode("Eliminar");
      button_delete.appendChild(text_button_delete);

      button_delete.onclick = () => {
        deleteExercise(i, entrenamiento);
      };

      div_ejercicios.appendChild(text_ejercicios_reps);
      div_ejercicios.appendChild(button_delete);

      content_div.appendChild(div_ejercicios);
    }
  });

  delete_button.addEventListener('click', () => {
    localStorage.setItem("entrenamiento", JSON.stringify([]));
    content_div.innerHTML = '';

    const parrafo = document.createElement("p");
    const text_parrafo = document.createTextNode("No hay elementos para mostrar.");
    parrafo.appendChild(text_parrafo);

    content_div.appendChild(parrafo);
  });

  function deleteExercise(i, entrenamiento) {
    entrenamiento.splice(i, 1);

    localStorage.setItem('entrenamiento', JSON.stringify(entrenamiento));
    content_div.innerHTML = '';

    if (entrenamiento.length === 0) {
      const parrafo = document.createElement("p");
      const text_parrafo = document.createTextNode("No hay elementos para mostrar.");

    parrafo.appendChild(text_parrafo);

    content_div.appendChild(parrafo);
}


 }

 function deleteExercise(i, entrenamiento) {
    entrenamiento.splice(i, 1);
  
    localStorage.setItem('entrenamiento', JSON.stringify(entrenamiento));
    content_div.innerHTML = '';
  
    if (entrenamiento.length === 0) {
      const parrafo = document.createElement("p");
      const text_parrafo = document.createTextNode("No hay elementos para mostrar.");
  
      parrafo.appendChild(text_parrafo);
  
      content_div.append(parrafo);
    }
  }
  
  function DeleteLocalStorage(i, entrenamiento) {
    entrenamiento.splice(i, 1);
  
    localStorage.setItem('entrenamiento', JSON.stringify(entrenamiento));
    content_div.innerHTML = '';
  
    for (let i = 0; i < entrenamiento.length; i++) {
      const div_ejercicios = document.createElement("div");
      const text_ejercicios_reps = document.createTextNode(`${entrenamiento[i].ejercicios}-${entrenamiento[i].reps}`);
      const button_delete = document.createElement("button");
      const text_button_delete = document.createTextNode("Eliminar");
      button_delete.appendChild(text_button_delete);
  
      button_delete.onclick = () => {
        DeleteLocalStorage(i, entrenamiento);
      }
  
      div_ejercicios.appendChild(text_ejercicios_reps);
      div_ejercicios.appendChild(button_delete);
  
      content_div.appendChild(div_ejercicios);
    }
}
