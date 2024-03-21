import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import { useEffect, useState } from "react";
import { getOrders } from "../../../../lib/api/order-api";

export default function NotProccessList() {
    const [orders, setOrders] = useState([]);

    const handleGetOrders = async () => {
        const response = await getOrders();
        setOrders(response?.data?.items);
    }

    useEffect(() => {
        handleGetOrders();
    }, [])

    return (
        <div className="w-full mt-4">
            <div className="p-2 space-y-4">
                {orders.length === 0 ? (
                    <div>Không có đơn hàng nào</div>
                ) : (
                    <div>
                        {
                            orders.map((order, index) => (
                                <OrderCard key={index} order={order} />
                            ))
                        }
                    </div>
                )}

            </div>
        </div>
    )
}