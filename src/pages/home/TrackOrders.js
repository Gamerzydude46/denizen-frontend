import React from "react";
import { NavLink } from "react-router-dom";
import girlinbox from '../../assets/images/girlinbox.png';
import deadline from '../../assets/icons/deadline.svg';
import Card from '../../components/TrackCard';
import Layout from "../../components/Layout";
import axios from "axios";
import noOrder from '../../assets/images/feedOp.jpg'


function TrackOrders() {
    const [trackOrders, setTrackOrders] = React.useState([]);

    const getTrackOrders = async () => {
        axios.get("http://localhost:8080/postItems/trackOrders", { withCredentials: true }).then((res) => {
            setTrackOrders(res.data.message)
        }).catch(err => console.log(err))
    }

    React.useEffect(() => {
        getTrackOrders();
    }, [])

    return (
        <Layout>
            <main className="h-full w-full pb-16 flex flex-row padding-right-10 padding-top-5 fixed">
                <div className="z-10 container pb-16 overflow-y-scroll overflow-x-hidden scrollbar-hide h-full">
                    {

                        trackOrders.length > 0 ? trackOrders.map((trackOrder) => {
                            return <Card key={trackOrder._id}
                                order_id={trackOrder._id}
                                item_title={trackOrder.item_name}
                                del_address={trackOrder.delivery_address}
                                deliver_date={trackOrder.delivery_date}
                                deliver_time={trackOrder.delivery_by}
                                selling_cost={trackOrder.item_cost}
                                delivery_charges={trackOrder.delivery_cost}
                                status={trackOrder.delivered}
                                user_email={trackOrder.user_email}
                            />
                        }) : <div className=" z-10 relative flex items-start flex-shrink-0 w-[575px] h-[250px] top-[28px] left-[37px] mb-8 rounded-lg border border-solid border-Primary_Red bg-Base border-4">

                            <img src={noOrder} alt="loading sense" className="h-full" />
                            <div className=" mt-16 flex flex-col justify-center items-center content-center">
                                <h1 className="font-oswald text-3xl font-medium ml-3 ">Oops !</h1>
                                <h1 className="mt-5 font-oswald text-2xl font-medium ml-3">You have'nt Posted any Orders Yet</h1>
                            </div>

                        </div>
                    }
                </div>


                <div className="fixed z-100 bottom-0 right-0">
                    <div className="bg-White rounded-t-full h-[450px] w-[900px] ">
                        <img src={girlinbox} alt="girl in box" className="h-[400px] w-[430px] bottom-[60px] left-[400px] relative" />
                    </div>
                </div>
            </main>
        </Layout>
  );
}

export default TrackOrders;

