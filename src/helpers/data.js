const getData = async () => {
  const data = await fetch('https://fakerapi.it/api/v1/books?_quantity=10')
  const newData = await data.json()
  return newData
}

export default getData;
