# BeerApp

Beer app permite a los usuarios descubrir nuevas cervezas y conocer más sobre sus características, lo que les permite disfrutar aún más de su bebida favorita.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

```
Node.js: La versión 16.17.0 o superior.
Angular CLI: La versión 15.0.5 o superior.
```

### Instalación 🔧


1. Clonar este repositorio en tu máquina local.
2. Abrir una terminal en la carpeta raíz del proyecto.
3. Ejecutar el comando npm install para instalar las dependencias.


## Ejecución ⚙️

1. Abrir una terminal en la carpeta raíz del proyecto.
2. Ejecutar el comando ng serve para compilar la aplicación y levantar un servidor local.
3. Abrir un navegador y navegar a la dirección http://localhost:4200/ para ver la aplicación en funcionamiento.

## Despliegue 📦

1. Crear una versión de producción de la aplicación usando el comando ng build --prod en la terminal.
2. Se creará una carpeta dist en la raíz de la aplicación con los archivos de producción.
3. Copiar los archivos de la carpeta dist en el servidor donde se alojará la aplicación.
4. Configurar el servidor web para servir los archivos de la carpeta dist. 

## Dependencias 🛠️

* @angular/material: Librería de componentes y estilos para Angular.
* primeflex: Librería de estilos CSS para componentes de PrimeNG.

## Sobre el proyecto 📖

La prueba técnica pedía que se hicieran dos vistas, yo para adornarlo para que no fuera tan simple añadí alguna más. <br>
 A lo largo del desarrollo de esta app me he encontrado con varios obstáculos que he tenido que superar en torno a problemas de usabilidad. Para poder solucionarlo, fui cambiado de estrategia haciendo cambios en el diseño de la aplicación, a veces esos cambios hicieron que empezara desde cero.<br>
 Un ejemplo de ello ha sido la vista de las características de la cerveza, donde en un principio utilizaba el mismo background que las demás páginas y finalmemte he tenido que quitarlo porque en la vista para móviles no hacia un buen responsive. Además, el footer a raiz de este problema decidi quitarlo. Con estos cambios, aunque el diseño de la página no es de mi agrado, puedo decir que es totalmente responsive. Prevaleció más solucionar los problemas de usuabilidad que mostrar un diseño atractivo. <br>
Uno de los errores que no he podido solucionar es la ruta de "list". En todas ls vistas funciona perfectamente el menú pero cuando estas en la ruta de "search" y accedes al menú, no te lleva al listado de cervezas, no logro descubir el porque de todo esto y el fallo lo descubrí al finalizar el proyecto.<br>
La lista de cervezas está sin finalizar, he de restructurar el componente y hacerlo "inifinite scroll" ya que lo quise hacer en horizontal y el resultado no es el esperado.<br>
Finalmente, aún teniendo todos estos quebraderos de cabeza, agradezco la oportunidad de demostrar mis habilidades y experiencia en esta prueba. 


 

 


---
⌨️ con ❤️ por [RocioBcn](https://github.com/rociobcn) 😊
