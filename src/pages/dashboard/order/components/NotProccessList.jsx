import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import { useEffect, useState } from "react";
import { getOrders } from "../../../../lib/api/order-api";

export default function NotProccessList() {
    const [orders, setOrders] = useState([]);
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [total, setTotal] = useState(0)

    const handleGetOrders = async () => {
        const response = await getOrders(pageIndex, pageSize);
        console.log(response);
        setOrders(response?.data?.items);
        setTotal(response?.data?.totalCount);
        console.log(orders?.data?.totalCount);
    }

    useEffect(() => {
        handleGetOrders();
    }, [pageIndex, pageSize])

    return (
        <div className="w-full mt-4">
            <div className="p-2 space-y-4 h-[500px] overflow-y-scroll">
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
            <div className="flex justify-center gap-4 items-center mt-2">
                <button
                    className="p-2 bg-slate-200 rounded-md cursor-pointer"
                    onClick={() => {
                        setPageIndex(pageIndex - 1)
                    }}
                    disabled={pageIndex === 1}
                >
                    Trang trước
                </button>
                <div className="p-2 bg-slate-200 rounded-md">
                    Trang {pageIndex} / {Math.ceil(total / pageSize)}
                </div>
                <button
                    className="p-2 bg-slate-200 rounded-md cursor-pointer"
                    onClick={() => {
                        setPageIndex(pageIndex + 1)
                    }}
                    disabled={pageIndex * pageSize >= total}
                >
                    Trang sau
                </button>
            </div>
        </div>
    )
}