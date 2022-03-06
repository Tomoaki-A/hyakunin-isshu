import { useEffect, useState } from "react";
import { Kami } from "src/components/Karuta/Kami";
import { KarutaListCom } from "src/components/Karuta/KarutaList";
import { Menu } from "src/components/Karuta/Menu";
import { Modal } from "src/components/Modal";

let displayKaruta = null;

export const Karuta = (props) => {
  const [karuta, setKaruta] = useState(props.karuta);
  const [displayKarutaNum, setDisplayKarutaNum] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [kami, setKami] = useState(null);
  const [simo, setSimo] = useState(null);
  const [karutaList, setKarutaList] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [answerKaruta, setAnswerKaruta] = useState(null);

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
    setGame();
  };

  // ラジオボタンの選択が更新されるたびにカルタ表示
  useEffect(() => {
    display();
    setKarutaList(displayKaruta);
    setKami(null);
    setSimo(null);
    setAnswer(null);
  }, [displayKarutaNum]);

  // 正誤チェック
  const check = (target) => {
    if (!answer) {
      return;
    }
    const clicked = target.id;
    const id = Number(clicked);
    if (id === answer) {
      setIsShow(true);
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
    const now = displayKaruta[num];
    setAnswer(now.id);

    setKami(now.kami);

    setAnswerKaruta(now);
    setTimeout(() => {
      setSimo(now.simo);
    }, 3000);
  };

  return (
    <div className="relative">
      <Menu start={start} onChangeValue={onChangeValue} />
      <div className="flex gap-10">
        <div className="flex gap-4 w-3/4 flex-wrap justify-center p-8">
          <KarutaListCom karutaList={karutaList} check={check} />
        </div>
        <Kami kami={kami} simo={simo} />
      </div>
      <Modal
        isShow={isShow}
        setGame={setGame}
        setIsShow={setIsShow}
        answerKaruta={answerKaruta}
      />
    </div>
  );
};
