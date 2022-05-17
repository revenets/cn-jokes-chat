import React from "react";

const Chat = ({ currentChat, updateChat }) => {
    const styles = {
        backgroundImage: `url(${currentChat.img})`,
    };

    const messages = currentChat.messages.map((message) => {
        let classPrefix =
            message.direction === "in" ? "query-chat" : "reply-chat";
        let index = currentChat.messages.indexOf(message);
        return (
            <div key={index} className={`chat__message ${classPrefix}`}>
                {message.direction === "in" && (
                    <div
                        style={styles}
                        className={`${classPrefix}__image companion-img`}
                    ></div>
                )}
                <p className={`${classPrefix}__text`}>{message.text}</p>
                <p className={`${classPrefix}__date`}>
                    {new Date(message.dateTime).toLocaleDateString("en-US", {
                        dateStyle: "short",
                    })}{" "}
                    ,{" "}
                    {new Date(message.dateTime).toLocaleTimeString("en-US", {
                        hour12: "true",
                        hour: "numeric",
                        minute: "2-digit",
                    })}
                </p>
            </div>
        );
    });

    const messagesEndRef = React.useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const [message, setMessage] = React.useState({
        text: "",
        dateTime: new Date(),
        direction: "out",
    });

    const [isWaitingAnswer, setIsWaitingAnswer] = React.useState(false);

    React.useEffect(() => {
        async function fetchAnswer() {
            const response = await fetch(
                `https://api.chucknorris.io/jokes/random`
            );
            const result = await response.json();
            const answerMessage = {
                text: result.value,
                dateTime: new Date(),
                direction: "in",
            };
            isWaitingAnswer && updateChat(answerMessage);
        }

        setTimeout(() => {
            fetchAnswer();
        }, 5000);

        setIsWaitingAnswer(false);
    }, [updateChat, isWaitingAnswer]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMessage((prevState) => ({ ...prevState, [name]: value }));
    };

    const addNewMessage = (e) => {
        e.preventDefault();
        if (message.text) {
            updateChat(message);
            setMessage((prevState) => ({ ...prevState, text: "" }));
            setIsWaitingAnswer(true);
            document.getElementById('wave').removeAttribute('hidden')
        }
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <div
                    style={styles}
                    className="chat__image companion-img _icon-status"
                ></div>
                <p className="chat__author">{currentChat.name}</p>
            </div>
            <div className="chat__body">
                {messages}
                <div ref={messagesEndRef} />
            </div>
            <div className="chat__answer answer-chat">
                <div id="wave" hidden>
                    <span className="dot-title">
                        {currentChat.name} is typing{" "}
                    </span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

                <form className="answer-chat__field">
                    <input
                        type="text"
                        id="answer"
                        autocomplete='off'
                        placeholder="Type your message"
                        name="text"
                        onChange={handleChange}
                        value={message.text}
                    />
                    <button
                        type="submit"
                        className=" _icon-send"
                        onClick={addNewMessage}
                    ></button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
