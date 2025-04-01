function toggleMode() {
  const html = document.documentElement // Acessa o elemento html

  // Verifica se a classe light já está presente no elemento html
  // Se estiver, remove a classe light
  // Se não estiver, adiciona a classe light

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else { 
  //  html.classList.add("light")
  //}
  html.classList.toggle("light") // Adiciona ou remove a classe light
}