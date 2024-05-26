/* eslint-disable react/prop-types */

import { FaSearch } from "react-icons/fa"

function Search({ searchFunction }) {
    return (
        <>
            <div className="flex bg-white items-center focus:outline-none min-w-[80%] max-w-[80vh] md:min-w-fit md:w-[400px] h-10  mt-4 mb-8 md:ml-10  p-8 dark:bg-dark-mode-elements dark:text-dark-mode-text">
                <FaSearch></FaSearch>
                <input className=" dark:bg-dark-mode-elements focus:outline-none ml-4 py-4 " placeholder="Search for a country....." type="text"
                    onChange={
                        (e) => searchFunction(e.target.value)
                    }>

                </input>
            </div>
        </>
    )
}

export default Search