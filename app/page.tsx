import { AllCars, CarCard, Hero, SearchBar, SearchBarForm } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { CustomFilter } from "@/components";
import Image from "next/image";
import ShowMore from "@/components/ShowMore";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 8,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <div className="home__filters">
          <div className="home__filter-container mx-5">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
      <Hero />
      <div className="mt-3 padding-x padding-y max-width">
        <div className="home__text-container py-3">
          <h1 className="text-4xl font-extrabold">View Cars</h1>
          <p>View Details of cars and filter as per choice</p>
        </div>
        <div className="home__filters">
          <SearchBarForm />
          
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
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
