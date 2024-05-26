/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function CountryCard({ img, name, population, region, capital, numericCode }) {
    return (
        <Link to={`/country/${numericCode}`} className="cursor-pointe">
            <div className="w-64 h-80 m-4 bg-white font-main shadow-md dark:bg-dark-mode-elements dark:text-dark-mode-text ">
                <img className=" h-1/2 w-64 mb-3" src={img} alt={name}></img>
                <div className="ml-6">
                    <h1 className=" font-bold mb-3 h-9 ">{name}</h1>
                    <p>Population:<span className=" font-light">{population}</span></p>
                    <p>Region:<span className=" font-light">{region}</span></p>
                    <p>Capital:<span className=" font-light">{capital}</span></p>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard