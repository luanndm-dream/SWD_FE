import orderImage from "@/assets/images/orderImage.png"
import { formatPrice } from "@/lib/formatPrice"
import { Link } from "react-router-dom"

export default function OrderCard({ order }) {
<<<<<<< Updated upstream
  return (
    <div className="grid grid-cols-5 bg-[#ededed] p-2 rounded-md">
      <div className="col-span-1 flex items-center justify-center bg-white rounded-md">
        <img src={orderImage} alt="" className="object-contain max-h-40" />
=======
  const [packageInfo, setPackageInfo] = useState({});
  const [fromOffice, setFromOffice] = useState({});
  const [toOffice, setToOffice] = useState({});


  const handleGetOfficeById = async (officeId) => {
    const response = await getOffice(officeId);
    return response?.data?.data;
  }

  const handleGetPackageById = async () => {
    const response = await getPackageById(order?.packageId);
    setPackageInfo(response?.data);
    if (response?.data?.fromOfficeId && response?.data?.toOfficeId) {
      const from = await handleGetOfficeById(response?.data?.fromOfficeId);
      setFromOffice(from);
      const to = await handleGetOfficeById(response?.data?.toOfficeId);
      setToOffice(to);
    }
  }

  useEffect(() => {
    handleGetPackageById();
  }, [order])

  const [isReady, setIsReady] = useState(false);
  const blobUrl = useRef(null);

  // useEffect(() => {
  //   fetch(order?.image)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       blobUrl.current = URL.createObjectURL(blob);
  //       setIsReady(true);
  //     });

  //   return () => {
  //     URL.revokeObjectURL(blobUrl.current);
  //   };
  // }, []);

  console.log(packageInfo);



  return (
    <div className="grid grid-cols-5 bg-[#ededed] p-2 rounded-md">
      <div className="col-span-1 flex items-center justify-center bg-white rounded-md">
        <img src={packageInfo?.image || orderImage} alt="" />
        {/* {isReady && <img src={blobUrl.current} alt="blob" />} */}
>>>>>>> Stashed changes
      </div>
      <div className="col-span-3 px-3">
        <div className="font-semibold text-[#50a4b8] text-sm">
          Mã đơn hàng: {order?.id}
        </div>
        <div className="grid grid-cols-2">
          <div className="font-semibold text-sm col-span-1">
            Tên Sản Phẩm:{" "}
            <span className="text-sm font-normal truncate">{order?.name}</span>
          </div>
          <div className="font-semibold text-sm col-span-1 truncate">
            Khối lượng:{" "}
            <span className="text-sm font-normal">{order?.weight} kg</span>
          </div>
        </div>
        <div className="font-semibold text-sm">
          Địa chỉ:{" "}
          <span className="text-sm font-normal truncate">{order?.address}</span>
        </div>
        <div className="font-semibold text-sm">
          Từ trạm:{" "}
          <span className="text-sm font-normal truncate">
            {order?.fromStationAddress}
          </span>
        </div>
        <div className="font-semibold text-sm">
          Đến Trạm:{" "}
          <span className="text-sm font-normal truncate">
            {order?.toStationAddress}
          </span>
        </div>
      </div>
      <div className="col-span-1 grid grid-rows-3 gap-2">
        <div className="row-span-1 flex items-center gap-2 text-base hover:cursor-pointer text-blue-500 hover:underline">
          <Link to={`/dashboard/order/${order?.id}`}>Xem chi tiết</Link>
        </div>
        <div className="row-span-1 flex justify-center items-center text-base text-blue-500 border-2 border-blue-500 w-full rounded-full">
          {packageInfo?.status === 1 && "Đã xử lý"}
          {packageInfo?.status === 0 && "Chưa xử lý"}
          {packageInfo?.status === -1 && "Đã hủy"}
        </div>
        <div className="row-span-1 text-lg font-semibold text-red-500">
          Tổng tiền: {formatPrice(order?.totalPrice || 0)}
        </div>
      </div>
    </div>
  )
}
