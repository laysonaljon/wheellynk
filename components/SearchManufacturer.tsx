"use client"
import { manufacturers } from '@/constants'
import { SearchManufacturerProps } from '@/types'
import { useState,Fragment } from 'react'
import { Combobox,Transition } from '@headlessui/react'
import Image from "next/image";

const SearchManufacturer = ({manufacturer,setManufacturer} : SearchManufacturerProps) => {

const [query, setQuery] = useState('')

const filteredManufacturers =
    query === ''
        ? manufacturers
        : manufacturers.filter((brand) => {
            return brand.toLowerCase().includes(query.toLowerCase())
        })   

  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image
                        src="/car-logo.svg"
                        alt="Car Logo"
                        width={20}
                        height={20}
                        className="ml-4"
                    />
                </Combobox.Button>

                <Combobox.Input 
                    className="search-manufacturer__input" 
                    placeholder="Enter Car Brand" 
                    displayValue={(manufacturer:string) => manufacturer}
                    onChange={(event) => setQuery(event.target.value)}

                />
            
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options>
                        {filteredManufacturers.length === 0 && query !== '' ? (
                            <Combobox.Option 
                                value={query}
                                className="search-manufacturer__option"
                            >
                                No "{query}" Found!!
                            </Combobox.Option>
                        ) : (
                            filteredManufacturers.map((brand) => (
                                <Combobox.Option 
                                    key={brand} 
                                    value={brand}
                                    className={({active}) => `relative search-manufacturer__option ${active?'bg-primary-blue' : 'text-gray-900'}`}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                            className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                            }`}
                                            >
                                            {brand}
                                            </span>
                                            {selected ? (
                                            <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active ? 'text-white' : 'text-teal-600'
                                                }`}
                                            >
                                            </span>
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
    
  )
}

export default SearchManufacturer