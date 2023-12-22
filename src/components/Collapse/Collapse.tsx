import { useState, useEffect } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqComponent: React.FC = () => {
  const [faqData, setFaqData] = useState<FaqItem[]>([
    {
      question: "¿Qué es Yes?",
      answer:
        "YES es la plataforma de pago para empresas que desean pagar de manera más sencilla y recibir pagos más rápidamente. Nuestro proceso de pago seguro permite a nuestros socios y sus clientes comerciales Pagar Ahora o Pagar Más Tarde durante un máximo de 6 meses.",
    },
    {
      question: "¿Cómo funciona YES?",
      answer:
        "YES se puede acceder a través de una plataforma de pago asociada para realizar pagos inmediatos o diferidos en facturas.\n Las empresas también pueden acceder directamente a YES para pagar facturas elegibles de manera flexible durante un periodo de 2 a 6 meses, sujeto a aprobación.\n  YES utiliza datos bancarios para establecer límites de crédito y para habilitar pagos en tiempo real en su plataforma de pago.",
    },
    {
      question: "¿Dónde debe estar ubicada mi empresa?",
      answer:
        "Para utilizar el sistema de pago de YES, el usuario final debe estar ubicado en Costa Rica.\n Actualmente, solo ofrecemos la opción de Pagar Ahora a clientes en los Costa Rica.\n Para la opción de Pagar Más Tarde, pagamos a proveedores en Costa Rica.",
    },
    {
      question: "¿Cómo puedo ofrecer el sistema de pago de YES a mis clientes?",
      answer:
        "Por favor, dirígete a nuestra página de Productos aquí para obtener más información y reservar una demostración.",
    },
    {
      question: "¿Puedo referir a otra empresa a YES?",
      answer:
        "Sí, puedes ganar una tarjeta de regalo de $150 por cada nueva empresa que invites y que utilice Pagar con YES para una factura de más de $5,000.\n La persona a la que invites también recibirá una tarjeta de regalo de $250. Se aplican condiciones, puedes encontrar más información aquí.",
    },
    {
      question: "¿Dónde puedo encontrar sus términos y condiciones?",
      answer:
        "Puedes encontrar nuestros términos y condiciones y otros documentos, como nuestra política de privacidad, en nuestro Centro Legal dedicado aquí.",
    },
    // Agrega más preguntas y respuestas según sea necesario
  ]);

  useEffect(() => {
    // Simulando la carga de datos desde el JSON (puedes utilizar fetch o axios para cargar datos reales)
    const fetchData = async () => {
      try {
        const response = await fetch("/path/to/faqData.json");
        const data: FaqItem[] = await response.json();
        setFaqData(data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {faqData.map((item, index) => (
        <details
          key={index}
          className="text-black shadow-lg items-start self-stretch bg-white bg-opacity-0 flex flex-col px-5 py-5 border-2 border-solid border-black max-md:max-w-full open:bg-amber-200 duration-300 my-6"
        >
          <summary className="cursor-pointer font-baloo">{item.question}</summary>
          <div className="justify-between items-start self-center flex w-full max-w-[1502px] gap-5 max-md:max-w-full max-md:flex-wrap">
            {/* Contenedor principal */}

            {/* Contenido del detalle (div) */}
            <div className="px-5 py-3 text-sm font-light">
              <p className="font-baloo text-gray-light">
                {item.answer.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
};

export default FaqComponent;
