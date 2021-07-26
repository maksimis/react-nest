import {useHistory} from "react-router-dom";

function Logout(){
    let history = useHistory();
    history.push("/")
}