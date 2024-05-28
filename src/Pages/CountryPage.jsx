/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
function CountryPage({ countryData }) {
    let { id } = useParams();
    let [wantedCountry, setWantedCountry] = useState([]);


    useEffect(() => {
        setWantedCountry(countryData.filter((country) => country.numericCode == id)[0]);


    }, [countryData, id])



    let languages = wantedCountry.languages?.map((e, index) => {
        return (
            <span className='ml-1' key={e.name}>{index == 0 ? "" : ","}{e.name}</span>
        )
    })
    let currencies = wantedCountry.currencies?.map((e, index) => {
        return (
            <span className='ml-1' key={e.name}>{index == 0 ? "" : ","}{e.name}</span>

        )
    })
    let bordersList = wantedCountry.borders?.map((e) => {
        let wantedCountryBorder = countryData.filter((country) => country.alpha3Code == e)

        return (
            <Link className='dark:bg-dark-mode-elements ml-2 mb-4 shadow-md px-4 py-2 font-light' key={wantedCountryBorder[0].name}
                to={`/country/${wantedCountryBorder[0].numericCode}`}>
                {wantedCountryBorder[0].name}</Link>
        )
    })


    return (
        <div className='dark:bg-dark-mode-background dark:text-dark-mode-text pt-10 min-h-[100vh] md:min-h-[89.2vh] max-h-fit'>
            <Link to="/" className='dark:bg-dark-mode-elements dark:text-dark-mode-text flex w-40 justify-center  items-center p-4 bg-white mb-10 ml-10 shadow-lg'>
                <FaArrowLeft className='mr-4' /> Back</Link>
            <div className='flex mx-10 mt-10 flex-col md:flex-row md:items-start items-center '>
                <img className='md:max-w-1/2  md:h-[55vh] shadow-sm' alt='sda' src={wantedCountry.flags?.png}></img>
                <div className=' md:ml-10 md:w-[50%]'>
                    <h1 className='my-[6%] font-bold text-3xl '>{wantedCountry.name}</h1>
                    <div className='flex flex-col  md:flex-row md:items-start items-center'>
                        <div className=' text-base flex flex-col w-full mb-8 md:mb-0'>
                            <p className='mb-3' >Native Name: <span className=' font-light'>{wantedCountry.nativeName}</span></p>
                            <p className='mb-3'>Population: <span className=' font-light'>{wantedCountry.population}</span></p>
                            <p className='mb-3'>Region: <span className=' font-light'>{wantedCountry.region}</span></p>
                            <p className='mb-3'>Sub Region: <span className=' font-light'>{wantedCountry.subregion}</span></p>
                            <p className='mb-3'>Capital: <span className=' font-light'>{wantedCountry.capital}</span></p>
                        </div>
                        <div className=' md:ml[8%] w-full'>
                            <p className='mb-3'>Top Level Domain: <span className=' font-light'>{wantedCountry.topLevelDomain}</span></p>
                            <p className='mb-3'>Currencies:<span className=' font-light'>{currencies}</span> </p>
                            <p className='mb-3 md:mb-0'>Languages: <span className=' font-light'>{languages}</span></p>
                        </div>

                    </div>
                    <div className=' md:mt-0 mt-[8%]'>
                        <div className='flex flex-wrap  items-center'>
                            <h1 className='mb-4  md:mr-4'>Borders:</h1>
                            {bordersList}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryPage