import React, {useEffect, useState} from "react";
import Footer from "../Footer";
import Header from "../Header";
import AllProduct from "./AllProduct";
import Banner from "./banner";
import HotDeals from "./HotDeals";
import axios from "axios";

function Home() {
  const [init_data, set_initData] = useState([]);
  const [hotDeals, setHotDeals] = React.useState([]);
  const [genralProducts, setGeneralProducts] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [country, setCountry] = React.useState({id: 0});
  const [countries, setCountries] = React.useState([]);

  const filterByCategory = (value) => {
    setFilteredData(init_data.filter((item)=>item.cattegory_name === value));
    value === "Home" && setFilteredData([]);
  }
  const filterByTitle = (value) => {
    setFilteredData(init_data.filter((item)=>item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  }
  
  useEffect(() => {
   if(country.id !== 0 && country !== "undefined"){
    axios.get(`http://localhost:3001/products/${country.id}`).then(({data}) => {
      set_initData(data);
      setHotDeals(data.filter((item)=>item.cattegory_name === "*Hot Deals*"));
      setGeneralProducts(data.filter((item)=>item.cattegory_name !== "*Hot Deals*"));
    }).catch((err) => {
      console.log(err);
    })
   }
   else {
     
   }
  } , [country])

  useEffect(() => {
    const country = localStorage.getItem("country");
    if(!country && country !== "undefined"){
      axios.get("http://localhost:3001/countries").then((res)=>{
         setCountries(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    }
    else if (country !== "undefined") {
      setCountry(JSON.parse(country));
    }
  } , [])



  return (
    <div className="relative">
      {country.id === 0 && <div className="flex justify-center pt-10 w-full h-screen absolute z-50 bg-white/5 backdrop-blur-sm">
                <div className="p-10 h-fit flex flex-col bg-gray-800 rounded-sm shadow-xl">
                <label className="text-white">Select your country</label>
                    <select 
                    value={country.id}
                    onChange={(e)=> {
                      console.log(e.target.value)
                      const cont = countries.find(c => Number(c.id) === Number(e.target.value))
                      localStorage.setItem("country", JSON.stringify(cont));
                      setCountry(cont);
                    }}
                    >
                    <option className="bg-gray-800 text-white">select</option>
                        {countries.map((item) => (
                            <option className="bg-gray-800 text-white" key={item.id} value={item.id}>
                                {item.country}
                            </option>
                        ))}
                    </select>
          </div>
      </div>}

      {/* Header *******************/}
      <Header filterByCategory={filterByCategory} filterByTitle={filterByTitle} data={init_data}/>
      {/* Banner ******************** */}
      <Banner />
      {/* Hot Deals *************************/}
      {filteredData[0] ?  <AllProduct data = {filteredData} country={country}/> 
      :<>
      <HotDeals data = {hotDeals} country={country}/>
      {/* All products **************** */}
      <AllProduct data = {genralProducts} country={country}/>
      </>}
      {/* Footer ******************** */}
      <Footer />
    </div>
  );
}

export default Home;
