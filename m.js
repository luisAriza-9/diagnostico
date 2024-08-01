


// Array para almacenar los cursos
const cursos = [];


function agregarCurso() {
  // Obtener los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const descripcion = document.getElementById('descripcion').value;
  const contenido = document.getElementById('contenido').value;

  // Crear un nuevo objeto curso
  const nuevoCurso = { nombre, descripcion, contenido };

  // Agregar el curso al array
  cursos.push(nuevoCurso);

  // Actualizar la lista de cursos en el HTML
  mostrarCursos();
}

// Función para mostrar los cursos en una lista
function mostrarCursos() {
  // Obtener la lista de cursos en el HTML
  const listaCursos = document.getElementById('listaCursos');
  listaCursos.innerHTML = '';

  // Iterar sobre los cursos y crear elementos de lista
  cursos.forEach(curso => {
    const li = document.createElement('li');
    li.textContent = curso.nombre;
    listaCursos.appendChild(li);
  });
}

// Función para buscar cursos por nombre (ejemplo)
function buscarCursos(terminoBusqueda) {
  // Filtrar los cursos que coincidan con el término de búsqueda
  const cursosFiltrados = cursos.filter(curso => curso.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()));

  // Mostrar los cursos filtrados
  mostrarCursos(cursosFiltrados);
}

// ... otras funciones para editar, eliminar, etc.

// Ejemplo de llamada para agregar un curso inicial
agregarCurso('Curso de JavaScript', 'Aprende JavaScript', 'Contenido del curso');
