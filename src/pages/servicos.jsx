import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Serviços - Meu app Next.Js</title>
      </Head>
      <h1>Olá Mundo Next.js!</h1>
      <Menu />

      <h2>Serviços</h2>
      <ol>
        <li>Bla Bla Bla</li>
        <li>Bla Bla Bla</li>
        <li>Bla Bla Bla</li>
      </ol>
    </>
  );
}
