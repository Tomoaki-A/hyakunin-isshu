// import Head from "next/head";
// import { useEffect, useState } from "react";

// export default function Home() {

//   const [karuta, setKaruta] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("http://api.aoikujira.com/hyakunin/get2.php?fmt=json");
//       const data = await res.json();
//       setKaruta(data);
//     }
//     fetchData();
//   },[])


//   return (
//     <div>
//       <Head>
//         <title>テスト</title>
//       </Head>
//       <div>
//       {karuta ? karuta.map((karuta, index) => {
//         return (
//           <div key={index}>
//             <div>{"{"}</div>
//             <div>"id":{karuta.no},</div>
//             <div>"kami":"{karuta.kami}",</div>
//             <div>"simo":"{karuta.simo}",</div>
//             <div>"kami_kana":"{karuta.kami_kana}",</div>
//             <div>"simo_kana":"{karuta.simo_kana}",</div>
//             <div>"sakusya":"{karuta.sakusya}",</div>
//             <div>"image":"{karuta.image}"</div>
//             <div>{"},"}</div>
//           </div>
//         )
//       }) : null}
//       </div>
//     </div>
//   );
// }
