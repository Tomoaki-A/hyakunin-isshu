import Head from "next/head";
import karutaList from "src/utils/karutaList.json";

export default function Home() {
  const karuta = karutaList.karuta;

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        {karuta
          ? karuta.map((item, index) => {
              return (
                <div key={index}>
                  <p>{"{"} </p>
                  <p>id:{item.no},</p>
                  <p>kami:"{item.kami}",</p>
                  <p>simo:"{item.simo}",</p>
                  <p>kami_kana:"{item.kami_kana}",</p>
                  <p>simo_kana:"{item.simo_kana}",</p>
                  <p>simo_kana:"{item.sakusya}",</p>
                  <p>{"}"},</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
