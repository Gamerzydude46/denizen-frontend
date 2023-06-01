import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import girlwithlaptop from "../../assets/images/girlwithaptop.png";

import Chair from "../../assets/images/chair.png";
import mail from "../../assets/icons/edit.svg";
import loc from "../../assets/icons/map.svg";
import price from "../../assets/icons/priceTag.svg";
import trolley from "../../assets/icons/trolley.svg";
import cal from "../../assets/icons/schedule.svg";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Card from "../../components/home/Card";
import "./post-order.css";
import { Schedule } from "@mui/icons-material";
import transaction from "../../assets/icons/transaction.svg";
import distance from "../../assets/icons/distance.svg";
import deadline from "../../assets/icons/deadline.svg";
import request from "../../assets/images/request.png";
// import Info from '../../assets/icons/Info.svg';
import { calculateCharges } from "../../services/priceAlgo";
import { Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import whatsapp from "../../assets/images/whatsapp.png";
import userColor from "../../assets/icons/userColor.svg";

import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getGeoLocations } from "../../services/map-utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  height: "300px",
  bgcolor: "background.paper",
  border: "4px solid 	#8B0000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const CustomFontTheme = createTheme({
  typography: {
    fontFamily: ["Maven Pro"].join(","),
  },
});

function PostOrders() {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState({
    itemName: "",
    contact: "",
    sellingCost: "",
    date: "",
    time: "",
    category: "",
    distance: "",
    charges: "",
    address: undefined,
  });

  const [gen, setGen] = React.useState("");
  const [geoLocationQuery, setGeoLocationQuery] = useState(undefined);
  const [geoLocationResult, setGeoLocationResult] = useState([]);
  const [geoLocationLoading, setGeoLocationLoading] = useState(false);

  //gets location based on text
  useEffect(() => {
    if (geoLocationQuery) {
      (async () => {
        setGeoLocationLoading(true);
        let res = await getGeoLocations(geoLocationQuery);
        setGeoLocationLoading(false);
        setGeoLocationResult(res);
      })();
    }
  }, [geoLocationQuery]);

  function imageHandler(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      const img = document.getElementById("order-img");
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  const onSubmit = (d) => {
    console.log(d);
    setDetails({ details: details });
  };

  return (
    <Layout>
      <main className="h-full flex flex-row pr-10 pl-10  padding-top-5">
        <ThemeProvider theme={CustomFontTheme}>
          <div className="full-page">
            <div className="">
              <div className="flex items-center gap-6 m-2"></div>
            </div>

            <div className="upper">
              {/* <form onSubmit={onSubmit} > */}
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-wrapper flex relative ml-6">
                  <div>
                    {
                      <img
                        src={girlwithlaptop}
                        alt="girl with laptop"
                        className="absolute top-0 right-0 h-50px"
                        style={{ height: "300px", padding: "10px" }}
                      />
                    }
                  </div>
                  <div className="flex flex-col form-first">
                    <div>
                      <img
                        src={Chair}
                        id="order-img"
                        alt="chair"
                        className={" w-[200px] h-[210px] "}
                      />
                    </div>

                    <input
                      type="file"
                      name="file"
                      id="file"
                      class="inputfile hidden"
                      onChange={imageHandler}
                    />
                    <label for="file" className="upload-btn">
                      UPLOAD
                    </label>
                  </div>
                  <div className="form-middle relative mr-5 ml-5">
                    <div className="custom-form-wrap">
                      <img src={mail} alt="mail" className={"h-[24px]"} />
                      <input
                        placeholder="Item Name"
                        value={details.itemName}
                        onChange={(e) =>
                          setDetails({ ...details, itemName: e.target.value })
                        }
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="custom-form-wrap w-50">
                        <img
                          src={userColor}
                          alt="user"
                          className={"h-[24px]"}
                        />
                        <input
                          placeholder="User Name"
                          value={details.userName}
                          onChange={(e) =>
                            setDetails({ ...details, userName: e.target.value })
                          }
                        />
                      </div>
                      <div className="custom-form-wrap w-50">
                        <img
                          src={whatsapp}
                          alt="contact"
                          className={"mr-2 ml-1 h-[24px]"}
                        />
                        <input
                          placeholder="Contact Number"
                          value={details.contactNumber}
                          onChange={(e) =>
                            setDetails({
                              ...details,
                              contactNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="custom-form-wrap group relative">
                      <img
                        src={loc}
                        alt="Location"
                        className={"mr-2 ml-1 h-[24px]"}
                      />

                      <input
                        placeholder="Location"
                        // value={details.address}
                        onChange={(e) => setGeoLocationQuery(e.target.value)}
                      />
                      <div className="absolute h-fit w-full bg-White text-black top-[50px] rounded-xl shadow-md group-hover:block hidden p-4 space-y-2">
                        {geoLocationLoading
                          ? "Loading..."
                          : geoLocationResult.length === 0
                          ? "No result"
                          : geoLocationResult.map((d) => {
                              console.log(d);
                              return (
                                <button
                                  className="w-full py-2 px-1 text-black text-left hover:bg-Grad_Blue/10"
                                  onClick={() => {
                                    alert("selected location:\n" + JSON.stringify(d));
                                    //set selected location
                                    setDetails((prev) => ({
                                      ...prev,
                                      address: d.cordinates,
                                    }));
                                  }}
                                >
                                  {d.place}
                                </button>
                              );
                            })}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="custom-form-wrap w-30">
                        <img
                          src={price}
                          alt="Price"
                          className={"mr-2 ml-1 h-[24px]"}
                        />

                        <input
                          placeholder="Selling Cost"
                          value={details.sellingCost}
                          onChange={(e) =>
                            setDetails({
                              ...details,
                              sellingCost: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="custom-form-wrap w-30">
                        <img
                          src={cal}
                          alt="Calender"
                          className="ml-2  mt-2 h-[24px]"
                        />

                        <input
                          placeholder="Date"
                          type="date"
                          value={details.date}
                          onChange={(e) =>
                            setDetails({ ...details, date: e.target.value })
                          }
                        />
                      </div>
                      <div className="custom-form-wrap w-30">
                        <img
                          src={cal}
                          alt="navigate back"
                          className="ml-2  mt-2 h-[24px]"
                        />

                        <input
                          placeholder="Time"
                          type="time"
                          value={details.time}
                          onChange={(e) =>
                            setDetails({ ...details, time: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="custom-form-wrap w-30">
                        <img
                          src={trolley}
                          alt="navigate back"
                          className="ml-2  mt-2 h-[24px]"
                        />

                        <select
                          name="type"
                          id="size"
                          value={details.category}
                          onChange={(value) => {
                            setDetails({
                              ...details,
                              category: value.target.value,
                            });
                          }}
                        >
                          {/* <option value=""></option> */}
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                        </select>
                      </div>
                      <div className="custom-form-wrap w-30">
                        <img
                          src={distance}
                          alt="distance"
                          className={"mr-2 ml-1 h-[24px]"}
                        />
                        <input
                          placeholder="Distance"
                          value={details.distance}
                          onChange={(e) =>
                            setDetails({ ...details, distance: e.target.value })
                          }
                        />
                      </div>
                      <div className="custom-form-wrap w-30">
                        <img
                          src={transaction}
                          alt="mail"
                          className={"mr-2 ml-1 h-[24px]"}
                        />
                        <input
                          placeholder="Delivery Charges"
                          value={details.charges}
                          onChange={(e) =>
                            setDetails({ ...details, charges: e.target.value })
                          }
                          defaultValue={
                            details.category ? details.category : ""
                          }
                          onClick={() =>
                            setDetails({
                              ...details,
                              charges: calculateCharges(
                                details.distance,
                                details.category
                              ),
                            })
                          }
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="absolute post-order-btn"
                      onClick={() => setOpen(true)}
                    >
                      <img src={deadline} alt="deadline" height="30" />
                      POST ORDERS TO FEED
                    </button>
                  </div>
                </div>
              </form>
              <h1 className="driver-title text-2xl mt-6 mb-2 ml-2">
                Featured Delivery Buddies
              </h1>

              <div
                className="drivers-wrspper mt-8 scrollbar-hide overflow-x-hidden"
                style={{ flexWrap: "no-wrap", overflowX: "scroll" }}
              >
                <div className="flex p-1">
                  {drivers.map((data) => (
                    <Card data={data} />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -z-10 bg-White rounded-t-full h-[430px] w-[900px] bottom-[0px] right-[20px]"></div>
          </div>

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} classname="relative p-2">
              <div className="absolute p-4 left-[140px] top-[30px]">
                <Typography
                  className=""
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    background:
                      "linear-gradient(90deg, #CF0A0A 0%, #2B2D42 140.91%)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    color: "#FFFFFF",
                  }}
                >
                  Order Posted Successfully !!
                </Typography>
              </div>

              <div className="absolute ml-16 p-2 left-[120px] mt-[60px]">
                <img
                  src={request}
                  alt="Request"
                  className={" ml-20 left-[370px] w-[60px] h-[60px] center "}
                />
              </div>
              <div className="absolute p-2 left-[220px] mt-[120px]">
                <NavLink to="/home">
                  <button className=" accessButton text-Primary_Grey font-sm p-2">
                    Head to Home
                  </button>
                </NavLink>
              </div>
            </Box>
          </Modal>
        </ThemeProvider>
      </main>
    </Layout>
  );
}
export default PostOrders;

const drivers = [
  { name: "Saish Naik", rating: 4, contact: "7283894973", deliveries: 52 },
  { name: "Vassant Dhempo", rating: 3, contact: "9517893083", deliveries: 30 },
  { name: "Aarush Sharma", rating: 5, contact: "864890234", deliveries: 43 },
  { name: "Abhi Gaonkar", rating: 2, contact: "7389031245", deliveries: 53 },
  { name: "Meera Pai", rating: 4, contact: "97618963", deliveries: 45 },
  { name: "Nisha Kamat", rating: 5, contact: "896434590", deliveries: 53 },
  { name: "Prachi Dessai", rating: 5, contact: "823456789", deliveries: 33 },
  { name: "Niraj Lotlikar", rating: 3, contact: "223456789", deliveries: 30 },
];
