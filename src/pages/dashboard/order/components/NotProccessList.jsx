import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";

export default function NotProccessList() {

    const { orderList } = useSelector(state => state.orderList);

    return (
        <div className="w-full mt-4">
            <div className="p-2 space-y-4">
                {orderList.map((order, index) => (
                    <OrderCard key={index} order={order} />
                ))}
            </div>
        </div>
    )
}