import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();
  return (
    <section className="consultation flex items-center   py-10 h-[20rem] ">
      <div className="w-[90%] mx-auto flex justify-evenly items-center">
        <div className="flex container text-gray-50 flex-col  gap-4  ">
          <h1 className="text-4xl w-[80%] ">
          Bạn đang bối rối không biết sản phẩm nào phù hợp với mình?
          </h1>
          <h1 className="text-4xl font-semibold w-[80%] text-sky-500">
          Cần tư vấn?
          </h1>
          <p className="text-lg">Nhận giải pháp cuối cùng từ tài năng của chúng tôi</p>
        </div>
        <button
          className="text-gray-50 border rounded-full border-sky-500 px-10 bg-sky-500 py-3"
          onClick={() => navigate("booking")}
        >
          Book
        </button>
      </div>
    </section>
  );
};

export default Consultation;
