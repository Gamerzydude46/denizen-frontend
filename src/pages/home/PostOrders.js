import React from "react";
import Layout from "../../components/Layout";
import girlwithlaptop from '../../assets/images/girlwithaptop.png'
import dummyImg2 from '../../assets/images/dummyImg2.png';
import Chair from '../../assets/images/chair.png';
import mail from '../../assets/icons/edit.svg';
import loc from '../../assets/icons/map.svg';
import price from '../../assets/icons/priceTag.svg';
import trolley from '../../assets/icons/trolley.svg';
import cal from '../../assets/icons/schedule.svg';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Card from "../Card";
import "./post-order.css";
import { Schedule } from "@mui/icons-material";
import transaction from '../../assets/icons/transaction.svg';
import distance from '../../assets/icons/distance.svg';
import deadline from '../../assets/icons/deadline.svg';







const CustomFontTheme = createTheme({
    typography: {
        fontFamily: ["Maven Pro"].join(",")
    }
});




function PostOrders() {
    const [details, setDetails] = React.useState({
        itemName: '',
        address: '',
        sellingCost: '',
        date: '',
        time: '',
        category: '',
        distance: '',
        charges: '',


    });

    const [gen, setGen] = React.useState('');

    function imageHandler(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            const img = document.getElementById("order-img");
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    }

    return (

        <Layout>
            <main className="h-full flex flex-row pr-10 pl-10  padding-top-5">
                <ThemeProvider theme={CustomFontTheme}>
                    <div className="full-page">
                        <div className="">
                            <div className="flex items-center gap-6 m-2">
                            </div>
                        </div>

                        <div className="upper">
                            <form onSubmit={e => e.preventDefault()}>
                                <div className="form-wrapper flex relative ml-6">
                                    <div>
                                        {<img src={girlwithlaptop} alt="girl with laptop" className="absolute top-0 right-0 h-50px" style={{ height: "300px", padding: "10px" }} />}
                                    </div>
                                    <div className="flex flex-col form-first">
                                        <div>
                                            <img src={Chair} id="order-img" alt="chair" className={' w-[200px] h-[200px] '} />
                                        </div>

                                        <input type="file" name="file" id="file" class="inputfile hidden" onChange={imageHandler} />
                                        <label for="file" className="upload-btn">UPLOAD</label>
                                        <div>
                                            <button className="helpButton  max-100">HELP!</button>
                                        </div>
                                    </div>
                                    <div className="form-middle relative mr-5 ml-5">
                                        <div className="custom-form-wrap" >
                                            <img src={mail} alt='mail' className={'h-[24px]'} />
                                            <input placeholder="Item Name" value={details.itemName} onChange={(e) => setDetails({ ...details, itemName: e.target.value })} />
                                        </div>
                                        <div className="custom-form-wrap">
                                            <img src={loc} alt='Location' className={'mr-2 ml-1 h-[24px]'} />


                                            <input placeholder="Location" value={details.address} onChange={(e) => setDetails({ ...details, address: e.target.value })} />
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="custom-form-wrap w-30">
                                                <img src={price} alt='Price' className={'mr-2 ml-1 h-[24px]'} />

                                                <input placeholder="Selling Cost" value={details.sellingCost} onChange={(e) => setDetails({ ...details, sellingCost: e.target.value })} />
                                            </div>
                                            <div className="custom-form-wrap w-30">
                                                <img src={cal} alt='Calender' className='ml-2  mt-2 h-[24px]' />

                                                <input placeholder="Date" type="date" value={details.date} onChange={(e) => setDetails({ ...details, date: e.target.value })} />
                                            </div>
                                            <div className="custom-form-wrap w-30">
                                                <img src={cal} alt='navigate back' className='ml-2  mt-2 h-[24px]' />

                                                <input placeholder="Time" type="time" value={details.time} onChange={(e) => setDetails({ ...details, time: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="custom-form-wrap w-30">
                                                <img src={trolley} alt='navigate back' className='ml-2  mt-2 h-[24px]' />

                                                <select name="type" id="size" value={details.category} onChange={(value) => { setDetails({ ...details, category: value.target.value }) }}>
                                                    {/* <option value=""></option> */}
                                                    <option value="small">Small</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="large">Large</option>
                                                </select>
                                            </div>
                                            <div className="custom-form-wrap w-30">
                                                <img src={distance} alt='distance' className={'h-[24px]'} />
                                                <input placeholder="Distance" value={details.distance} onChange={(e) => setDetails({ ...details, distance: e.target.value })} />
                                            </div>
                                            <div className="custom-form-wrap w-30">
                                                <img src={transaction} alt='mail' className={'h-[24px]'} />
                                                <input placeholder="Delivery Charges" value={details.charges} onChange={(e) => setDetails({ ...details, charges: e.target.value })} />
                                            </div>
                                        </div>
                                        <button className="absolute post-order-btn">
                                            <img src={deadline} alt='deadline' height='10' />POST ORDERS TO FEED</button>
                                    </div>
                                </div>

                            </form>

                            <div className="drivers-wrspper mt-8" style={{ flexWrap: "no-wrap", overflowX: "scroll" }}>
                                <h1 className="driver-title text-2xl mt-2 mb-2 ">Featured Delivery Buddies</h1>
                                <div className="flex">
                                    {
                                        drivers.map(data => <Card data={data} />)
                                    }
                                </div>

                            </div>

                        </div>
                        <div className="absolute -z-10 bg-White rounded-t-full h-[430px] w-[900px] bottom-[0px] right-[20px]">

                    </div>
                    </div>
                    

                </ThemeProvider>
            </main>
        </Layout>


    );
}
export default PostOrders;


const drivers = [
    { name: "Saish Naik", rating: 4, address: "Panjim-Goa", deliveries: 53 },
    { name: "Vassant Kalangutkar", rating: 3, address: "Mapusa-Goa", deliveries: 53 },
    { name: "Aarush Sharma", rating: 5, address: "Sankhali-Goa", deliveries: 53 },
    { name: "Abhi Gaonkar", rating: 2, address: "Porvorim-Goa", deliveries: 53 },
    { name: "Meera Pai", rating: 4, address: "old-Goa", deliveries: 53 },
    { name: "Nisha Kamat", rating: 5, address: "Ponda-Goa", deliveries: 53 },
    { name: "Prachi Dessai", rating: 5, address: "Vasco-Goa", deliveries: 53 },
    { name: "Niraj Lotlikar", rating: 3, address: "Valpoi-Goa", deliveries: 53 },

] 