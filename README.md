#Trabajo practico Nro. 3 


1)¿Qué significa que los estilos se apliquen en cascada? ¿cómo aplica la herencia de estilos?

 CSS significa cascading style sheets (hojas de estilo en cascada) y, por lo tanto, no debería extrañarnos que la cascada sea un concepto importante. Es el mecanismo que controla el resultado final cuando se aplican varias declaraciones CSS contrapuestas al mismo elemento.

Hay tres conceptos principales que controlan el orden en el que se aplican las declaraciones de CSS:

-Importancia.

-Especificidad.

-Orden en las fuentes.

La herencia en CSS es el mecanismo mediante el cual determinadas propiedades de un elemento padre se transmiten a sus hijos. De hecho, se parece mucho a la herencia genética. Si los progenitores tienen los ojos azules, los hijos seguramente también tendrán los ojos azules.Todos los elementos de un documento HTML heredan todas las propiedades heredables de su padre excepto el elemento raíz (html), que no tiene progenitor.

El hecho de que las propiedades heredadas tengan algún efecto o no depende de otros factores, como veremos más adelante cuando hablemos de la cascada. De la misma manera que una madre de ojos azules puede tener un hijo de ojos marrones si el padre tiene los ojos marrones, las propiedades heredadas en CSS pueden anularse.


2)¿Por qué es necesario utilizar un CSS de Reset?

Es importante utilizar css reset ya que brinda las siguientes ventajas:

-Elimina las diferencias entre navegadores. Con un reseteo preciso y abarcador se elimina la mayoría de las diferencias de interpretación entre los browsers, ya que tamaños, márgenes, grosores, bordes y otros formatos son igualados a un estilo único y homogéneo. Ver: cross-browser testing.

-Mayor libertad. El reseteo nos brinda una hoja en blanco sobre la que podemos construir nuestros propios estilos sin tener que luchar contra los estilos del browser, que muchas veces son difíciles de identificar (y, por lo tanto, de modificar).

-Desarrollo más lógico. Una vez agregada la hoja de reset, el proceso final consistirá en agregar nuevos estilos en lugar de sobrescribirlos.

3)¿Qué es el CSS box model?

El modelo de cajas es la base del diseño web, cada elemento se representa como una caja rectangular, con su contenido, padding (espacio interior), borde y margen construidos uno sobre otro como las capas de una cebolla. El navegador, para interpretar el diseño de una página, procesa los estilos que se aplicarán a cada caja, el tamaño de las capas de la cebolla y la ubicación de unas cajas con respecto a otras.

4)¿Cuál es el código que hay que insertar en una hoja de estilo para poder usar WebFonts?

Primero se agrega en el css la anotación @font-face y dentro de ella se especifica el nombre de la fuente, las urls necesarias, weight y style de la fuente. Luego en el tag que queramos que tenga la fuente deseada se le agrega el atributo "font-family" donde se le especifica el nombre de la fuente y también es bueno especificar otras fuentes en caso de que el navegador no soporte la que el diseñador desee.

5) ¿Qué son y para qué sirven los pseudoElementos?


los pseudo-elementos se añaden a los selectores, pero, no describen un estado especial sino que, permiten añadir estilos a una parte concreta del documento. Por ejemplo, el pseudoelemento ::first-line selecciona solo la primera línea del elemento especificado por el selector.

6) ¿Cómo se calcula la prioridad de una regla CSS? Expresarlo como una fórmula matemática?
La prioridad de una regla css se calcula de la siguiente manera:
Peso = ABC (número de 3 cifras, cada una de las cuales se calcula contando los selectores de cada tipo según se indica a continuación)
A = nº de selectores de ID (selectores que acceden al atributo “id” del elemento mediante “#”)
B = nº de selectores de CLASE (selectores que acceden al atributo “class” del elemento mediante “.”)
C = nº de selectores de HTML (selectores que acceden al tag html)
Ejemplos ordenados de más a menos peso:
#id1 .clase1 a (A=1, B=1, C=1 –> peso = 111)
div#id1 a (A=1, B=0, C=2 –> peso = 102)
.clase1 li.clase2 a (A=0, B=2, C=2 –> peso = 22)
.clase1 (A=0, B=1, C=0 –> peso = 10)
div a (A=0, B=0, C=2 –> peso = 2)



7) ¿Qué es el view port? ¿Cómo se configura? ¿qué problema soluciona?

La etiqueta viewport nos permite a los que construimos sitios web o web apps, definir el ancho, alto y escala del área usada por el navegador para mostrar contenido.

Al fijar el ancho o alto del viewport, los desarrolladores podemos usar un número fijo de pixeles (ej: 320, 480, etc) o usar dos constantes, device-width y device height respectivamente.Se considera una buena práctica configurar el viewport con algunas de estas dos constantes, en vez de un ancho o alto fijo.


8) ¿Qué son las media querys? Enumere los distintos tipos de medios y las principales características de cada uno de ellos.

Las media queries son útiles cuando deseas modificar tu página web o aplicación en función del tipo de dispositivo (como una impresora o una pantalla) o de características y parámetros específicos (como la resolución de la pantalla o el ancho del viewport del navegador).

Se utilizan para:

