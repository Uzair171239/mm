import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import AllProduct from "./AllProduct";
import Banner from "./banner";
import HotDeals from "./HotDeals";

function Home() {
  return (
    <div>
      {/* Header *******************/}
      <Header />
      {/* Banner ******************** */}
      <Banner />
      {/* Hot Deals *************************/}
      <HotDeals />
      {/* All products **************** */}
      <AllProduct />
      {/* Footer ******************** */}
      <Footer />
    </div>
  );
}

export default Home;
