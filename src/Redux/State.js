import { renderEntireTree } from "../render"

let state = {
    profileState: {
        postData: [
            {id: 0, text:'I said May', account: 23},
            {id: 1, text:'How are you ancestor', account: 12}
        ]
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
           ]
    }

    }

   export let addPost = (postMessage) => {
        let newPost = {
            id: 3,
            text: postMessage,
            account: 0
        }

        state.profileState.postData.push(newPost);
        renderEntireTree(state);
    }
     export default state;