import { CarProps } from "../types";

export default async function handler(req: { query: { manufacturer: any; year: any; model: any; limit: any; fuel: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) {
  const { manufacturer, year, model, limit, fuel } = req.query;

  const headers = {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`;

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
}


export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; 
  const mileageFactor = 0.1; 
  const ageFactor = 0.05; 

 
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;


  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "img");

  const { make, model, year } = car;

  url.searchParams.append('customer', "img");
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
 
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 


export const updateSearchParams = (type: string, value: string) => {
 
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {

  const newSearchParams = new URLSearchParams(window.location.search);


  newSearchParams.delete(type.toLocaleLowerCase());


  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

import { FilterProps } from "../types";

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`,
    { headers }
  );

  const result = await response.json();
  return result;
};
