"use client";

import Button from "@/app/components/common/button";
import ListBox from "@/app/components/common/headlessui/Listbox";
import { useState } from "react";

const dropdown = [
  "Toutes les spécialités",
  "Medecin généraliste",
  "Chirurgien-dentiste",
  "Dermatologue",
  "Radiologue",
  "cancérologue",
  "Cardiologue",
  "Autre",
];

const Search = () => {
  const [filters, setFilters] = useState(dropdown[0]);

  const selectHandler = (value) => {
    setFilters(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-1 items-end">
      <div>
        <p className="text-gray-500 text-sm">Spécialité</p>
        <ListBox
          value={filters}
          items={dropdown}
          onChangeHandler={selectHandler}
        />
      </div>
      <div>
        <p className="text-gray-500 text-sm">Nom</p>
        <input
          type="text"
          className="bg-white rounded-3xl lg:rounded-none p-5 w-full outline-0 mt-2"
          placeholder="rechercher un médecin"
        />
      </div>
      <div>
        <p className="text-gray-500 text-sm">Localisation</p>
        <input
          type="text"
          className="bg-white rounded-3xl lg:rounded-none p-5 w-full outline-0 mt-2"
          placeholder="75019 Paris"
        />
      </div>
      <Button
        name="Recherchez"
        className="rounded-3xl lg:rounded-r-3xl lg:rounded-l-none w-full lg:w-40"
      />
    </div>
  );
};

export default Search;
