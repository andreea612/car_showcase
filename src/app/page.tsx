import { CarCard, Hero } from '../../components'; 
import Searchbar from "../../components/SearchBar";
import Customfilter from "../../components/CustomFilter";
import { fetchCars } from '../../utils'; 

export default async function Home() {
  const allCars = await fetchCars();
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;
  console.log(allCars)
  return (
    <main>
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <Searchbar />

          <div className="home__filter-container">
            <Customfilter />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
              <CarCard car={car}/>))}
            </div>
           </section>
        ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
        )}
      </div>
    </main>
  );
}