-Aplicar estilos condicionales con las reglas-at @media e @import de CSS.
-Indicar medios específicos en los elementos <link>, <source> y otros elementos HTML.
-Testear y monitorizar los estados de los medios usando los métodos de javascript Window.matchMedia() y MediaQueryList.addListener().


Tipos de medios:

-all

Apto para todos los dispositivos.

-print

Destinado a material impreso y visualización de documentos en una pantalla en el modo de vista previa de impresión. 

-screen

Destinado principalmente a las pantallas.

-speech

Destinado a sintetizadores de voz.

9) ¿En qué circunstancias se pueden utilizar las variables css? ¿Qué problemas pueden traer aparejadas? ¿Cuándo consideras que sería bueno utilizarlas?

Las variables CSS son entidades creadas en las hojas de estilos (definidas por el desarrollador de estilos) que contienen valores específicos que se pueden volver a utilizar en un documento. Se establecen mediante la notación de propiedades personalizadas (por ejemplo, --main-color: black;) y se accede mediante la función var() (por ejemplo, color: var (--main-color);).

Cuando se tiene que definir determinadas propiedades (por ejemplo un color) en distintas partes de un sitio web, estas variables ayudan a que solo se tenga que asignar dicha propiedad en un solo lugar, en una variable, y sea esta la que se utilice permitiendo de esta forma reducir la posibilidad de error (asegurando que todos tengas el mismo color) y facilitar el mantenimiento (cuando se quiera cambiar el color) ya que solo se debera cambiar la propiedad asignada a dicha variable para que todo lo que lo utilice cambie.

Uno de los mayores problemas del uso de variables CSS es que no todos los navegadores lo soportan.

10) CSS Grid Layout ¿Qué es? Explicar las reglas que intervienen en el armado de una grilla. ¿Qué ventajas y desventajas tiene frente a otros Layouts?

CSS Grid layout contiente funciones de diseño dirigidas a los desarrolladores de aplicaciones web. El CSS grid se puede utilizar para lograr muchos diseños diferentes. También se destaca por permitir dividir una página en áreas o regiones principales, por definir la relación en términos de tamaño, posición y capas entre partes de un control construido a partir de primitivas HTML.

Al igual que las tablas, el grid layout permite a un autor alinear elementos en columnas y filas. Sin embargo, con CSS grid son posibles muchos más diseños y de forma más sencilla que con las tablas. Por ejemplo, los elementos secundarios de un contenedor de cuadrícula podrían posicionarse para que se solapen y se superpongan, de forma similar a los elementos posicionados en CSS.

11) ¿Qué puntos en común y en que se diferencian las Material Design Guidelines de Google y las Human Interface Guidelines de Apple?

Google y Apple han desarrollado sus propios conjuntos de reglas, que indican cómo deberían ser sus aplicaciones en sus respectivos dispositivos. 
Los dispositivos de Google se basan principalmente en Material Design, mientras que Apple se adhiere a las pautas de Human Interface. Si bien ambos buscan mejorar la experiencia de los usuarios (haciendo interfaces de uso más intuitivas, aprendibles y constantes), definiendo una apariencia común para sus aplicaciones, existen ciertas diferencias entre estos.

En cuanto a la profuncidad de los elementos. Google se ha inspirado en el diseño de movimientos planos, haciendo creer a las personas que interactuan con sus componentes como si fueran hojas de papel apiladas una encima de la otra. Mientras busca una profundidad en sus aplicaciones, utilizando componentes como sus botones y mensajes de texto con fondo borroso para crear la sensación de que los elementos están flotando y existen en su propio espacio.

En cuanto a la animación de sus componentes. Google ve la animación como una forma de mejorar la experiencia del usuario y dar vida a sus componentes, utiliza una animación única para expresar el tipo de "material" con el que estás interactuando. Mientras que Apple tiene un enfoque sin sentido para la animación. Creen que la animación solo debería llevarte de A a B sin distraer al usuario del contenido real.

En cuanto a la navegación. Google define una barra de navegación universal en la parte inferior. Este es un conjunto de tres botones (físicos o digitales, según el dispositivo) que funcionan como rutas de regreso, de inicio y de vista general. Mientras que Apple se adhiere a un enfoque un poco diferente. Ni sus dispositivos ni su interfaz tienen un botón de retroceso universal. Esto significa que los diseñadores deben garantizar una navegación decente dentro de la aplicación y agregar un indicador de retroceso en la esquina superior izquierda de cada página de la aplicación. La navegación en ambas plataformas también puede diferir en términos de uso y ubicación de las pestañas. Google a menudo utiliza un menú de hamburgesa para su navegación principal. Sin embargo, Apple no tiene la misma postura, ya que considera que los elementos de navegación principales deben estar presentes en una barra de pestañas en primer plano y que la hamburguesa se debe usar solo como un lugar para almacenar funciones que no son tareas diarias realizadas por el usuario.

En cuanto a la tipografia. Cada sistema tiene sus propias fuentes predeterminadas que se recomiendan para los diseñadores. La cual ayudan a crear una sensación de coherencia y apariencia nativa en toda la plataforma. Google sugiere Roboto como su fuente de sistema por defecto. Mientras que Apple prefiere la fuente San Francisco.



