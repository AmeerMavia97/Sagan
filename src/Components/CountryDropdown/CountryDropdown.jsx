import { useState, useRef, useEffect } from "react";
import { countries } from "../../utils/countries";

export default function CountrySelect({ register, setValue, name }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const ref = useRef(null);

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (country) => {
    setSelected(country);
    setValue(name, country, { shouldValidate: true });
    setOpen(false);
    setSearch("");
  };

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full z-100">
      {/* Hidden input for RHF */}
      <input type="hidden" {...register(name)} />

      {/* Select Box */}
      <div
        onClick={() => setOpen((p) => !p)}
        className="w-full px-4.5 py-3 text-[12px] sm:px-5 sm:py-3 sm:text-[14px] font-Inter font-[500] 2xl:px-6 2xl:py-4 text-left placeholder-gray-400 transition-all bg-white sm:border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent 2xl:text-[16px]"
      >
        <span className={selected ? "text-gray-900" : "text-gray-400"}>
          {selected || "Select country"}
        </span>
        <span className="text-gray-400">▾</span>
      </div>

      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border bg-white shadow-lg">
          {/* Search box INSIDE dropdown */}
          <div className="border-b p-2">
            <input
              autoFocus
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md border-none px-3 py-2 text-sm font-Inter focus:outline-none "
            />
          </div>

          {/* Countries */}
          <ul className="max-h-60 py-2 z-50 relative overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <li
                  key={country}
                  onClick={() => handleSelect(country)}
                  className="cursor-pointer px-4 py-2 hover:bg-blue-500 text-start font-Inter hover:text-white"
                >
                  {country}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-500">
                No country found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
