import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" bottom-0 left-0 right-0 bg-white text-center py-4 text-xl text-black whitespace-nowrap">
      <section className=" shadow-sm bg-white self-center flex w-full max-w-[1685px] grow flex-col -mt-1.5 pt-32 pb-14 px-5 border-4 border-solid border-black max-md:max-w-full mx-auto ">
        <div className="self-center w-full max-w-[1190px] flex flex-col max-md:max-w-full max-md:flex-col max-md:flex">
          <nav className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[15%] max-md:w-full max-md:ml-0">
              <div className=" custom-box-shadow max-h-36 bg-green flex w-[151px] max-w-full grow flex-col mx-auto px-5 py-6 rounded-2xl max-md:mt-10">
                <div className="self-center flex w-[77px] h-[99px] flex-col items-center justify-center">
                  <Image
                    src="/yes_logo_black.svg"
                    alt="Logo"
                    width={53}
                    height={99}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-between grow -mr-0.5 my-auto pl-1 pr-7 py-1 max-md:max-w-full max-md:mb-auto max-md:mx-auto">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <div className="items-start flex flex-col max-md:mt-10">
                      <Link  href="/for-business" className="text-black text-2xl leading-8 self-start whitespace-nowrap">
                        Empresas
                      
                      </Link>
                      <Link  href="/for-suppliers" className="text-black text-2xl leading-8 mt-4 self-start whitespace-nowrap">
                        Proveedores
                      </Link>
                      <Link   href="/use-cases" className="text-black text-2xl leading-8 mt-4 self-start whitespace-nowrap">
                        Casos de uso
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <Link href="/contact" className="text-black text-2xl leading-8 items-start pt-4 self-start whitespace-nowrap max-md:mt-10">
                      Contacto
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col m-auto max-md:max-w-full max-md:mt-10">
              <div className="justify-center items-start flex w-48 max-w-full gap-2 mt-7 self-start max-md:flex max-sm:flex">
               
                <a
                  href="https://www.linkedin.com/company/yes-investments/"
                  className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                >
                  <Image
                    src="/linkedin_f_icon.svg"
                    alt="Image 4"
                    width={48}
                    height={48}
                  />
                </a>
              </div>
            </div>
          </div>
          </nav>
          
        </div>
        <div className="text-black text-xl leading-4 self-center mt-28 whitespace-nowrap  max-md:mt-10  md:max-w-250 lg:max-w-full xl:max-w-full whitespace-pre-line">
          @ 2023 Yes Payment. Todos los derechos reservados.
        </div>
      </section>
    </div>
  );
}
