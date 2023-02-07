import messages from "../helpers/messages";

import botImg from "../img/bot-img.png";
import userImg from "../img/person-img.png";

import { useState } from "react";

function messageConstructor (txt, type) {
    let img = botImg;
    
    if (type == 'user') {
        img = userImg;
    }

    return (
        <div class={`${type}-message`}>
            <img class="user-img" src={ img } />
            <p>{ txt }</p>
        </div>
    )
}

function Chat () {
    const [userMessage, setUserMessage] = useState('');

    const [actualQuestion, setActualQuestion] = useState(1);
    const [showMessages, setShowMessages] = useState(messages.slice(0, actualQuestion));

    const [btnDisable, setBtnDisable] = useState(false);

    function handleMessage (e) {
        e.preventDefault();

        const addUserMessage = {
            type: 'user',
            message: userMessage
        }

        if (actualQuestion == messages.length) {
            const thankYouMessage = {
                type: 'bot',
                message: "Obrigado por testar esse projeto!"
            }

            setBtnDisable(true);
            setUserMessage('');
            setShowMessages([...showMessages, addUserMessage, thankYouMessage])
        } else {
            setUserMessage('');
            setShowMessages([...showMessages, addUserMessage, messages[actualQuestion]])
            setActualQuestion(actualQuestion + 1);
        }
    }

    return (
        <div class="user-chat">
            <div class="chat-messages">
                {
                    showMessages.map(e => messageConstructor(e.message, e.type))
                }
            </div>
            <form onSubmit={ handleMessage }>
                <input type="text" value={ userMessage } onChange={ e => setUserMessage(e.target.value) } placeholder="Escreva aqui..."/>
                <button disable={ btnDisable } onClick={ e => handleMessage(e) }>Enviar</button>
            </form>
        </div>
    )
}

export default Chat;