const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log('for', element);
}

letters.forEach((item) => console.log('forEach', item));

/*
CREAR UN ARRAY DE TAREAS CON EL ESTADO, SI ESTA COMPLETADA O NO Y RENDERIZARLO EN HTML.
 INPUT TIPO CHECKBOX PARA VER SI LA TAREA ESTA COMPLETADA O NO
 */

const tareas = [
  {
    text: 'Haz tu tarea',
    completed: true,
  },
  {
    text: 'Comer',
    completed: false,
  },
  {
    text: 'Estudiar Programacion',
    completed: true,
  },
  {
    text: 'Tarea de foreach',
    completed: false,
  },
];

const $tareas = document.getElementById('tareas');
console.log($tareas);
tareas.forEach((tarea) => {
  const li = document.createElement('li');
  li.textContent = `${tarea.text}`;
  $tareas.appendChild(li);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = tarea.completed;
  li.appendChild(checkbox);
});
