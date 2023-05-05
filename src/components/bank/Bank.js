import React, {useState} from 'react';
import "./bank.css"
import {useDispatch, useSelector} from "react-redux";
import bank from "../../asets/img/bank1.jpg"
import user from "../../asets/img/user.png"
const Bank = () => {
    const [get,setGet] = useState("")
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    const sum = useSelector(state => state.sum)
    console.log(sum)

    const addCash = () => {
        dispatch({type: "ADD_CASH",payload: +get})
        dispatch({type: "GET_USER",payload: +get})
    }
    const getCash = () => {
        dispatch({type: "GET_CASH",payload: +get})
        dispatch({type: "ADD_USER",payload: +get})
    }
    return (
        <div className="bank">
            <div className="cash">{cash}$</div>
            <img src={bank} alt="img"/>
            <center>
                <input type="text" onChange={(e) =>{
                    setGet(e.target.value)
                }}/>
                <div className="btn">
                    <button onClick={() => addCash()} disabled={sum === 0}>Добавить</button>
                    <button onClick={() => getCash()} disabled={cash === 0}>Снимать</button>
                </div>
            </center>
            <img className="user" src={user} alt=""/>
            <div className="cash">{sum}$</div>
        </div>
    );
};

export default Bank;