// import logo from "./logo.svg";
// import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions";
import { decrement } from "../actions";

function Admin() {
    const counter = useSelector((state) => state.counter);

    const isLogged = useSelector((state) => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>Hi, Welcome to Redux</h1>
            <h3>Counter:{counter}</h3>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            {isLogged ? <h3>Some valuble info here</h3> : ""}
        </div>
    );
}

export default Admin;
