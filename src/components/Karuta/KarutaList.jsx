import classes from "src/components/Karuta/karuta.module.css";

export const KarutaListCom = (props) => {
  const karutaList = props.karutaList;
  
  return (
    <>
      {karutaList
        ? karutaList.map((karuta, index) => {
            return (
              <div
                key={index}
                className="w-44 h-64 border-8 border-green-700"
                onClick={(e) => props.check(e.target)}
              >
                <div id={karuta.id} className={classes.text}>
                  {karuta.simo_kana}
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};
