import Image from "next/image";
import { CustomFilter, Hero, SearchBar } from '../../components'; 
import Searchbar from "../../components/Searchbar";
import Customfilter from "../../components/Customfilter";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="mt-12 padding-x padding-y max-width"
      id="discover">
        <div className="home__text-container">
        <h1 className="text-4x1
        font-extrabold">Car Catalogue </h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters">
       <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel"/>
          <CustomFilter title="year"/>
        </div>
      </div>
      </div>
    </main>
  );
}