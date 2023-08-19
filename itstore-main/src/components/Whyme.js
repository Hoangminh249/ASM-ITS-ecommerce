import {
  FaGlobe,
  FaCertificate,
  FaPercentage,
  FaShieldAlt,
} from "react-icons/fa";

const Whyme = () => {
  return (
    <section className=" bg-gray-50 pb-20">
      <div className="container mx-auto flex flex-col gap-5">
        <h2 className="text-4xl py-14 text-center font-semibold text-gray-700">
          Sự lựa chọn hoàn hảo
        </h2>
        <div className="grid grid-cols-4 gap-10 justify-between">
          <div className="text-center  flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaGlobe className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl text-gray-900 font-semibold">
              Giao hàng trên toàn thế giới
            </h1>
            <p className="text-gray-700 text-lg">
              Chúng tôi cung cấp vận chuyển trên toàn thế giới để làm cho sản
              phẩm của chúng tôi có thể truy cập được khách hàng trên toàn thế
              giới.
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaCertificate className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl font-semibold">Chất lượng tốt nhất</h1>
            <p className="text-gray-700 text-lg">
              Chúng tôi tin rằng chỉ cung cấp cho khách hàng chất lượng tốt nhất
              các sản phẩm.
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaPercentage className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl font-semibold">Ưu đãi tốt nhất</h1>
            <p className="text-gray-700 text-lg">
              Chúng tôi tự hào về việc cung cấp các ưu đãi và giảm giá tốt nhất
              cho khách hàng.
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaShieldAlt className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl font-semibold">Thanh toán an toàn</h1>
            <p className="text-gray-700 text-lg">
            Chúng tôi cung cấp một loạt các tùy chọn thanh toán an toàn để đảm bảo rằng bạn
              Các giao dịch được an toàn và an toàn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyme;
