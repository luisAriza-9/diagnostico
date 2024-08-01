

const listaCursos = document.querySelector('#course-list ul');
const detallesCurso = document.querySelector('#course-details');
const formularioCurso = document.querySelector('#course-form');
const botonAgregarCurso = document.querySelector('#add-course');
const botonEditarCurso = document.querySelector('#edit-course');
const botonEliminarCurso = document.querySelector('#delete-course');
const botonCancelarFormulario = document.querySelector('#cancel-form');
const inputNombreCurso = document.querySelector('#course-name');
const inputDescripcionCurso = document.querySelector('#course-description');

let cursoActual = null;
const cursos = [];

function mostrarCursos() {
  listaCursos.innerHTML = '';
  cursos.forEach(curso => {
    const li = document.createElement('li');
    li.textContent = curso.nombre;
    li.addEventListener('click', () => mostrarDetallesCurso(curso));
    listaCursos.appendChild(li);
  });
}

function mostrarDetallesCurso(curso) {
  cursoActual = curso;
  detallesCurso.classList.remove('hidden');
  formularioCurso.classList.add('hidden');
  document.getElementById('course-name').textContent = curso.nombre;
  document.getElementById('course-description').textContent = curso.descripcion;
}

function mostrarFormularioCurso(editando = false) {
  detallesCurso.classList.add('hidden');
  formularioCurso.classList.remove('hidden');
  if (editando) {
    inputNombreCurso.value = cursoActual.nombre;
    inputDescripcionCurso.value = cursoActual.descripcion;
  } else {
    inputNombreCurso.value = '';
    inputDescripcionCurso.value = '';
  }
}

function agregarCurso() {
  const nombre = inputNombreCurso.value;
  const descripcion = inputDescripcionCurso.value;
  const curso = { nombre, descripcion };
  cursos.push(curso);
  mostrarCursos();
  mostrarDetallesCurso(curso);
  mostrarFormularioCurso(false);
}

function editarCurso() {
  cursoActual.nombre = inputNombreCurso.value;
  cursoActual.descripcion = inputDescripcionCurso.value;
  mostrarDetallesCurso(cursoActual);
  mostrarFormularioCurso(false);
}

function eliminarCurso() {
  const indice = cursos.indexOf(cursoActual);
  if (indice !== -1) {
    cursos.splice(indice, 1);
  }
  mostrarCursos();
  detallesCurso.classList.add('hidden');
  formularioCurso.classList.add('hidden');
  cursoActual = null;
}

botonAgregarCurso.addEventListener('click', () => mostrarFormularioCurso(false));
botonEditarCurso.addEventListener('click', () => mostrarFormularioCurso(true));
botonEliminarCurso.addEventListener('click', eliminarCurso);
botonCancelarFormulario.addEventListener('click', () => mostrarDetallesCurso(cursoActual));
formularioCurso.addEventListener('submit', (event) => {
  event.preventDefault();
  if (cursoActual) {
    editarCurso();
  } else {
    agregarCurso();
  }
});

// Ejemplo de cursos iniciales 
cursos.push({ nombre: 'Curso de JavaScript', descripcion: 'Aprende JavaScript desde cero' });
cursos.push({ nombre: 'Curso de HTML', descripcion: 'Domina el lenguaje de estructuración de páginas web' });

cursos.push({ nombre: 'Curso de Java', descripcion: 'Domina el lenguaje de estructuración de páginas web' });
cursos.push({ nombre: 'Curso de C++', descripcion: 'Domina el lenguaje de estructuración de páginas web' });