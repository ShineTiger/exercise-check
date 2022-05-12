import { useState } from "react";

const Editor = () => {
  const [valueState, setValueState] = useState({
    nickname: "",
    Start: "",
    goal:"",
    minute: 0,
    timesWeek: 0,
    penalty: "",
  });

  const handleChangeValue = (event) => {
    setValueState({
      ...valueState,
      [event.target.name]: event.target.value
    })
  };

  const handleCheckFile = (event) => {
    let isTrusted = event.isTrusted;
    console.log(isTrusted)
  };

  const handleSubmit = () => {
    console.log(valueState)
  };

  // const [isTrusted,setIstrusted] = useState();

  // const handleChangeIstrusted = (event) =>{
  //   console.log(isTrusted);
  //   setIstrusted(true);
    
  // }
  // input type="file"은 state초기값을 false로 해놓으면 맨처음파일 첨부할때 false가 되버림
  //CheckFile을 했을때 valueState에 속성을 추가해야 하는게 맞겠지? 아니면 새로운 state값을 줘야하나..

  return (
    <div>
      <div>
        <input name="nickname" value={valueState.nickname} onChange={handleChangeValue} required></input>
      </div>
      <div>
        <input name="start" type="date" value={valueState.calendar} onChange={handleChangeValue}></input>
        <input name="goal" type="date" value={valueState.calendar} onChange={handleChangeValue}></input>
      </div>
      <div>
        <label>주 </label>
          <select name="timesWeek" value={valueState.timesWeek} onChange={handleChangeValue} >
              <option value={2}>2회</option>
              <option value={3}>3회</option>
              <option value={4}>4회</option>
              <option value={5}>5회</option>
          </select>
      </div>
      <div>
          <select name="penalty" value={valueState.penalty} onChange={handleChangeValue} >
              <option value={"sing"}>노래</option>
              <option value={"show"}>일인역극</option>
              <option value={"rap"}>랩</option>
          </select>
      </div>
      <div>
        <input type="file" name="certify" accept="image/*" onClick={handleCheckFile}></input>
      </div>
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};

export default Editor;
