const filtrar = x => x.name === "Evaluacion";

(async () => { // creamos una funcion de flecha auto ejecutable en la cual usamos 'async' para que sea una funcion asincrona 
  let response = await fetch('user.json'); // creamos una variable de tipo 'let' (response) le asignamos la funcion 'fetch' y a esta le damos la url del archivo json (user.json) para que traiga la informacion que este tiene esta solicitus crea una promesa la cual se tiene que resolver para eso usamos el 'await' para que el hilo del codigo quede bloqueado hasta que la promesa se resuelva ya ya resulta continue el hilo del codigo
  // una vez traidos los datos del archivo json estos se encuentran en precisamente datos json estos datos no se pueden utilizar en javascript por lo que necesitamos combertir los datos json en datos primitivos (string, number, boolean) datos que si pueden manejarce en javascript
  let user = await response.json(); // para eso creamos una nueva variable let (user) y le asignamos la variable anterior (response) junto con la funcion '.json' para que los datos json se combiertan en datos primitivos esto crea una promesa la cual tiene que ser resuelta y para eso usaremos 'await' para que el hilo se bloquee y espere a que termine de resolverse la promesa para poder continuar
  // dentro de la variable 'response' estan los datos json que traimos del archivo 'user.json' usando el 'fetch' estos datos no los puede leer javascript por lo que los combertimos a datos primitivos, los datos primitivos se guardaran en la variable user por lo que se le asignan los datos json dentro de la variable 'response' y se combierten a datos primitivos con la funcion '.json' 
  let respuestaGithub = await fetch(`https://api.github.com/users/${user.name}/repos`); // aqui estamos haciendo el mismo proceso de antes creamos una variable con fetch traemos informacion la cual javascript no puede usar por lo que los guardamos en otra variable como datos primitivos para que los podamos usar , la diferencia esta en el sitio de donde procede la informacion 
  let usuarioGithub = await respuestaGithub.json();

  usuarioGithub.forEach(element => { // a la variable 'usuarioGithub' le asignamos la funcion '.forEach' lo que hace esta funcion es recorrer un arreglo y ejecutar una funcion con cada elemento del arreglo 
    if (element.name === "Evaluacion") { // la funcion que se ejecuta es un condicional que revisa si la propiedad 'name' del elemento es exactamente igual al valor string 'Evaluacion'
      console.log(element) // si la condicion se cumple imprimira el elemento en la consola si no se cumple pasara a comprobar el siguiente elemento 
    }
  });

  // let data = usuarioGithub.filter(filtrar)
  // console.log(data)
  // console.log(usuarioGithub)
})();