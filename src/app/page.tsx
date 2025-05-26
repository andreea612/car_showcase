import { CarCard, CustomFilter, Hero, ShowMore } from '../../components'; 
import Searchbar from "../../components/SearchBar";
import { fetchCars } from '../../utils';
import { HomeProps } from '../../types';
import { fuels, yearsOfProduction } from "../../constants";

export default async function Home(props: HomeProps) {
  const  searchParams = await props.searchParams;
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || "Toyota",
    year: Number(searchParams?.year) || 2022,
    fuel: searchParams?.fuel || "gas", 
    model: searchParams?.model || "",
  });

  console.log("🚗 allCars:", allCars);
  console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore our cars you might like</p>
        </div>

        <div className='home__filters'>
          <Searchbar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(Number(searchParams?.limit) || 10) / 10}
              isNext={(Number(searchParams?.limit) || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message || "Try changing your filters."}</p>
          </div>
        )}
      </div>
    </main>
  );
}
