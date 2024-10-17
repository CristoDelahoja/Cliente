 // Cambiar el contenido de un elemento con ID "titulo"
 document.getElementById('titulo').innerText = '¡Hola, Mundo!';
 // Crear un nuevo párrafo
 let nuevoParrafo = document.createElement('p');
 nuevoParrafo.innerText = 'Este es un párrafo generado dinámicamente';

 // Añadir el párrafo al cuerpo del documento
 document.body.appendChild(nuevoParrafo);

 let frutas = ['Manzana', 'Banana', 'Cereza'];

 // Crear la lista desordenada
 let listaFrutas = document.createElement('ul');

 // Añadir elementos de lista dinámicamente
 frutas.forEach(fruta => {
     let item = document.createElement('li');
     item.innerText = fruta;
     listaFrutas.appendChild(item);
 });

 // Añadir la lista al cuerpo del documento
 document.body.appendChild(listaFrutas);

 // Seleccionamos un elemento con ID 'titulo'
 let titulo = document.getElementById('titulo');

 // Cambiamos su texto
 titulo.innerText = 'Nuevo título dinámico';

 // Crear lista y botón
 let listaTareas = document.createElement('ul');
 let botonAgregar = document.createElement('button');
 botonAgregar.innerText = 'Añadir Tarea';
 document.body.appendChild(listaTareas);
 document.body.appendChild(botonAgregar);

 // Añadir evento al botón
 botonAgregar.addEventListener('click', () => {
     let nuevaTarea = document.createElement('li');
     nuevaTarea.innerText = 'Nueva Tarea';
     listaTareas.appendChild(nuevaTarea);
 });

 // Crear el formulario
 let formulario = document.createElement('form');

 // Campo de texto
 let campoNombre = document.createElement('input');
 campoNombre.type = 'text';
 campoNombre.placeholder = 'Escribe tu nombre';
 formulario.appendChild(campoNombre);

 // Botón de envío
 let botonEnviar = document.createElement('button');
 botonEnviar.type = 'submit';
 botonEnviar.innerText = 'Enviar';
 formulario.appendChild(botonEnviar);

 // Añadir el formulario al documento
 document.body.appendChild(formulario);


 let listaItems = document.createElement('ul');
 document.body.appendChild(listaItems);

 let botonAgregarItem = document.createElement('button');
 botonAgregarItem.innerText = 'Añadir Item';
 document.body.appendChild(botonAgregarItem);

 botonAgregarItem.addEventListener('click', () => {
     if (listaItems.children.length < 3) {
         let item = document.createElement('li');
         item.innerText = `Item ${listaItems.children.length + 1}`;
         listaItems.appendChild(item);
     } else {
         alert('No puedes añadir más de 3 items');
     }
 });