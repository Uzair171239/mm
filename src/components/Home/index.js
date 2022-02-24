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

  const filterByCategory = (value) => {
    setFilteredData(init_data.filter((item)=>item.cattegory_name === value));
    value === "Home" && setFilteredData([]);
  }
  const filterByTitle = (value) => {
    setFilteredData(init_data.filter((item)=>item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  }
  
  useEffect(() => {
    
    axios.get("http://localhost:3001/getproducts").then(({data})=>{
      setHotDeals(data.filter((item)=>item.cattegory_name === "*Hot Deals*"));
      setGeneralProducts(data.filter((item)=> item.cattegory_name !== "*Hot Deals*"));
      set_initData(data);
    })
    .catch(err=>{console.log(err)});
  } , [])



  return (
    <div>
      {/* Header *******************/}
      <Header filterByCategory={filterByCategory} filterByTitle={filterByTitle} data={init_data}/>
      {/* Banner ******************** */}
      <Banner />
      {/* Hot Deals *************************/}
      {filteredData[0] ?  <AllProduct data = {filteredData}/> 
      :<>
      <HotDeals data = {hotDeals} />
      {/* All products **************** */}
      <AllProduct data = {genralProducts}/>
      </>}
      {/* Footer ******************** */}
      <Footer />
    </div>
  );
}

export default Home;
