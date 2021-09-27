// import logo from "./logo.svg";
// import $ from "jquery"
// import "./home/css/selectize.bootstrap4.css";
// import "./home/js/selectize.js"
// import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../actions";
import HomeMain from "./home/homeMain"
// import { Link } from "react-router-dom"
import HomeOffer from "./home/homeOffer";
import HomeContact from "./home/homeContact";
import HomeAbout from "./home/homeAbout";
import HomeTeam from "./home/homeTeam";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Home() {
    // const counter = useSelector((state) => state.counter);

    // const isLogged = useSelector((state) => state.isLogged);
    // const dispatch = useDispatch();
    // const history = useHistory();
    // const clicks = () => {
    //     history.push('/dealer')
    // }

    // const style = {

    // }
    sessionStorage.setItem("done", 0)
    return (
        <div >

            <HomeMain />
            <HomeOffer />
            <HomeAbout />
            <HomeTeam />
            <HomeContact />


        </div>
    );
}

export default Home;
