export async function fetchCars() {
    const headers = {
      'x-rapidapi-key': '777ef56f64mshb93881b91e22d5fp1763fajsnf972cb468000',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }


const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
 { headers : headers,
});

const result = await response.json();

return result;
}