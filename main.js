"use strict";
fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json) => {
    // creating a forEach loop that returns all of the information I want in one log
    json.results.forEach((character) => {
        console.log(`Name: ${character.name} ||| ` + `Origin: ${character.origin.name} ||| ` + `Species: ${character.species} ||| ` + `Number of episodes: ${character.episode.length}`);
    });
});
