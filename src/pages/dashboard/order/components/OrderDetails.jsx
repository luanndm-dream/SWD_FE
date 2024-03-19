import orderImage from "@/assets/images/orderImage.png";
import { formatPrice } from "@/lib/formatPrice";
import { formatDateTime } from "@/lib/formatTime";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById, getOrders } from "../../../../lib/api/order-api";
import { getPackageById } from "../../../../lib/api/package-api";
import { getOffice } from "../../../../lib/api/office-api";
import { getBusById } from "../../../../lib/api/bus-api";

// order:
// {
//   id: 3,
//   packageId: 3,
//   image:
//     'https://busdeliveryimage.blob.core.windows.net/busdelivery/orders/0768664895-System.Func%601%5BSystem.Int64%5D-1709708233',
//   weight: 0.4,
//   price: 400000,
//   note: 'Hộp đựng mắt kính HMK',
//   contact: '0768664895'
// }

// packageInfo:
// {
//   id: 3,
//   busId: 2,
//   fromOfficeId: 4,
//   toOfficeId: 1,
//   stationId: 4,
//   quantity: 2,
//   totalWeight: 0.8,
//   totalPrice: 100000,
//   image:
//     'https://busdeliveryimage.blob.core.windows.net/busdelivery/packages/4-System.Func%601%5BSystem.Int64%5D-1710051685',
//   note: '..',
//   status: 0,
//   createTime: '2/29/2024 2:20:01 PM'
// }
// fromOffice:
// {
//   id: 4,
//   name: 'BusDelivery(Trần Hưng Đạo)',
//   address: '567A Đ. Trần Hưng Đạo, Cầu Kho, Quận 1, Thành phố Hồ Chí Minh',
//   lat: '10.756916906074192',
//   lng: '106.68589420445201',
//   contact: '0908055555',
//   image: null,
//   isActive: true
// }
// toOffice:
// {
//   id: 1,
//   name: 'BusDelivery(Hai Bà Trưng)',
//   address: '34 Hai Bà Trưng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
//   lat: '10.777028018050977',
//   lng: '106.7047978540785',
//   contact: '0908071111',
//   image: null,
//   isActive: true
// }
// bus:
// {
//   id: 2,
//   number: '1',
//   plateNumber: '11L-6789',
//   name: 'Bến Thành - Bến xe buýt Chợ Lớn',
//   organization: 'Cty TNHH Du lịch, Dịch vụ Xây dựng Bảo Yến',
//   color: '#FFB07C',
//   numberOfSeat: '50',
//   operateTime: '05:00 - 20:15',
//   isActive: true
// }

