import StationCard from "@/components/StationCard";
import React from "react";

async function Home() {
  const currentCountry = "countrycode=EG";
  console.log(process.env.STATIONS_URL + currentCountry);
  const stations = await fetch(process.env.STATIONS_URL + currentCountry).then(
    (res) => res.json()
  );
  return (
    <div className="w-full min-h-[100vh] p-5  md:p-7 lg:p-10 flex justify-center items-center flex-wrap gap-5 md:gap-8">
      {stations.map((station) => (
        <StationCard key={station.stationuuid} name={station.name} imgSrc={station.favicon} audioSrc={station.url} />
      ))}
    </div>
  );
}

export default Home;
