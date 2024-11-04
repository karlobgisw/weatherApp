import { countries } from "../data/CountriesList";
import { ChangeEvent, FormEvent, useState } from "react";
import type { Search } from "../types";
import { Toaster, toast } from "sonner";

type FormProps = {
  fetchWeather: (Search: Search) => Promise<void>;
};

export default function Form({ fetchWeather }: FormProps) {
  const [search, setSearch] = useState<Search>({
    city: "",
    country: "",
  });

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      toast.error("All fields must be completed.", { duration: 1500 });
      return;
    }
    fetchWeather(search);
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="p-2 gap-4 grid grid-cols-[0.4fr_0.4fr_0.2fr] max-[600px]:flex max-[600px]:flex-col"
      >
        <input
          type="text"
          id="city"
          placeholder="Search for cities"
          name="city"
          value={search.city}
          onChange={handleOnChange}
          className=" text-[#ffffff90] appearance-none border-t-none outline-none bg-[#202b3b] p-3 rounded-xl h-full placeholder:text-[#ffffff90]"
        />
        <select
          name="country"
          id="country"
          value={search.country}
          onChange={handleOnChange}
          className=" bg-[#202b3b] p-3 rounded-xl outline-none text-[#ffffff90]"
        >
          <option value="" className="font-thin">
            --Country--
          </option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <button
          className="flex items-center justify-center bg-[#202b3b] rounded-xl max-[600px]:p-3"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#fff"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </form>
      <Toaster richColors></Toaster>
    </>
  );
}
