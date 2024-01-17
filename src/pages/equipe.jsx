import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Equipe - Meu app Next.Js</title>
      </Head>
      <h1>Olá Mundo Next.js!</h1>
      <Menu />

      <h2>Equipe</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dolore
        ad, non incidunt, voluptate magnam cum aperiam nesciunt dicta
        consequuntur quaerat beatae repellendus sint maiores totam, optio
        mollitia? Eveniet dolores quisquam praesentium in eos perspiciatis,
        numquam nam sit quas aperiam dolore minus nesciunt illo perferendis,
        maxime est nisi exercitationem iste!
      </p>
    </>
  );
}
