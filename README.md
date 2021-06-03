# Ecommerce de ropa ENDAVANT

Tienda de ropa y accesorios para hombre.

![Endavant](public/img/edv-gif-react.gif)

## Dependencias Descargadas

[Firebase](https://firebase.google.com/).\
Utilizo firebase en este proyecto para poder guardar en una base de datos (Firestore) los productos que se muestran en el sitio con todas sus características.
También firebase me permite crear usuarios para poder tener un control sobre la gente que compra en el sitio.

[React-Router-Dom](https://reactrouter.com/web/guides/quick-start).\
Esta librería se encarga de generar rutas dinámicas para asi facilitar la navegabilidad por el sitio.

[React Bootstrap](https://react-bootstrap.github.io/).\
React Bootstrap nos ayuda gracias a sus componentes y sus clases ya creadas a hacer la maquetación del sitio mas rapidamente y también lograr hacerlo responsive de una manera mas sencilla

[React Icons](https://react-icons.github.io/react-icons/).\
Con React Icons importamos en nuestro proyecto cualquier ícono que esta librería nos provee.

[React Spinners](https://www.npmjs.com/package/react-spinners).\
Spinners utlizados para mostrar mediante los periodos de carga en el sitio

[React Toastify](https://www.npmjs.com/package/react-toastify).\
Mensajes para alertar al usuario (succes, info, error)

## Hooks Implementados

useState (React).\
Usado para generar estados locales al componente y tambien guardar esos estados para poder luego modificarlos.

useEffect (React).\
Usado para montar y hacer un render de los componentes solo cuando se los tiene que mostrar.

useContext (React).\
Con useContext logramos crear un contexto para poder tener dentro todos los datos, estados y funciones que querramos pasar a cualquier componente.

useParams y useHistory (React-Router-Dom).\
Con useParams se detecta el parametro que le indicamos por la URL.


## Pasos para ver el sitio desde local

1. Desde la opcion Code copiamos el link HTTPS

2. En nustra terminal elegimos un lugar para clonar la carpeta y escribimos "git clone" + link que copiamos anteriormente

```
git clone https://github.com/EricWaje/ReactJs-EricWajnrajch.git
```

3. Desde la terminal nos paramos en la carpeta raiz del proyecto e instalamos todos las dependencias que están dentro con "npm i"

```
npm i
```

4. Escribimos en la terminal "npm start" y se abrira el sitio en el navegador predeterminado.

```
npm start
```







