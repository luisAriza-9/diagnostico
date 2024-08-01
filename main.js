// Reto 
console . log ( " La tierrra es plana")
console .log ("*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-*")
console .log ("*menu Principal de tareas*")

console .log ("*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-*-*-*-*-*")


console .log ("1. Agregar tarea")

console .log ("2. Eliminar tarea")


console .log ("3. lista de tareas")
console .log ("4. cargar tareas")

console .log ("5. salir ")


console . log ("*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-*-*-*-*-*")
 
var tarea={
  
    primicia:"El proposito soy terraplanista",
    Descripcion  : "Recuento breve de lo que falta por hacer ",
    estado:"pendiente",
    





  
        }
        class Tarea {
            constructor(descripcion, estado = 'pendiente') {
              this.descripcion = descripcion;
              this.estado = estado;
              this.subtareas = [];
            }
          }
          
          
          // Array para almacenar las tareas que se van creando
          const tareas = [];
          
          // Función para agregar una todo tipo de tarea incluyendo una tarea que dependa de otra
          function agregarTarea(descripcion) {
            const nuevaTarea = new Tarea(descripcion);
            tareas.push(nuevaTarea);
            console.log('Tarea agregada:', nuevaTarea);
          }
          
          // Función para eliminar una tarea por tipo
          function eliminarTarea(tipo) {
            tareas.splice(tipo, 1);
            console.log('Tarea eliminada');
          }
          
          // Función para listar todas las tareas que se van creando se han creado
          function listarTareas() {
            tareas.forEach((tarea, tipo) => {
              console.log(`${tipo}: ${tarea.descripcion} - ${tarea.estado}`);
            });
          }
          
          // Función asíncronia para cargar datos con promesas
          async function cargarTareas() {
            console.log('Cargando tareas asignadas');
            await new Promise(resolve => setTimeout(resolve, 3000)); 
          
            
            
            
            //como se agegarian las tareas
            agregarTarea('Tarea 1');
            agregarTarea('Tarea 2');
            console.log('Tareas cargadas');
          }