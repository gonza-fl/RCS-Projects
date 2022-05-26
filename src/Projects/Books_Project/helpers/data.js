const getData = () => fetch('https://fakerapi.it/api/v1/books?_quantity=10').then(data => data.json())

export default getData;
