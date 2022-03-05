import { useState } from "react";
import classes from "src/components/Karuta/karuta.module.css";

export const Karuta = (props) => {
  let karuta = props.karuta;
  let now = null;
  const [answer, setAnswer] = useState(null);
  const [kami, setKami] = useState(null);
  const [simo, setSimo] = useState(null);

  //空白を削除
  const removeBlank = () => {
    karuta.map((karuta) => {
      karuta.simo_kana = karuta.simo_kana.replace(/\s+/g, "");
    });
  };
  removeBlank();
  karuta = karuta.slice(0, 20);

  const start = () => {
    setAnswer(null);
    setKami(null);
    setSimo(null);
    const num = Math.floor(Math.random() * 20);
    now = karuta[num];
    setAnswer(now.id);
    setKami(now.kami);
    setTimeout(() => {
      setSimo(now.simo);
    }, 3000);
  };

  const check = (target) => {
    const clicked = target.id;
    const id = Number(clicked)
    console.log(id);
    console.log(answer);
    if (id === answer) {
      alert("正解");
      start();
    } else {
      alert("不正解");
    }
  };

  return (
    <div>
      <div>カルタ</div>
      <div>
        <button onClick={start}>スタート</button>
      </div>
      <div className="flex">
        <div className="flex gap-4 w-3/4 flex-wrap">
          {karuta.map((karuta, index) => {
            return (
              <div
                key={index}
                className="w-44 h-64 border-8 border-green-700"
                onClick={(e) => check(e.target)}
              >
                <div id={karuta.id} className={classes.text}>
                  {karuta.simo_kana}
                </div>
              </div>
            );
          })}
        </div>
        <div className={classes.yomi}>
          <div>{answer ? answer : null}</div>
          <div>{kami ? kami : null}</div>
          <div>{simo ? simo : null}</div>
        </div>
      </div>
    </div>
  );
};
