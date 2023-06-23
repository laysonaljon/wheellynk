export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST 
      }
      
      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers:headers});

      const result = await response.json();
      
      return result
}


export const calculateCarRent = (city_mpg:number, year:number) => {
  const basePricePerDay = 3000
  const milageFactor = 0.1
  const ageFactor = 0.5

  const milageRate = city_mpg * milageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentPerDay = basePricePerDay + milageRate + ageRate

  return rentPerDay.toFixed(0)
}