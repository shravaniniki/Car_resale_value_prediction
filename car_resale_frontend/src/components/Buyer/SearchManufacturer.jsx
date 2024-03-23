import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";


const manufacturers = [
  "Maruti Alto",
  "Hyundai Grand",
  "Hyundai i20",
  "Ford Ecosport",
  "Maruti Wagon R",
  "Hyundai i10",
  "Hyundai Venue",
  "Maruti Swift",
  "Hyundai Verna",
  "Renault Duster",
  "Mini Cooper",
  "Maruti Ciaz",
  "Mercedes-Benz C-Class",
  "Toyota Innova",
  "Maruti Baleno",
  "Maruti Swift Dzire",
  "Volkswagen Vento",
  "Hyundai Creta",
  "Honda City",
  "Mahindra Bolero",
  "Toyota Fortuner",
  "Renault KWID",
  "Honda Amaze",
  "Hyundai Santro",
  "Mahindra XUV500",
  "Mahindra KUV100",
  "Maruti Ignis",
  "Datsun RediGO",
  "Mahindra Scorpio",
  "Mahindra Marazzo",
  "Ford Aspire",
  "Ford Figo",
  "Maruti Vitara",
  "Tata Tiago",
  "Volkswagen Polo",
  "Kia Seltos",
  "Maruti Celerio",
  "Datsun GO",
  "BMW 5",
  "Honda CR-V",
  "Ford Endeavour",
  "Mahindra KUV",
  "Honda Jazz",
  "BMW 3",
  "Audi A4",
  "Tata Tigor",
  "Maruti Ertiga",
  "Tata Safari",
  "Mahindra Thar",
  "Tata Hexa",
  "Land Rover Rover",
  "Maruti Eeco",
  "Audi A6",
  "Mercedes-Benz E-Class",
  "Audi Q7",
  "BMW Z4",
  "BMW 6",
  "Jaguar XF",
  "BMW X5",
  "MG Hector",
  "Honda Civic",
  "Isuzu D-Max",
  "Porsche Cayenne",
  "BMW X1",
  "Skoda Rapid",
  "Ford Freestyle",
  "Skoda Superb",
  "Tata Nexon",
  "Mahindra XUV300",
  "Maruti Dzire VXI",
  "Volvo S90",
  "Honda WR-V",
  "Maruti XL6",
  "Renault Triber",
  "Lexus ES",
  "Jeep Wrangler",
  "Toyota Camry",
  "Hyundai Elantra",
  "Toyota Yaris",
  "Mercedes-Benz GL-Class",
  "BMW 7",
  "Maruti S-Presso",
  "Maruti Dzire LXI",
  "Hyundai Aura",
  "Volvo XC",
  "Maserati Ghibli",
  "Bentley Continental",
  "Honda CR",
  "Nissan Kicks",
  "Mercedes-Benz S-Class",
  "Hyundai Tucson",
  "Tata Harrier",
  "BMW X3",
  "Skoda Octavia",
  "Jeep Compass",
  "Mercedes-Benz CLS",
  "Datsun redi-GO",
  "Toyota Glanza",
  "Porsche Macan",
  "BMW X4",
  "Maruti Dzire ZXI",
  "Volvo XC90",
  "Jaguar F-PACE",
  "Audi A8",
  "ISUZU MUX",
  "Ferrari GTC4Lusso",
  "Mercedes-Benz GLS",
  "Nissan X-Trail",
  "Jaguar XE",
  "Volvo XC60",
  "Porsche Panamera",
  "Mahindra Alturas",
  "Tata Altroz",
  "Lexus NX",
  "Kia Carnival",
  "Mercedes-AMG C",
  "Lexus RX",
  "Rolls-Royce Ghost",
  "Maserati Quattroporte",
  "Isuzu MUX",
  "Force Gurkha"
];

const SearchManufacturer = ({ manufacturer, setManufacturer }) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <img
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>

          <Combobox.Input
            className='search-manufacturer__input'
            displayValue={(item) => item}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Volkswagen...'
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-manufacturer__option'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;