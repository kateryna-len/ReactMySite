import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogsItems = (props) => {
    const path = /dialogs/ + props.id
    return (<div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>   
   </div>)
}

const Message = (props) => {
    return (<div className={s.message}>
        {props.text}
    </div>)
}

const Dialogs = () => {
    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogsItems name="Kate" id="1"/>
            <DialogsItems name="Iruna" id="2"/>
            <DialogsItems name="Andriy" id="3"/>
            <DialogsItems name="Nadia" id="4"/>
            </div>
            <div className={s.messages}>

            <Message text="Hi. How are you?" />
            <Message text="Fine, and you?" />
            <Message text="I'm fine, too!" />
                

        </div>
    </div>)
}

export default Dialogs;