import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface PaymentMethod {
  description: string;
  perMonth: string;
  total: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    description: "Cuotas por 3 meses",
    perMonth: "$34,333 por mes",
    total: "$103,000 Total",
  },
  {
    description: "Cuotas por 6 meses",
    perMonth: "$17,667 por mes",
    total: "$106,000 Total",
  },
  {
    description: "Cuotas por 9 meses",
    perMonth: "$12,111 por mes",
    total: "$103,000 Total",
  },
];

const Carousel = () => {
  const responsive = {
    0: { items: 1 },
    600: { items: 1 },
    1024: { items: 1 },
  };

  const containerStyle = {
    width: "600px", // Ajusta el valor según tus necesidades
    margin: "auto", // Centra el contenedor
  };

  return (

    <div style={containerStyle}>
      <AliceCarousel
      mouseTracking
      responsive={responsive}
      items={paymentMethods.map((paymentMethod, index) => (
        <div key={index} className="carousel-item">
          <section className="shadow-sm bg-white flex flex-col items-stretch px-4 border-[4.946px] border-solid border-black max-md:px-5 font-baloo h-96">
            <div className="text-black text-2xl leading-[73.8px] mt-6 max-md:max-w-full max-md:text-2xl max-md:mt-4">
              {paymentMethod.description}
            </div>
            <hr className="bg-black flex shrink-0 h-1.5 flex-col mt-2 max-md:max-w-full max-md:mt-2" />
            <div className="text-black text-xl leading-[73.92px] mt-12 max-md:max-w-full max-md:text-2xl">
              {paymentMethod.perMonth}
            </div>
            <div className="text-black text-neutral-600 text-lg leading-[73.92px] mt-10 mb-6 max-md:max-w-full max-md:text-2xl max-md:my-6">
              {paymentMethod.total}
            </div>
          </section>
        </div>
      ))}
      paddingLeft={70} // Ajusta el valor según tus necesidades
      paddingRight={70} // Ajusta el valor según tus necesidades
    />
    </div>

    
  );
};

export default Carousel;
