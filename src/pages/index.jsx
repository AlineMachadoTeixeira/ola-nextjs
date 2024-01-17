import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu app Next.Js</title>
        <meta name="description" contente="Primeira página..." />
      </Head>
      <h1>Olá Mundo Next.js!</h1>
      <Menu />

      <h2>Bem-vindo ao Next.js</h2>
      <h3>Página Inicial</h3>
    </>
  );
}
