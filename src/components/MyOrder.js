import React from "react";
import Layout from "../components/Layout";
import MyCard from '../components/MyCard';
import noOrder from '../assets/images/feedOp.jpg'
import axios from "axios";


function MyOrder() {
    const [myorders, setMyorders] = React.useState([]);

    const getMyOrders = async () => {
        axios.get("http://localhost:8080/postItems/getMyorders", { withCredentials: true }).then((res) => {
            setMyorders(res.data.itemSet)
        }).catch(err => console.log(err))
    }

    React.useEffect(() => {
        getMyOrders();
    }, [])
    return (

        <main className="h-full w-full pb-16 flex flex-row padding-right-10 padding-top-5 fixed">
            <div className="z-10 container pb-16 overflow-y-scroll overflow-x-hidden scrollbar-hide h-full">
                {
                    myorders.length > 0 ?  myorders.map((myorder) => {
                        return <MyCard key={myorder._id}
                            order_id={myorder._id}
                            item_title={myorder.item_name}
                            del_address={myorder.delivery_address}
                            deliver_date={myorder.delivery_date}
                            deliver_time={myorder.delivery_by}
                            selling_cost={myorder.item_cost}
                            delivery_charges={myorder.delivery_cost}
                            rcvr_name={myorder.receiver.name}
                            rcvr_contact={myorder.receiver.contact}
                            status={myorder.delivered}
                            seller_email={myorder.seller_email}
                            image={`https://${myorder.imageURL.name}.ipfs.w3s.link/${myorder.imageURL.URL}`}
                            latitude={myorder.latitude}
                            longitude={myorder.longitude}
                        />
                    }) : <div className=" z-10 relative flex items-start flex-shrink-0 w-[575px] h-[250px] top-[28px] left-[37px] mb-8 rounded-lg border border-solid border-Primary_Red bg-Base border-4">

                        <img src={noOrder} alt="loading sense" className="h-full" />
                        <div className=" mt-16 flex flex-col justify-center items-center content-center">
                            <h1 className="font-oswald text-3xl font-medium ml-3 ">Oops !</h1>
                            <h1 className="mt-5 font-oswald text-2xl font-medium ml-3">You have'nt Accepted any Orders Yet</h1>
                        </div>

                    </div>
                }
            </div>


        </main>
    );
}

export default MyOrder;