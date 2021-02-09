import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import DialogsItems from "./DialogsItem/Dialogsitem";
import Message from "./Messages/Message";


const Dialogs = (props) => {
   
    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {props.state.dialog.map(DialogsItems)}
            </div>
            <div className={s.messages}>
            <div> {props.state.messageData.map(Message)}</div>
            <div><textarea placeholder='Enter your message'></textarea></div>
            <div><button onClick={()=> {alert('dfd');}}>Send</button></div>
            </div>
    </div>)
}

export default Dialogs;