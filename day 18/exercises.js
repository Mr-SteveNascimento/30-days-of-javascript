const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercícios do dia 18 do curso 30 dias de javascript
console.log('Exercícios nível 1\n\n');

// =========> 1 <=========
console.log('Questão 1 \n\n ');

const fetchDataCountries = async () => {
    try {
      const response = await fetch(countriesAPI)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.log(err)
    }
}

fetchDataCountries()


// Exercícios do dia 18 do curso 30 dias de javascript
console.log('\n\nExercícios nível 2\n\n');

// =========> 1 <=========
console.log('Questão 1 \n\n ');

const fetchDataCats = async () => {
    try {
      const response = await fetch(catsAPI)
      const cats = await response.json()
      catNames = cats.map((value, idx) => {
          return(value.name)
      })
      console.log(catNames);
    } catch (err) {
      console.log(err)
    }
}

fetchDataCats()