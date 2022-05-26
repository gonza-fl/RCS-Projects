const getData = async () => fetch('https://rickandmortyapi.com/api/character')
  .then(async response => await response.json());

export default getData;
