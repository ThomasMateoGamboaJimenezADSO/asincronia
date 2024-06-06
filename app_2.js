(() => {
  let response = fetch('user.json');
  let user = response.json();
  // let respuestaGithub = fetch(`https://api.github.com/users/${user.name}/repos`);
  // let usuarioGithub = respuestaGithub.json();
})();