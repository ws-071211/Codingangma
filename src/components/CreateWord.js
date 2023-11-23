import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch"
import { useRef } from "react";
import axios from "axios";
export default function CreateWord(){
    const days = useFetch(`http://localhost:3001/days`);
    const history = useNavigate();
    const URL = `http://localhost:3001/words/`;

    const EngRef = useRef(null);
    const DayRef = useRef(null);
    const KorRef = useRef(null);
    function onSubmit(e){
        e.preventDefault();

        console.log(EngRef.current.value);
        console.log(KorRef.current.value);
        console.log(DayRef.current.value);

        // axios(`http://localhost:3001/words/`,{
        //     method:'POST',
        //     headers:{
        //       'Content-Type':'application/json',
        //     },
        //     data: Refarr,
        //   }).then(res=>{
            
        //   });

          axios.post(URL, {
              day:DayRef.current.value,
              eng:EngRef.current.value,
              kor:KorRef.current.value,
              isDone:false,
          })
          .then((res) => {
            if(res.ok){
              alert("생성이 완료되었습니다.");
              history(`/day/${DayRef.current.value}`);
            }
          })
          .catch((error) => {
            console.log(error);
          })
    }

    return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>
                eng
            </label>
            <input type="text" placeholder="computer" ref={EngRef}/>
        </div>
        <div className="input_area">
            <label>
                kor            
            </label>
            <input type="text" placeholder="컴퓨터" ref={KorRef}/>
        </div>
        <div className="input_area">
            <label>
                day
            </label>
            <select ref={DayRef}>{days.day&&days.day.map(day=>(
                <option key={day.id} value={day.day}>
                    {day.day}
                </option>
            ))}

            </select>
        </div>
        <button>저장</button>
    </form>)
}