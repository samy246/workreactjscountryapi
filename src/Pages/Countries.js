import React from "react";
import Card from "../Components/Card";
import { IoSearchSharp } from "react-icons/io5";

const Countries=()=>{
    return(
        <main className="main-content">

        <form className= "form"
              onSubmit={(e) => e.preventDefault()}
        >
            <div className="search-icon-position">

            {/* <i className="fa fa-search icon"></i> */}
            <i className="fa fa-search icon"></i>
            {/* <i className="fa-regular fa-magnifying-glass"></i> */}
            {/* <i class="fa-sharp fa-solid fa-magnifying-glass"></i> */}
           {/* < IoSearchSharp className="fa fa-search icon" id="searchicon"/> */}
 {/* {`fa fa-search icon${darkMode ? "fa darkmode" : ""}`} */}
              <label htmlFor="search" className="hide">Search for a country</label>
                <input type="search"
                       id="search"
                       name=  "search-form"
                       className="search-field"
                    //    className= {darkMode ? "search-field-dark" : "search-field"}
                       placeholder="Search for a Country..." 
                    //    value={query}
                    //    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            
            <select className= "select"
            // {darkMode ? "select-dark" : "select"}
                    aria-label="filter by region"
                    // onChange={e => setFilterData(e.target.value)}
            >

                <option value="All">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
       </form>
            <section className="cards-container">
            <Card/>
            </section>


        </main>
       
    )
}

export default Countries