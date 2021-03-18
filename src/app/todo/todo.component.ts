import { Component } from '@angular/core';
import { ITodo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor() {
    
  }

  todos: ITodo[] = [
    { name: "Llenar dataTables", required: true, description: "abrir la ruta en el navegador 'table-user' y seguir TODOS ubicados en src/app/pages/tables/tables.component.ts" },
    {
      name: "Crear un formulario reactivo con los siguientes campos", required: true, description:
        `
        {
      nombre: requerido, alfanumérico máximo 40 caracteres,
      apellido: requerido , alfanumérico máximo 40 caracteres,
      edad: requerido numérico 3 caracteres,
      sexo: requerido, input radio que tenga como valor F o M,
      email: requerido, validar que tenga estructura de email, maximo 60 caracteres,
      username: máximo 30 caracteres
      trabaja: boolean,
      nombreCompania: alfanumérico máximo 18 caracteres,
      aniosCompania: numérico numero máximo 15años
    }
      , El campo trabaja únicamente se podrá editar si la edad de la persona es >17, en este sentido por defecto el valor será falso,
      los campos nombreCompania y aniosCompania unicamente seran mostrados si la persona es >17 y trabaja
       ` },
    {
      name: "Instalar librería ngx-toastr", required: true, description: `Instalar la librería, no olvidar que importar archivos de estilos necesarios para la librería.
    Los mensajes devueltos por el back error, inserción correcta, 404, etc mostrarlos a través de esta librería` },
    {
      name: "Validar formulario", required: true, description: `
        El botón de enviar tendrá que estar deshabilitado si la data está incorrecta.
        Mostrar error de cada campo únicamente si el campo es erroneo y ya a sido tocado con la leyenda "campo inválido",
        puedes usar angular Material o bootstrap para mostrar labels y estilos de error
       `
    },
    { name: "Validación extra", required: false, description: "Los campos nombreCompania y aniosCompania serán requeridos si la persona trabaja" },

    {
      name: "Insertar formulario", required: true, description: `Se insertará formulario en el endpoint indicado en el archivo de variables de entorno por método POST,
       utiliza la interfaz IUserRespond para que puedas mandar los datos de manera correcta en el body`
    },
    {
      name: "Editar formulario", required: true, description: `Se utilizará el mismo formulario de inserción para editar una persona,
     tendrás que utilizar también la interfaz IUserRespond, el id se tendrá que mandar a traves del body y como parametro en el mismo endpoint de inserción 'ENDPONINT/id' por método PUT` },
    {
      name: "Deploy app BONUS", required: false, description: `Desplegar aplicación en cualquier tipo de hosting 
        (sugerencias (firebase, vercel, heroku, surge.sh, githubPages)). ESTA TAREA ES DE MÍNIMA PRIORIDAD Y NO NECESITAS GASTAR DINERO PARA DESPLEGAR`
    }
  ]
}
