export const Menu = (props) => {
  return (
    <header className="h-28 flex gap-5 items-center justify-center">
      <div>
        <button onClick={props.start}>スタート</button>
      </div>

      <div className="flex gap-5" onChange={props.onChangeValue}>
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
  );
};
