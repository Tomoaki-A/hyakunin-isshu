import Head from "next/head";
import { useFetchKaruta } from "src/hooks/useFetchKaruta";

export default function Home() {

  const {karuta,isLoading} = useFetchKaruta();

  console.log(karuta);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className="text-red-600">Hello</div>
    </div>
  );
}
