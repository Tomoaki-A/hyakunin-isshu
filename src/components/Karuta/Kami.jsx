import classes from "src/components/Karuta/karuta.module.css";

export const Kami = (props) => {
  const kami = props.kami;
  const simo = props.simo;
  return (
    <>
      {kami ? (
        <div className={classes.yomiArea}>
          <div className={classes.yomi}>
            <div>{kami ? kami : null}</div>
            <div>{simo ? simo : null}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};
