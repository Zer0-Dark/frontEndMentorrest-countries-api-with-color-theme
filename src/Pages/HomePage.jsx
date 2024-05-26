/* eslint-disable react/prop-types */


import CountrysList from "../components/CountrysList"
function HomePage({ countryData }) {


    return (
        <div className=" min-h-[89.2vh] pt-4 bg-light-mode-background font-main dark:bg-dark-mode-background">
            <CountrysList countrysData={countryData}></CountrysList>
        </div>
    )
}

export default HomePage