export default function OrderDetails() {
  const [order, setOrder] = useState({});
  const [orders, setOrders] = useState([]);
  const [packageData, setPackageData] = useState({});
  const [fromOffice, setFromOffice] = useState({});
  const [toOffice, setToOffice] = useState({});
  const [bus, setBus] = useState({});

  const id = useParams().id;

  const handleGetOrderById = async () => {
    const response = await getOrderById(id);
    setOrder(response?.data);
    if (response?.data?.packageId) {
      await handleGetPackageById(response?.data?.packageId);
    }
  };

  const handleGetPackageById = async (packageId) => {
    const response = await getPackageById(packageId);
    setPackageData(response?.data);
    if (response?.data?.fromOfficeId && response?.data?.toOfficeId) {
      const from = await handleGetOfficeById(response?.data?.fromOfficeId);
      setFromOffice(from);
      const to = await handleGetOfficeById(response?.data?.toOfficeId);
      setToOffice(to);
    }
    if (response?.data?.busId) {
      await handleGetBusById(response?.data?.busId);
    }
  };

  const handleGetOfficeById = async (officeId) => {
    const response = await getOffice(officeId);
    return response?.data?.data;
  };

  const handleGetBusById = async (busId) => {
    const response = await getBusById(busId);
    setBus(response?.data);
  };

  const handleGetAllOrder = async () => {
    getOrders(1, 10, "").then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        console.log(res.data?.items?.filter((item) => item.packageId == id));
        setOrders(
          res.data?.items?.filter((item) => item.packageId == id) || []
        );
      }
    });
  };

  // {
  //   id: 3,
  //   packageId: 3,
  //   image: ' ... (length: 441284)',
  //   weight: 0.4,
  //   price: 400000,
  //   note: ' ... (length: 21)',
  //   contact: ' ... (length: 10)'
  // },

  useEffect(() => {
    handleGetOrderById();

    handleGetAllOrder();
  }, [id]);

  console.log(orders);

  

  console.log(order);

  return (
    <div className="w-full px-6 pt-6">
      {orders.length == 0 ? (
        <div>Không tìm thấy đơn hàng</div>
      ) : (
        <div className=" w-full p-6 bg-[#eaf4fa] grid grid-cols-3 gap-6 rounded-md">
          <div className="col-span-1 space-y-4">
            <div className="flex justify-center items-center p-6 bg-white max-h-56 object-cover rounded-md">
              {/* base 64 image */}
              <di className="overflow-hidden h-48">
                <img
                  src={`data:image/png;base64, ` + order?.image || orderImage}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </di>
            </div>
            <div className="w-full">
              {orders?.map((orderDetails, index) => (
                <div key={index} className="grid grid-cols-3">
                  <div className="text-sm font-normal col-span-1 text-right">
                    {/* {orderDetails.time.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric"
                  })} */}
                  </div>
                  {orderDetails.checked ? (
                    <div className="text-sm font-semibold col-span-1 text-center">
                      ✅
                    </div>
                  ) : (
                    <div className="text-sm font-semibold col-span-1 text-center">
                      ⏳
                    </div>
                  )}
                  <div className="text-sm font-semibold col-span-1">
                    {orderDetails.status}
                  </div>
                  {index !== (orderDetails.length ?? 0) - 1 && (
                    <div className="col-span-3 text-center text-sm">|</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 space-y-3 relative">
            <div className="font-semibold text-lg  text-[#50a4b8]">
              Mã đơn hàng: {order?.id}
            </div>
            <div className="font-semibold text-sm col-span-1 truncate">
              Khối lượng:{" "}
              <span className="text-sm font-normal">{order?.weight} kg</span>
            </div>
            <div className="font-semibold text-sm">
              Địa chỉ:{" "}
              <span className="text-sm font-normal truncate">
                {toOffice?.address}
              </span>
            </div>
            <div className="font-semibold text-sm">
              Từ trạm:{" "}
              <span className="text-sm font-normal truncate">
                {fromOffice?.name}
              </span>
            </div>
            <div className="font-semibold text-sm">
              Đến Trạm:{" "}
              <span className="text-sm font-normal truncate">
                {toOffice?.name}
              </span>
            </div>
            <div className="font-semibold text-sm">
              Thời gian đặt:{" "}
              <span className="text-sm font-normal truncate">
                {packageData?.createTime}
              </span>
            </div>
            <div className="font-semibold text-sm">
              Ghi chú:{" "}
              <span className="text-sm font-normal truncate">
                {packageData?.note}
              </span>
            </div>
            <div className="font-semibold text-sm">
              Số lượng sản phẩm:{" "}
              <span className="text-sm font-normal truncate">
                {packageData?.quantity}
              </span>
            </div>
            <div className="font-semibold text-sm">
              Bus:{" "}
              <span className="text-sm font-normal truncate">{bus?.name}</span>
            </div>
            <div className="absolute bottom-0 right-0 flex flex-col items-center justify-center gap-3">
              <div className="flex justify-center items-center text-base text-blue-500 border-2 border-blue-500 rounded-full px-4 py-2">
                {packageData?.status === 1 && "Đã xử lý"}
                {packageData?.status === 0 && "Chưa xử lý"}
                {packageData?.status === -1 && "Đã hủy"}
              </div>
              <div className="row-span-1 text-lg font-semibold text-red-500">
                Tổng tiền: {formatPrice(order?.price || 0)}
              </div>
            </div>
          </div>
        </div>
      )}

  {/* //   id: 3,
  //   packageId: 3,
  //   image: ' ... (length: 441284)',
  //   weight: 0.4,
  //   price: 400000,
  //   note: ' ... (length: 21)',
  //   contact: ' ... (length: 10)'
  //  */}
      {orders?.map((orderDetails, index) => (
        <div key={index} className="grid grid-cols-3 gap-6 mt-6 ">
          <div className="col-span-1 space-y-4">
            <div className="flex justify-center items-center p-6 bg-white max-h-56 object-cover rounded-md">
              {/* base 64 image */}
              <di className="overflow-hidden h-48">
                <img
                  src={
                    `data:image/png;base64, ` + orderDetails?.image ||
                    orderImage
                  }
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </di>
            </div>
          </div>
          <div className="col-span-2 space-y-3 relative">
            <div className="font-semibold text-lg  text-[#50a4b8]">
              Mã đơn hàng: {orderDetails?.id}
            </div>
            <div className="font-semibold text-sm col-span-1 truncate">
              Khối lượng:{" "}
              <span className="text-sm font-normal">{orderDetails?.weight} kg</span>
            </div>
            {/* price, note, contact */}
            <div className="font-semibold text-sm">
              Ghi chú:{" "}
              <span className="text-sm font-normal truncate">
                {orderDetails?.note}
              </span>
          </div>

          <div className="font-semibold text-sm">
            Giá:{" "}
            <span className="text-sm font-normal truncate">
              {orderDetails?.price}
            </span>
          </div>
          <div className="font-semibold text-sm">
            Liên hệ:{" "}
            <span className="text-sm font-normal truncate">
              {orderDetails?.contact}
            </span>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
