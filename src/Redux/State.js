
const ADD_POST = 'ADD-POST';
const UP_DATE_POST = 'UP-DATE-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profileState: {
            postData: [
                {id: 0, text:'I said May', account: 23},
                {id: 1, text:'How are you ancestor', account: 12}
            ],
            newPost: 'It love',
        },
        dialogsState: {
            dialog: [
                {id: '1', name:'Kate'},
                {id: '2', name: 'Iruna'},
                {id: '3', name: 'Andriy'},
                {id: '4', name: 'Nadia'}
            ],
            messageData: [
                {id: '0', text:'Hi. How are you?'},
                {id: '1', text: 'Fine, and you?'},
                {id: '2', text: 'I fine, too!'},
                {id: '3', text: 'Yo'}
               ],
            newMessageData: " "
        }
    
        },
    getState () {
        return this._state
    },
    _callsubscribe () {
        },
    subscration  (observe) {
            this._callsubscribe= observe;
        },
    dispatch(action) {
        if (action.type === 'ADD_POST'){
            let newPostText = {
                id: 3,
                text: this._state.profileState.newPost,
                account: 0
            }
    
            this._state.profileState.postData.push(newPostText);
            this._state.profileState.newPost= '';
            this._callsubscribe(this._state);
        } else if (action.type ==='UP_DATE_POST'){
            this._state.profileState.newPost = action.textmessage;
            this._callsubscribe(this._state);
        } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.dialogsState.newMessageData = action.body;
            this._callsubscribe(this._state);
        } else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogsState.newMessageData;
            this._state.dialogsState.newMessageData = " ";
            this._state.dialogsState.messageData({id:4, textmessage: body });
            this._callsubscribe(this._state);
        }
        
    }
   
}

 export const addPostActionCreate = () => {
    return {
        type: 'ADD_POST'
    }
}

export const upDatePostActionCreate = (text) => {
    return {
        type: 'UP_DATE_POST', textmessage: text
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})
export const upDateNewMessageBody =(body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body:body})
     export default store;
     window.store = store;