import Herotext from "../components/Herotext";
const Contact = () => {
  const couses = [
    {
      title: "Sales",
      desc: " ExperHỗ trợ bán hàng chuyên nghiệp cho tất cả khách hàng. Đội ngũ bán hàng của chúng tôi được dành riêng để cung cấp hướng dẫn chuyên môn cho khách hàng",
      phn: "1800 123 4567",
    },
    {
      title: "Complaints",
      desc: "Chúng tôi coi trọng sự hài lòng của khách hàng và cố gắng giải quyết mọi khiếu nại một cách kịp thời và hiệu quả",
      phn: "1800 123 4567",
    },
    {
      title: "Returns",
      desc: "Trả lại và trao đổi miễn phí. Chúng tôi hiểu rằng đôi khi các sản phẩm không hoạt động hiệu quả.",
      phn: "1800 123 4567",
    },
    {
      title: "Marketing",
      desc: "Nhóm tiếp thị của chúng tôi hợp tác làm việc với các doanh nghiệp để giúp họ phát triển và thành công",
      phn: "1800 123 4567",
    },
  ];
  return (
    <section>
      <Herotext textt="Liên Hệ Với Chúng Tôi" />
      <div className="py-16 ">
        <h2 className="text-5xl text-gray-700 font-semibold text-center pb-5 ">
          Đội Ngũ Bộ Phận
        </h2>
        <div className="flex w-[85%] mx-auto gap-5  py-10 px-0">
          {couses &&
            couses.map((cause) => {
              return (
                <div className="text-center bg-gray-50 rounded-lg flex flex-col gap-3 py-10 px-5">
                  <h3 className="text-gray-900 font-semibold text-2xl">
                    {cause.title}
                  </h3>
                  <p className="text-lg text-gray-700">{cause.desc}</p>
                  <a
                    href={`tel:${cause.phn}`}
                    className="text-sky-500 font-semibold text-xl"
                  >
                    {cause.phn}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
