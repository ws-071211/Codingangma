import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";

export default function CreateDay(){
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();
    const URL = `http://localhost:3001/days/`;
    function addDay(){
        axios.post(URL, {
          id:  days.length+1,
          day: days.length+1,
        })
        .then((res) => {
          if(res.ok){
            alert("생성이 완료되었습니다.");
            history(`/`);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }

    return(
        <div>
            <h3>
                현재 일수 : {days.length}일
            </h3>
            <button onClick={addDay}>
                Day 추가
            </button>
        </div>
    );
}