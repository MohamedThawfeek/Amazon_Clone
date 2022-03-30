import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "../components/redux/reducer/user";
import ReduxThunk from "redux-thunk";

import AdminLogin from "../pages/admin login page/AdminLogin";
import AdminPage from "../pages/admin/Admin";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import GlobalUsers from "../pages/admin dashboard pages/globalusers/GlobalUsers";
import GlobalProduct from "../pages/admin dashboard pages/globalproduct/GlobalProduct";
import GlobalOrders from "../pages/admin dashboard pages/globalorders/GlobalOrders";
import Books from "../pages/admin dashboard pages/globalproduct/books/Books";
import Software from "../pages/admin dashboard pages/globalproduct/softwares/Software";
import Game from "../pages/admin dashboard pages/globalproduct/games/Games";

import Computer from "../pages/admin dashboard pages/globalproduct/computers/Computers";
import Dell from "../pages/admin dashboard pages/globalproduct/computers/dell/Dell";
import Hp from "../pages/admin dashboard pages/globalproduct/computers/hp/Hp";
import Lenovo from "../pages/admin dashboard pages/globalproduct/computers/lenovo/Lenovo";
import Mac from "../pages/admin dashboard pages/globalproduct/computers/mac/Mac";

import Grocerry from "../pages/admin dashboard pages/globalproduct/grocerry/Grocerry";
import BabyCare from "../pages/admin dashboard pages/globalproduct/grocerry/baby care/BabyCare";
import HouseHold from "../pages/admin dashboard pages/globalproduct/grocerry/household/HouseHold";
import PackagedFood from "../pages/admin dashboard pages/globalproduct/grocerry/packaged food/PackagedFood";
import Snacks from "../pages/admin dashboard pages/globalproduct/grocerry/snacks/Snacks";
import Staples from "../pages/admin dashboard pages/globalproduct/grocerry/staples/Staples";

import HomeAppliance from "../pages/admin dashboard pages/globalproduct/homeappliance/HomeAppliance";
import Ac from "../pages/admin dashboard pages/globalproduct/homeappliance/ac/Ac";
import Fan from "../pages/admin dashboard pages/globalproduct/homeappliance/fan/Fan";
import Fridge from "../pages/admin dashboard pages/globalproduct/homeappliance/fridge/Fridge";
import Oven from "../pages/admin dashboard pages/globalproduct/homeappliance/oven/Oven";
import Tv from "../pages/admin dashboard pages/globalproduct/homeappliance/tv/Tv";
import WashingMachine from "../pages/admin dashboard pages/globalproduct/homeappliance/washing machine/WashingMachine";

import Mobile from "../pages/admin dashboard pages/globalproduct/mobiles/Mobiles";
import Iphone from "../pages/admin dashboard pages/globalproduct/mobiles/iphone/Iphone";
import Mi from "../pages/admin dashboard pages/globalproduct/mobiles/mi/Mi";
import Oneplus from "../pages/admin dashboard pages/globalproduct/mobiles/oneplus/Oneplus";
import Poco from "../pages/admin dashboard pages/globalproduct/mobiles/poco/Poco";
import Realme from "../pages/admin dashboard pages/globalproduct/mobiles/realme/Realme";
import Samsung from "../pages/admin dashboard pages/globalproduct/mobiles/samsung/Samsung";

const AdminPanel = () => {
  const rootReducer = combineReducers({
    auth: appReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminpage" element={<PrivateRoute />}>
            <Route path="/adminpage" element={<AdminPage />} />
          </Route>
          <Route path="/books" element={<PrivateRoute />}>
            <Route path="/books" element={<Books />} />
          </Route>

          {/* computer link */}
          <Route path="/computer" element={<PrivateRoute />}>
            <Route path="/computer" element={<Computer />} />
          </Route>
          <Route path="/dell" element={<PrivateRoute />}>
            <Route path="/dell" element={<Dell />} />
          </Route>
          <Route path="/lenovo" element={<PrivateRoute />}>
            <Route path="/lenovo" element={<Lenovo />} />
          </Route>
          <Route path="/hp" element={<PrivateRoute />}>
            <Route path="/hp" element={<Hp />} />
          </Route>
          <Route path="/mac" element={<PrivateRoute />}>
            <Route path="/mac" element={<Mac />} />
          </Route>

          {/* games link  */}
          <Route path="/game" element={<PrivateRoute />}>
            <Route path="/game" element={<Game />} />
          </Route>

          {/* Grocerry link  */}
          <Route path="/grocerry" element={<PrivateRoute />}>
            <Route path="/grocerry" element={<Grocerry />} />
          </Route>
          <Route path="/babycare" element={<PrivateRoute />}>
            <Route path="/babycare" element={<BabyCare />} />
          </Route>
          <Route path="/household" element={<PrivateRoute />}>
            <Route path="/household" element={<HouseHold />} />
          </Route>
          <Route path="/packagedfood" element={<PrivateRoute />}>
            <Route path="/packagedfood" element={<PackagedFood />} />
          </Route>
          <Route path="/snacks" element={<PrivateRoute />}>
            <Route path="/snacks" element={<Snacks />} />
          </Route>
          <Route path="/staples" element={<PrivateRoute />}>
            <Route path="/staples" element={<Staples />} />
          </Route>

          {/* HomeAppliance link */}
          <Route path="/homeappliance" element={<PrivateRoute />}>
            <Route path="/homeappliance" element={<HomeAppliance />} />
          </Route>
          <Route path="/ac" element={<PrivateRoute />}>
            <Route path="/ac" element={<Ac />} />
          </Route>
          <Route path="/fan" element={<PrivateRoute />}>
            <Route path="/fan" element={<Fan />} />
          </Route>
          <Route path="/fridge" element={<PrivateRoute />}>
            <Route path="/fridge" element={<Fridge />} />
          </Route>
          <Route path="/oven" element={<PrivateRoute />}>
            <Route path="/oven" element={<Oven />} />
          </Route>
          <Route path="/tv" element={<PrivateRoute />}>
            <Route path="/tv" element={<Tv />} />
          </Route>
          <Route path="/washingmachine" element={<PrivateRoute />}>
            <Route path="/washingmachine" element={<WashingMachine />} />
          </Route>

          {/* Mobile link  */}
          <Route path="/mobile" element={<PrivateRoute />}>
            <Route path="/mobile" element={<Mobile />} />
          </Route>
          <Route path="/iphone" element={<PrivateRoute />}>
            <Route path="/iphone" element={<Iphone />} />
          </Route>
          <Route path="/mi" element={<PrivateRoute />}>
            <Route path="/mi" element={<Mi />} />
          </Route>
          <Route path="/oneplus" element={<PrivateRoute />}>
            <Route path="/oneplus" element={<Oneplus />} />
          </Route>
          <Route path="/poco" element={<PrivateRoute />}>
            <Route path="/poco" element={<Poco />} />
          </Route>
          <Route path="/realme" element={<PrivateRoute />}>
            <Route path="/realme" element={<Realme />} />
          </Route>
          <Route path="/samsung" element={<PrivateRoute />}>
            <Route path="/samsung" element={<Samsung />} />
          </Route>

          {/* Software link  */}
          <Route path="/software" element={<PrivateRoute />}>
            <Route path="/software" element={<Software />} />
          </Route>
          <Route path="/all/users" element={<GlobalUsers />} />
          <Route path="/all/product" element={<GlobalProduct />} />
          <Route path="/all/orders" element={<GlobalOrders />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default AdminPanel;
