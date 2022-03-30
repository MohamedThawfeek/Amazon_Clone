import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "../components/redux/reducer/user";
import ReduxThunk from "redux-thunk";

import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import Verify from "../components/verify/Verify";
import SingleCard from "../components/singleCard/SingleCard";
import SingleCard1 from "../components/singleCard/SingleCard1";
import Checkout from "../pages/checkout/Checkout";

//books link
import Books from "../components/product/books/Books";
//games link
import Games from "../components/product/games/Games";
//computers link
import Computer from "../components/product/computers/Computer";
import Dell from "../components/product/computers/dell/Dell";
import Hp from "../components/product/computers/hp/Hp";
import Lenovo from "../components/product/computers/lenovo/Lenovo";
import Mac from "../components/product/computers/mac/Mac";
//grocery links
import Grocerry from "../components/product/grocerry/Grocerry";
import BabyCare from "../components/product/grocerry/babycare/BabyCare";
import HouseHold from "../components/product/grocerry/household/HouseHold";
import PackagedFood from "../components/product/grocerry/packagedfood/PackagedFood";
import Snacks from "../components/product/grocerry/snacks/Snacks";
import Staples from "../components/product/grocerry/staples/Staples";

//homeappliance link
import HomeAppliance from "../components/product/home appliance/Homeappliance";
import Ac from "../components/product/home appliance/ac/Ac";
import Fan from "../components/product/home appliance/fan/Fan";
import Fridge from "../components/product/home appliance/fridge/Fridge";
import Oven from "../components/product/home appliance/oven/Oven";
import Tv from "../components/product/home appliance/tv/Tv";
import WashingMachine from "../components/product/home appliance/washingmachine/WashingMachine";

//mobiles link
import Mobiles from "../components/product/mobiles/Mobile";
import Iphone from "../components/product/mobiles/iphone/Iphone";
import Mi from "../components/product/mobiles/mi/Mi";
import Oneplus from "../components/product/mobiles/oneplus/Oneplus";
import Poco from "../components/product/mobiles/poco/Poco";
import Realme from "../components/product/mobiles/realme/Realme";
import Samsung from "../components/product/mobiles/samsung/Samsung";

//software link
import Softwares from "../components/product/softwares/Software";

const Users = () => {
  const rootReducer = combineReducers({
    auth: appReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify/:id" element={<Verify />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            {/* checkoutPage */}
            <Route path="/checkout" element={<PrivateRoute />}>
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            {/* books */}
            <Route path="/all/books" element={<PrivateRoute />}>
              <Route path="/all/books" element={<Books />} />
            </Route>
            {/* games */}
            <Route path="/all/games" element={<PrivateRoute />}>
              <Route path="/all/games" element={<Games />} />
            </Route>
            {/* computer */}
            <Route path="/all/computer" element={<PrivateRoute />}>
              <Route path="/all/computer" element={<Computer />} />
            </Route>
            <Route path="/all/dell" element={<PrivateRoute />}>
              <Route path="/all/dell" element={<Dell />} />
            </Route>
            <Route path="/all/hp" element={<PrivateRoute />}>
              <Route path="/all/hp" element={<Hp />} />
            </Route>
            <Route path="/all/lenovo" element={<PrivateRoute />}>
              <Route path="/all/lenovo" element={<Lenovo />} />
            </Route>
            <Route path="/all/mac" element={<PrivateRoute />}>
              <Route path="/all/mac" element={<Mac />} />
            </Route>
            {/* Grocerry */}
            <Route path="/all/grocerry" element={<PrivateRoute />}>
              <Route path="/all/grocerry" element={<Grocerry />} />
            </Route>
            <Route path="/all/babyCare" element={<PrivateRoute />}>
              <Route path="/all/babyCare" element={<BabyCare />} />
            </Route>
            <Route path="/all/houseHold" element={<PrivateRoute />}>
              <Route path="/all/houseHold" element={<HouseHold />} />
            </Route>
            <Route path="/all/packagedFood" element={<PrivateRoute />}>
              <Route path="/all/packagedFood" element={<PackagedFood />} />
            </Route>
            <Route path="/all/snacks" element={<PrivateRoute />}>
              <Route path="/all/snacks" element={<Snacks />} />
            </Route>
            <Route path="/all/staples" element={<PrivateRoute />}>
              <Route path="/all/staples" element={<Staples />} />
            </Route>
            {/* homeappliance */}
            <Route path="/all/homeappliance" element={<PrivateRoute />}>
              <Route path="/all/homeappliance" element={<HomeAppliance />} />
            </Route>
            <Route path="/all/ac" element={<PrivateRoute />}>
              <Route path="/all/ac" element={<Ac />} />
            </Route>
            <Route path="/all/fan" element={<PrivateRoute />}>
              <Route path="/all/fan" element={<Fan />} />
            </Route>
            <Route path="/all/fridge" element={<PrivateRoute />}>
              <Route path="/all/fridge" element={<Fridge />} />
            </Route>
            <Route path="/all/oven" element={<PrivateRoute />}>
              <Route path="/all/oven" element={<Oven />} />
            </Route>
            <Route path="/all/tv" element={<PrivateRoute />}>
              <Route path="/all/tv" element={<Tv />} />
            </Route>
            <Route path="/all/washingMachine" element={<PrivateRoute />}>
              <Route path="/all/washingMachine" element={<WashingMachine />} />
            </Route>
            {/* mobiles */}
            <Route path="/all/mobiles" element={<PrivateRoute />}>
              <Route path="/all/mobiles" element={<Mobiles />} />
            </Route>
            <Route path="/all/iphone" element={<PrivateRoute />}>
              <Route path="/all/iphone" element={<Iphone />} />
            </Route>
            <Route path="/all/mi" element={<PrivateRoute />}>
              <Route path="/all/mi" element={<Mi />} />
            </Route>
            <Route path="/all/onePlus" element={<PrivateRoute />}>
              <Route path="/all/onePlus" element={<Oneplus />} />
            </Route>
            <Route path="/all/poco" element={<PrivateRoute />}>
              <Route path="/all/poco" element={<Poco />} />
            </Route>
            <Route path="/all/realme" element={<PrivateRoute />}>
              <Route path="/all/realme" element={<Realme />} />
            </Route>
            <Route path="/all/samsung" element={<PrivateRoute />}>
              <Route path="/all/samsung" element={<Samsung />} />
            </Route>
            <Route
              path="/singleCard1/:category/:item/:id"
              element={<PrivateRoute />}
            >
              <Route
                path="/singleCard1/:category/:item/:id"
                element={<SingleCard1 />}
              />
            </Route>
            {/* softwares */}
            <Route path="/all/softwares" element={<PrivateRoute />}>
              <Route path="/all/softwares" element={<Softwares />} />
            </Route>
            <Route path="/singleCard/:category/:id" element={<PrivateRoute />}>
              <Route
                path="/singleCard/:category/:id"
                element={<SingleCard />}
              />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default Users;
