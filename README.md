# Work sample para Asistente de Soporte de Infraestructura IT.

<h3>Script creado con Javascript/NodeJS</3>
<h4>Correr en terminal con "node index.js"</h4>

El mismo esta desarrollado en el archivo index.js y será útil parar bajar y subir archivos de cualquier tipo con S3 de Amazon.

Explicación sobre como usar el srcipt:

1) Se instaló y requirió el modulo AWS-SDK para poder trabajar con la nube.

2) Se requirió el modulo "fs" (FileSystem) para poder manejar la lectura y escritura de los archivos

3) Creo una instancia del objeto s3 que nos va a permitir interactuar con S3, al cual le vamos a pasar un objeto como parametro que tendrá las propiedades accessKeyId y secretAccessKey correspondientes al usuario con permisos anteriormente creado en IAM. (No modificar estos valores)


<h2> PARA DESCARGAR ARCHIVOS DE S3 A MI MAQUINA: </h2>

Se creó el objeto parametrosGetObject con las propiedades Bucket y Key en el que irán los siguientes valores:
<ul>
  <li>-En Bucket: Nombre del bucket creado en S3, contenedor del archivo a descargar.</li>
<li>-En Key: Path/ruta del archivo que quiero obtener. En este caso al no estar almacenado en ninguna carpeta se escribe directamente el nombre de archivo con su extensión.</li>
</ul>

Luego se llamara al metodo GetObject para descargar un objeto de uno de nuestros buckets de S3, al que se le pasará como parametro el objeto anteriormente creado y un callback que dependiendo de si existe un error o no va a tener 2 caminos distintos.

En caso de ser un flujo sin errores, recibiremos el archivo solicitado y lo subiremos con writeFile, en el cual la informacion que necesitamos viene en la propiedad Body del objeto data en lenguaje binario.

WriteFile recibirá los siguientes parametros: 

1) 1er parametro: Nombre que le voy a dar al archivo.</li>
1) 2do parametro: La data que voy a guardar, registrada en la propiedad body del objeto data recibido. (data.Body)</li>
1) 3er parametro: String del tipo de informnacion que quiero escribir. En este caso "binary".</li>
1) 4to parametro: Callback que recibe unicamente el parametro de error, en el que lo arrojara en caso de error y sino imprimirá en terminal que la imagen ya fue guardada.</li>

Finalmente, si no existe ningun error, tendremos guardado en nuestra computadora el archivo elegido.

<h2> PARA SUBIR ARCHIVOS DE MI MAQUINA A S3: </h2>

Lo primero que haremos es leer el archivo a subir con readFile, al cual le pasaremos como parametro el nombre del archivo a subir y callback que dependiendo de si existe un error o no va a tener 2 caminos distintos.

En caso de flujo feliz, creo el objeto parametrosPutObject con las propiedades Bucket, Key y Body con los siguientes valores:
<ul>
<li>-En Bucket: El nombre del bucket al que quiero subir el archivo.</li>
<li>-En Key: El nombre con el que quiero que se suba el archivo.</li>
<li>-En Body: Irá el objeto data, que es quien tendrá el contenido del archivo a subir.</li>
</ul>

Luego se llamara al metodo GetObject para descargar un objeto de uno de nuestros buckets de S3, al que se le pasará como parametro el objeto anteriormente creado y un callback. En caso de no existir ningun error tendremos el archivo subido a nuestro bucket de S3.

PD: A modo de prueba descargue el logo de MeLi desde S3 a mi máquina, asi como tambien subí de mi máquina a S3 el archivo "mensaje.txt".
