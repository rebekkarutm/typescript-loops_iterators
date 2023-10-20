// data provided by Smári
type Info = {
    count: number,
    next: string | null,
    pages: number,
    prev: string | null,
  }
  type Character = {
    created: string,
    episode: string[],
    gender: string,
    id: number,
    image: string,
    location: {
      name: string,
      url: string,
    },
    name: string,
    origin: {
      name: string,
      url: string,
    },
    species: string,
    status: string,
    type: string,
    url: string,
  }
  fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json:{info:Info, results:Character[] }) => {
  // creating a forEach loop that returns all of the information I want in one log
  json.results.forEach((character) => {
      console.log(`Name: ${character.name} ||| ` + `Origin: ${character.origin.name} ||| ` + `Species: ${character.species} ||| ` + `Number of episodes: ${character.episode.length}`)
    })
  });