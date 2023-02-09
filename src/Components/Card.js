import React, { useState,useEffect }  from "react";
import { Link } from "react-router-dom";


function Card() {
    var countryname='';
    var countryflag='';
    var countrypopulation='';
    var countryregion='';
    var countrycapital='';
 const [allCountry,setallCountry]=useState([])
    const urlAllCountries =   'https://restcountries.com/v2/all'
    
    // 'https://restcountries.com/v2/all';
  
        const fetchAllCountriesData = async () => {

            try {
                const res = await fetch(urlAllCountries);

                const allCountries = await res.json();
                console.log(allCountries);
                allCountries.map((item,indx)=>{
                    countryname=item.name
                    countryflag=item.flag
                    countrypopulation=item.flag
                    countryregion=item.region
                    countrycapital=item.capital
                    console.log(item.name);
                })
                var a=JSON.stringify(allCountries)
                console.log("stringfy,",a);
                var b=JSON.parse(a);
                console.log(b);
                console.log("name",b.name);
               setallCountry(allCountries)
                // 
                //setAllCountries(allCountries);

                } catch(err) {
                    alert('Problem getting countries');
            };
        };
        useEffect(() => {
       fetchAllCountriesData()
    }, []);


   
    return allCountry.map(post=>(
            // <React.Fragment key={post.name}>
      
        <div className= "country-card">
{/* {allCountry.map((image,i)=>( */}
{/* <div className="demo"> */}

    {/* <h1>{post.name}</h1> */}
    


            <div className="country-preview">
                <Link to={`/singlecountry/${post.name}`}
                      aria-label="click on the flag country to get acces to more info"
                >
                    <img src={post.flag} 
                         alt= {`${post.flag} flag`} 
                         className="image"
                    /> 
                         {/* "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" */}
                </Link>
            </div>
           

            <div className= "country-info">

                <div className="country-detail">

                <div className="country-title">
                  <h2>{post.name}</h2>
                </div>

                <p>Population: <span>{post.population.toLocaleString('en-US')}</span></p>

                <p>Region: <span>{post.region}</span></p>
                <p>Capital: <span>{post.capital}</span></p>
              </div>
            </div>
            
            {/* </React.Fragment>  */}

              {/* ));} */}
        {/* </div> */}
        </div>
       
    ));}


export default Card;