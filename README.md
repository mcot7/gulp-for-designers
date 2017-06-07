# Gulp for Designers

En este repositorio encontrarán dos archivos que podrán usar en cualquier proyecto de maquetación HTML/SASS.

## Para qué sirve?
Con una simple tarea de Gulp podemos compilar los archivos SASS y/o Pug que estemos usando en el proyecto. Podemos definir un destino específico donde queremos que los archivos compilados (.css y .html) se guarden, o dejar la configuración por defecto.
Usas SASS pero no usas Pug? No hay problema. Hay una tarea para compilar sólo archivos SASS si lo necesitas.

## Beneficios
- Compilación de archivos .scss
- Compilación de archivos .pug
- Watch de archivos .scss y .pug (observa si hay cambios y si detecta cambios vuelve a compilar)
- Webserver: al correr la tarea abre un servidor local en el navegador que se refresca automaticamente cuando cambiamos algun archivo de la carpeta raiz del proyecto.

## Estructura de Archivos
Esta es una estructura de archivos básica para la que fueron configuradas las tareas. Si estas usando una estructura diferente no olvides de cambiar las rutas en el archivo gulpfile.js
```
.
+-- css
|   +-- main.css
+-- html
|   +-- template.html
+-- img
|   +-- **.png
+-- js
+-- sass
|   +-- base
|   +-- components
|   +-- helper
|   +-- layout
|   +-- main.scss
+-- views
|   +-- header.pug
|   +-- template.pug
+-- gulpfile.js
+-- package.json
```

## Requerimientos
**Node JS** 
Para instalar NodeJs, dirigite a su [sitio web](https://nodejs.org/es/), descarga el instalador y ejecutalo.
Una vez instalado, abri una ventana de comandos (cmd en Windows | terminal en Mac) y ejecutá el siguiente comando:
```
node -v
```
Esto te devolverá la versión de Node instalada. De la misma manera podemos chequear que se haya instalado npm correctamente (se instala junto con NodeJs):
```
npm -v
```

**Gulp** 
Una vez instalado Node y npm, debes instalar gulp-cli para tenerlo disponible en todos tus proyectos. Abri una ventana de comandos y ejecutá el siguiente comando:
```
npm install -g gulp-cli
```

Todo listo! Ahora podes setear tu proyecto para empezar a trabajar con Gulp.

# Instalación
Primero que nada debes copiar los archivos *gulpfile.js* y *package.json* de este repositorio en la carpeta raíz de tu proyecto.

Una vez hecho esto vas a abrir una ventana de comandos desde la raíz del proyecto (shift+click derecho > Abrir ventana de comandos aquí ó click derecho > Git Bash Here | desde la terminal de Mac escribir cd y arrastrar la carpeta del proyecto para ir ahi).

Primero necesitamos instalar los plugins de Gulp que vamos a usar para compilar, observar y abrir el webserver:
```
npm install
```

Una vez hecho esto y corroborando que no haya habido errores en la instalación, podes ejecutar alguna de estas tareas:
```
gulp
```
*La tarea por default observa y compila los archivos .scss de la carpeta /sass y abre un webserver en el navegador.*
```
gulp run:pug
```
*La tarea run:pug observa y compila los archivos .scss de la carpeta /sass y también los archivos .pug de la carpeta /views y abre un webserver en el navegador.*

## Cambiando las rutas en gulpfile.js
Si queres usar otra estructura de archivos y carpetas tenes que tener en cuenta editar el archivo donde se configuran las tareas de gulp.

### Cambiar el nombre de la carpeta donde guardo mis archivos SASS
Debes editar esta línea:
```
sassPath = './sass'
```

### Cambiar el nombre de la carpeta donde se guarda mi archivo CSS compilado
Debes editar esta línea:
```
sassDest = './css'
```

### Cambiar el nombre de la carpeta donde guardo mis archivos Pug
Debes editar esta línea:
```
pugPath = './views'
```

### Cambiar el nombre de la carpeta donde se guardan mis archivos HTML compilados
Debes editar esta línea:
```
pugDest = './html'
```
Si queres que los HTML se guarden en la raíz del proyecto deja esta línea asi:
```
pugDest = '.'
```