import Head from "next/head";
import { Karuta } from "src/components/Karuta";
import karutaList from "src/utils/karutaList.json";

export default function Home() {
  const karuta = karutaList.karuta;

  return (
    <div className="tatami">
      <Head>
        <title>Home</title>
      </Head>
      <div>
       <Karuta karuta={karuta}/>
      </div>
    </div>
  );
}
