/* eslint-disable react/prop-types */
import CountryCard from "./CountryCard"
import Search from "./Search"
import Filter from "./Filter"
import { useState } from "react";
function CountrysList({ countrysData }) {

    let [displayedCountryData, setDisplayedCountryData] = useState(countrysData);

    //filter country by the value of the select
    function filterFunction(val) {
        if (val === "") {
            return setDisplayedCountryData(countrysData)
        }
        setDisplayedCountryData(countrysData.filter(
            (value) => {
                return value.region == val
            }
        ))
    }

    // search for the country function
    // this is the searching function with using debounce to improve the performance
    let timeoutId;
    function searchFunction(val) {
        if (val === "") {
            return setDisplayedCountryData(countrysData)
        }
        let upperCaseVal = val.toUpperCase();
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            setDisplayedCountryData(countrysData.filter(
                (country) => {
                    return country.name.toUpperCase().includes(upperCaseVal)
                }
            ))
        }, 300)

    }


    //rendering the list of filtered and searched country in the jsx in react country card element
    let countrysList = displayedCountryData.map((country) => (
        <CountryCard
            key={country.name}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            img={country.flags.png}
            numericCode={country.numericCode}
        />))

    return (
        <div className=" w-full flex justify-center wrap flex-col">
            <div className="flex flex-col md:items-center justify-center items-center md:flex-row md:justify-between">
                <Search searchFunction={searchFunction}></Search>
                <Filter filterFunction={filterFunction}></Filter>
            </div>
            <div className="flex flex-wrap justify-center mx-4 min-h-[75vh] " >
                {countrysList}
            </div>
        </div>

    )
}

export default CountrysList