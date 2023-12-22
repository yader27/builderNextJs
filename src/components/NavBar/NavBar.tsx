import { Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const navLinks = [
    { href: "/home", label: "Inicio" },
    { href: "/for-business", label: "Para negocios" },
    { href: "/for-suppliers", label: "Para proveedores" },
    { href: "/use-cases", label: "Casos de uso" },
    { href: "/fa-qs", label: "FAQ" },
  ];

  const handleMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  console.log(router)

  return (
    <header className="  bg-gray-dark rounded-full w-full  mr-auto h-20 fixed top-5 z-50  flex justify-between items-center ">
      <div
        className="mx-8  flex items-center w-full  p-6 lg:px-8 justify-between"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/home">
            <span className="sr-only">Your Company</span>
            <Image
              width={48}
              height={48}
              className="mr-20"
              src="/yes_logo_white.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={handleMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-12">
          {navLinks.map((navLink) => (
            <Link href={navLink.href} key={navLink.href}>
              <p
                className={`text-zinc-50 text-2xl leading-8 self-center cursor-pointer pointer-events-auto mb-auto whitespace-nowrap 
                ${
                  router.asPath === navLink.href
                    ? "text-green border-b-2 border-green"
                    : "hover:text-green hover:border-b-2 hover:border-green"
                } 
                transition duration-300 ease-in-out`}
              >
                {navLink.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end h-11 ml-4">
          <Link
            href="/contact"
            className="shadow-solid-green justify-center items-center  border-[color:var(--Secondary,#C7FDD0)] self-stretch flex w-[104px] flex-col border bg-stone pl-1 py-0.5 rounded-2xl border-solid border-green"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile Menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-hidden"
            onClose={handleMenuOpen}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-y-0 right-0 max-w-full flex ">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="w-screen max-w-md bg-black">
                    {/* Mobile Menu Content */}
                    <div className="flex justify-end p-4">
                      <div
                        className={styles.closeContainer}
                        onClick={handleMenuOpen}
                      >
                        <div className={styles.leftright}></div>
                        <div className={styles.rightleft}></div>
                        <span id={styles.closeTitle} className={styles.close}>
                          close
                        </span>
                      </div>
                    </div>

                    <div className="p-12 flex flex-col gap-4 ">
                      {/* Mobile Menu Links */}
                      {/* Use the same navigation links as in the desktop version */}
                      <Link
                        href="/home"
                        onClick={handleMenuOpen}
                        className="text-zinc-50 text-2xl leading-8 cursor-pointer pointer-events-auto mb-auto whitespace-nowrap hover:scale-105 transition-transform"
                      >
                        Inicio
                      </Link>

                      <Link
                        href="/for-business"
                        onClick={handleMenuOpen}
                        className="text-zinc-50 text-2xl leading-8 cursor-pointer pointer-events-auto mb-auto whitespace-nowrap hover:scale-105 transition-transform"
                      >
                        Para negocios
                      </Link>

                      <Link
                        href="/for-suppliers"
                        onClick={handleMenuOpen}
                        className="text-zinc-50 text-2xl leading-8 cursor-pointer pointer-events-auto mb-auto whitespace-nowrap hover:scale-105 transition-transform"
                      >
                        Para proveedores
                      </Link>

                      <Link
                        href="/use-cases"
                        onClick={handleMenuOpen}
                        className="text-zinc-50 text-2xl leading-8 cursor-pointer pointer-events-auto mb-auto whitespace-nowrap hover:scale-105 transition-transform"
                      >
                        Casos de uso
                      </Link>

                      <Link
                        onClick={handleMenuOpen}
                        className="text-zinc-50 text-2xl leading-8 cursor-pointer pointer-events-auto mb-auto whitespace-nowrap hover:scale-105 transition-transform"
                        href="/fa-qs"
                      >
                        FAQ
                      </Link>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </header>
  );
}
