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

export const calculateCarRent=(city_mpg:number, year:number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;

  const currentYear = new Date().getFullYear(); 
  const carAge = currentYear - year;
  const ageRate = carAge * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
} 
