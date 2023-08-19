const  Herotext = ({ textt }) => {
  // const backgroundImageUrl = "https://i.pinimg.com/736x/7c/b5/49/7cb5492889809cb8303b76b80759f0df.jpg";
  // const heroStyle = {
  //   backgroundImage: `url(${backgroundImageUrl})`,
  // };

  return (
    <section className="flex items-center justify-center h-[20rem] herobg" >
      <h1 className="text-6xl font-semibold text-gray-50">{textt}</h1>
    </section>
  );
};

export default Herotext;
