import { useState } from "react";

const Editor = () => {
  const [state, setState] = useState({
    name: "",
    date: 0,
    minute: 0,
    timesWeek: 0,
    penalty: "",
    certify: "",
  });

  return (
    <div>
      <div>
        <input></input>
      </div>
      <div>
        <input type="date" required></input>
      </div>
      <div>
          <select>
              <option>주3회</option>
              <option>주2회</option>
          </select>
      </div>
      <div>
          <select>
              <option>노래</option>
              <option>일인역극</option>
              <option>랩</option>
          </select>
      </div>
      <div>
          <p>인증방식</p>
      </div>
    </div>
  );
};

export default Editor;
