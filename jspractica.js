/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */

/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */

fetch("./data/heroes.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    console.log(jsondata);
    renderCards(jsondata);
  })
  .catch((e) => {
    console.log(e);
  });

  const cardRow = document.getElementById("card-container");
  function renderCards(jsondata) {
    const template = document.getElementById("plantilla").content;

    for (let heroe of jsondata.data.results) {
      let card = template.cloneNode(true);
  
      const logo = card.querySelector(".logo");
      logo.setAttribute("src", `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`);
      logo.setAttribute("alt", heroe.name);
  
      const name = card.querySelector(".card-title");
      name.textContent = heroe.name;
  
      const description = card.querySelector(".card-text");
      description.textContent = heroe.description;
  
      cardRow.append(card);
    }
  }
  