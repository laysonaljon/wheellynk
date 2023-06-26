import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
    const headers = {
        'X-RapidAPI-Key': process.env.API_KEY || '',
        'X-RapidAPI-Host': process.env.API_HOST || ''
      }
      
      const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {headers:headers});

      const result = await response.json();
      
      return result
}


export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};



export const calculateCarRent = (city_mpg:number, year:number) => {
  const basePricePerDay = 3000
  const milageFactor = 0.1
  const ageFactor = 0.5

  const milageRate = city_mpg * milageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentPerDay = basePricePerDay + milageRate + ageRate

  return rentPerDay.toFixed(0)
}

export const generateCarImage = (car : CarProps, angle?:string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')

  const {make, year, model} = car

  url.searchParams.append('customer','hrjavascript-mastery')
  url.searchParams.append("make", make)
  url.searchParams.append("modelFamily", model.split(' ')[0])
  url.searchParams.append("modelYear", `${year}`)
  url.searchParams.append("angle", `${angle}`)
  url.searchParams.append("zoomType", "fullscreen")

  return `${url}`
}