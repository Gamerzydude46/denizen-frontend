import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Access from "./pages/Access";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import ResetPassword from "./components/login/ResetPassword";
import Otp from "./components/login/Otp";
import SetPassword from "./components/login/SetPassword";
import Identity from "./components/kyc/Identity";
import Business from "./components/kyc/Business";
import Address from "./components/kyc/Address";
import SellerDocument from "./components/kyc/SellerDocument";
import Declaration from "./components/kyc/Declaration";
import Processing from "./components/kyc/Processing";
import Approved from "./components/kyc/Approved";
import UserDocument from "./components/kyc/UserDocument";
import Kyc from "./pages/kyc/Kyc";
import SellerFeed from "./pages/home/SellerFeed";
import Welcome from "./pages/kyc/Welcome";
import dummyImg2 from "./assets/images/dummyImg2.png";
import axios from "axios";
import AboutUs from "./pages/AboutUs";
import TrackOrders from "./pages/home/TrackOrders";
import MyOrders from "./pages/MyOrders";
import MyOrder from "./components/MyOrder";
import PostOrders from "./pages/home/PostOrders";
import UserFeed from "./pages/home/UserFeed";
import Mapping from "./pages/Mapping";

function App() {
  const [data, setData] = React.useState({
    user: { fname: "", lname: "" },
    type: "",
    email: "",
    verified: false,
    img: dummyImg2,
  });
  React.useEffect(() => {
    axios
      .get("http://localhost:8080/user/userData", { withCredentials: true })
      .then((info) => {
        setData({
          user: {
            fname: info.data.data.fname,
            lname: info.data.data.lname,
          },
          type: info.data.data.type,
          email: info.data.data.email,
          verified: info.data.data.verified,
          img: dummyImg2,
        });
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home {...data} />}>
          <Route path="/home" element={<Welcome {...data} />} />
          <Route exact path="/home/kyc" element={<Kyc {...data} />}>
            <Route path="/home/kyc" element={<Identity {...data} />} />
            <Route path="/home/kyc/address" element={<Address {...data} />} />
            <Route path="/home/kyc/business" element={<Business />} />
            <Route
              path="/home/kyc/sellerdocument"
              element={<SellerDocument {...data} />}
            />
            <Route
              path="/home/kyc/userdocument"
              element={<UserDocument {...data} />}
            />
            <Route
              path="/home/kyc/declaration"
              element={<Declaration {...data} />}
            />
            <Route
              path="/home/kyc/processing"
              element={<Processing {...data} />}
            />
            <Route path="/home/kyc/approved" element={<Approved {...data} />} />
          </Route>
        </Route>

        <Route path="/my-orders" element={<MyOrders />}>
          <Route path="/my-orders" element={<MyOrder />} />
        </Route>

        <Route path="/" element={<Access />}>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/set-password" element={<SetPassword />} />
        </Route>
        <Route exact path="/seller-feed" element={<SellerFeed />} />
        <Route exact path="/post-orders" element={<PostOrders />} />
        <Route exact path="/user-feed" element={<UserFeed />} />

        <Route path="/track-orders" element={<TrackOrders />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/maps" element={<Mapping />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
