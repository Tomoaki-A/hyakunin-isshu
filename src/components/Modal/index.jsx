export const Modal = (props) => {
  const isShow = props.isShow;
  const answerKaruta = props.answerKaruta;

  const toNext = () => {
    props.setGame();
    props.setIsShow(false);
  };

  return (
    <>
      {isShow ? (
        <div className="modal-bg h-full w-screen  absolute top-0 left-1/2 transform -translate-x-1/2 ">
          <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded">
            <div className="text-center text-3xl mb-10">正解！</div>
            <div>
              <div className="text-lg font-bold mb-2">詠み人</div>
              <div className="flex">
                 <p className="pl-4 mb-4 mr-32">{answerKaruta.sakusya}</p>
              <div className="pl-4 w-52">
                <img src={answerKaruta.image} alt="" />
              </div>
              </div>
             
              <div className="text-lg font-bold mb-2">原文</div>
              <p className="pl-4 mb-4">
                {answerKaruta.kami}
                &nbsp;
                {answerKaruta.simo}
              </p>
              <div className="text-lg font-bold mb-2">現代語訳</div>
              <p className="pl-4 mb-4">{answerKaruta.commentary}</p>
            </div>
            <div className="bg-green-400 w-16  text-center ml-auto hover:bg-green-300 p-2 rounded-lg transition">
              <button onClick={toNext}>次へ</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
