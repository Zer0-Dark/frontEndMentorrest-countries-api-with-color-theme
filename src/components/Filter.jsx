/* eslint-disable react/prop-types */


function Filter({ filterFunction }) {

    return (
        <>
            <label htmlFor="region"></label>
            <select  className="mt-4 mb-8  md:mr-10 p-4 dark:bg-dark-mode-elements dark:text-dark-mode-text" name="region"
                onChange={(e) => { filterFunction(e.target.value) }}
            >
                <option value="">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select >
        </>
    )
}

export default Filter