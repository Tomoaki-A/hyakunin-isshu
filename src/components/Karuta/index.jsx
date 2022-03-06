import { useState } from "react";
import classes from "src/components/Karuta/karuta.module.css";

let displayKaruta = null;

export const Karuta = (props) => {
  const [karuta, setKaruta] = useState(props.karuta);
  const [displayKarutaNum, setDisplayKarutaNum] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [kami, setKami] = useState(null);
  const [simo, setSimo] = useState(null);
  const [karutaList, setKarutaList] = useState(null);

  //カルタの空白を削除
  (() => {
    karuta.map((karuta) => {
      karuta.simo_kana = karuta.simo_kana.replace(/\s+/g, "");
    });
  })();

  // スタート
  const start = () => {
    if (!displayKarutaNum) {
      alert("表示する百人一首を選択してください");
      return;
    }
    // 新しいカルタ表示

    display();
    setKarutaList(displayKaruta);
    setGame();
  };

  // 正誤チェック
  const check = (target) => {
    const clicked = target.id;
    const id = Number(clicked);
    if (id === answer) {
      alert("正解");
      setGame();
    } else {
      alert("不正解");
    }
  };

  // 表示カルタ選択
  const onChangeValue = (e) => {
    setDisplayKarutaNum(e.target.value);
  };

  // 表示カルタ選択
  const display = () => {
    switch (displayKarutaNum) {
      case "20":
        displayKaruta = karuta.slice(0, 20);
        break;
      case "40":
        displayKaruta = karuta.slice(20, 40);
        break;
      case "60":
        displayKaruta = karuta.slice(40, 60);
        break;
      case "80":
        displayKaruta = karuta.slice(60, 80);
        break;
      case "100":
        displayKaruta = karuta.slice(80, 100);
        break;
      default:
    }
  };

  // ゲームをセット
  const setGame = () => {
    // 初期化
    setAnswer(null);
    setKami(null);
    setSimo(null);

    const num = Math.floor(Math.random() * 20);

    console.log(displayKaruta);

    const now = displayKaruta[num];
    setAnswer(now.id);
    setKami(now.kami);
    setTimeout(() => {
      setSimo(now.simo);
    }, 3000);
  };

  return (
    <div>
      <header className="h-28 flex gap-5 items-center justify-center">
        <div>
          <button onClick={start}>スタート</button>
        </div>

        <div className="flex gap-5" onChange={onChangeValue}>
          <div>
            <input type="radio" name="karuta" id="1" value="20" />
            <label htmlFor="1">No.1 ~ No.20</label>
          </div>
          <div>
            <input type="radio" name="karuta" id="2" value="40" />
            <label htmlFor="2">No.21 ~ No.40</label>
          </div>
          <div>
            <input type="radio" name="karuta" id="3" value="60" />
            <label htmlFor="3">No.41 ~ No.60</label>
          </div>
          <div>
            <input type="radio" name="karuta" id="4" value="80" />
            <label htmlFor="4">No.61 ~ No.80</label>
          </div>
          <div>
            <input type="radio" name="karuta" id="5" value="100" />
            <label htmlFor="5">No.81 ~ No.100</label>
          </div>
        </div>
      </header>

      <div className="flex">
        <div className="flex gap-4 w-3/4 flex-wrap">
          {karutaList
            ? karutaList.map((karuta, index) => {
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
              })
            : null}
        </div>
        {kami ? (
          <div className={classes.yomiArea}>
            <div className={classes.yomi}>
              <div>{kami ? kami : null}</div>
              <div>{simo ? simo : null}</div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
