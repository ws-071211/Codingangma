import axios from "axios";
import { useState } from "react";

export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  const URL = `http://localhost:3001/words/${word.id}`;
  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    // setIsDone(!isDone);
    axios.put(URL,{
      ...word,
      isDone: !isDone,
    }).then(res=>{
      if(res.ok){
        setIsDone(!isDone);
      }
    })
    .catch((error) => {
      console.log(error);
    })

  }

  function del(){
    if(window.confirm("삭제하시겠습니까?")){
      axios.delete(URL).then(res=>{
        if(res.ok){
           setWord({id:0});
        }
      }).catch((error)=>{
        console.log(error);
      });
    }
  }

  if(word.id=== 0){
    return null;
  }
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button onClick={del} className="btn_del">삭제</button>
      </td>
    </tr>
  );
}