import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Contact } from "@/interfaces";
import { saveContact, sendMail } from "@/utils/contact";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Contact>();

  const [isSubmitSuccessful, setSubmitSuccessful] = React.useState(false);

  const onSubmit: SubmitHandler<Contact> = async (data) => {
    await saveContact(data);
    await sendMail(data)
    setSubmitSuccessful(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="items-center shadow-sm bg-white flex flex-col px-5 border-[4.242px] border-solid border-black"
    >
      <br />
       {isSubmitSuccessful && (
            <div
              className="rounded-2xl flex items-center bg-green text-black text-sm font-bold px-4 py-3"
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p> ¡El contacto se envió exitosamente! </p>
            </div>
          )}
      <div className="items-stretch flex w-full max-w-[635px] flex-col mt-10 mb-24 max-md:max-w-full max-md:mb-10">
        <h2 className="text-black text-neutral-600 text-2xl leading-8 max-md:max-w-full">
          Contáctanos hoy mismo para cobrar más rápido y de manera más sencilla
          con una plataforma de pago única
        </h2>
        <div className="items-start flex flex-col mt-8 max-md:max-w-full">
          {/* Campo de nombre completo */}
          <div className="items-stretch self-stretch flex flex-col mt-9 max-md:max-w-full">
            <label
              htmlFor="full-name"
              className="text-black text-base leading-6 whitespace-nowrap max-md:max-w-full"
            >
              Nombre completo *
            </label>
            <input
              {...register("fullName", {
                required: "Este campo es obligatorio",
              })}
              type="text"
              id="text"
              className={`${
                errors.email ? "border-red" : ""
              } mt-4 appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            />
            {errors.fullName && (
              <p className="text-red text-xs italic">
                {errors.fullName.message}
              </p>
            )}
          </div>
          {/* Campo Email */}
          <div className="items-stretch self-stretch flex flex-col mt-9 max-md:max-w-full">
            <label
              htmlFor="email"
              className="text-black text-base leading-6 whitespace-nowrap max-md:max-w-full"
            >
              Email *
            </label>
            <input
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Dirección de correo electrónico inválida",
                },
              })}
              type="text"
              id="fullName"
              className={`${
                errors.fullName ? "border-red" : ""
              } mt-4 appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            />
            {errors.email && (
              <p className="text-red text-xs italic">
                {errors.fullName?.message}
              </p>
            )}
          </div>

          {/* Campo Teléfono */}
          <div className="items-stretch self-stretch flex flex-col mt-6 max-md:max-w-full">
            <label
              htmlFor="phone"
              className="text-black text-base leading-6 whitespace-nowrap max-md:max-w-full"
            >
              Teléfono *
            </label>
            <input
              {...register("phone", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Número de teléfono inválido",
                },
              })}
              type="tel"
              id="phone"
              className={`${
                errors.phone ? "border-red" : ""
              } mt-4 appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            />
            {errors.phone && (
              <p className="text-red text-xs italic">{errors.phone.message}</p>
            )}
          </div>

          {/* Campo Nombre de la Compañía */}
          <div className="items-stretch self-stretch flex flex-col mt-6 max-md:max-w-full">
            <label
              htmlFor="company-name"
              className="text-black text-base leading-6 whitespace-nowrap max-md:max-w-full"
            >
              Nombre Compañía
            </label>
            <input
              {...register("companyName")}
              type="text"
              id="company-name"
              className={`${
                errors.companyName ? "border-red" : ""
              } mt-4 appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            />
            {errors.companyName && (
              <p className="text-red text-xs italic">
                {errors.companyName.message}
              </p>
            )}
          </div>

          {/* Campo jobTitle */}
          <div className="items-stretch self-stretch flex flex-col mt-6 max-md:max-w-full">
            <label
              htmlFor="jobTitle"
              className="text-black text-base leading-6 whitespace-nowrap max-md:max-w-full"
            >
              Puesto
            </label>
            <input
              {...register("jobTitle")}
              type="text"
              id="title"
              className={`${
                errors.jobTitle ? "border-red" : ""
              } mt-4 appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            />
            {errors.jobTitle && (
              <p className="text-red text-xs italic">
                {errors.jobTitle.message}
              </p>
            )}
          </div>

          {/* Mensaje de privacidad */}
          <p className="text-blue-400 text-sm leading-5 self-stretch mt-6 max-md:max-w-full">
            <span className="text-black text-neutral-600">
              Los campos marcados con * son obligatorios. Por favor, asegúrate
              de completar toda la información necesaria antes de enviar el
              formulario.
              <br />
              <br />
              Para obtener información sobre cómo YES Investments maneja los
              datos personales, consulta nuestra declaración de privacidad en
              nuestro sitio web.
              <br />
            </span>
            <a href="#" className="text-blue-400">
              privacy policy
            </a>
          </p>

         

          {/* Botón de Enviar */}
          <div className="items-stretch flex w-[115px] max-w-full flex-col mt-6 rounded-2xl self-start">
            <button
              type="submit"
              className="justify-center items-stretch  bg-black flex flex-col py-1 rounded-2xl border-solid"
            >
              <span className="text-green text-zinc-50 text-lg leading-7 whitespace-nowrap bg-lime-400 px-5 py-3 rounded-2xl max-md:pl-px">
                Enviar
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
