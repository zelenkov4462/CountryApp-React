import React, { useEffect, useState } from "react";
import axios from "axios";
import { ALL_COUNTRIES } from "../config";
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const countyInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };
          return (
            <Card
              onClick={() => navigate(`/country/${c.name}`)}
              key={c.name}
              {...countyInfo}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;
