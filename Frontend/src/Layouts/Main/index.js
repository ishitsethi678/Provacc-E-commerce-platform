import React, { createContext, useState } from "react";
import Home from "../../Pages/HomePage";
import Header from "../Header";
import Footer from "../Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  NewArrivals,
  BestSeller,
  SpecialOffer,
  Featured,
} from "../../Components/HomeNested";
import ShopGrid from "../../Pages/ShopGrid";
import MasterSearch from "../../Components/MasterSearch"
import FashionPage from "../../Pages/FashionPage";
import HouseholdPage from "../../Pages/HouseholdPage";
import axios from "axios";

export const ProductContext = createContext();

function Main() {
  // const [products, setProducts] = useState([]);

  // const searchProducts = async (query) => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/search?query=${query}`
  //     );
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // console.log(products);

  return (
    <>
      <Header />
      {/* <ProductContext.Provider value={{ products, searchProducts }}> */}
        <Switch>
          <Route path="/home" component={Home}>
            <Route path="arrivals" element={<NewArrivals />} />
            <Route path="bestSeller" element={<BestSeller />} />
            <Route path="featured" element={<Featured />} />
            <Route path="specialOffer" element={<SpecialOffer />} />
          </Route>
          <Route path="/shopGrid" component={ShopGrid} />
          <Route path="/fashionItems" component={FashionPage} />
          <Route path="/shopGrid" component={ShopGrid} />
          <Route path="/masterSearch" component={MasterSearch} />
          <Route path="/household" component={HouseholdPage} />
          <Redirect to="/home" />
        </Switch>
      {/* </ProductContext.Provider> */}
      <Footer />
    </>
  );
}

export default Main;
