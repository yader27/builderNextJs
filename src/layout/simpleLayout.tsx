import Head from "next/head";
import { FC } from "react";
import { NavBar, Footer } from "@/components";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: React.ReactNode;
}

export const SimpleLayout: FC<Props> = ({
  children,
  title,
  imageFullUrl,
  pageDescription,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/ridivilogo.png" />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <nav>
        {" "}
        <NavBar></NavBar>
      </nav>
      <main style={{
        
      }} >
        {children}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
