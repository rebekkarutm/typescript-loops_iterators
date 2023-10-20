"use strict";
fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json) => {
    json.results.forEach((character) => {
        console.log(`Name: ${character.name} ||| ` + `Origin: ${character.origin.name} ||| ` + `Species: ${character.species} ||| ` + `Number of episodes: ${character.episode.length}`);
    });
});
