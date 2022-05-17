import React from "react";

const Contact = ({ name, image, lastMessage, lastDate, setCurrentChatId }) => {
    const styles = {
        backgroundImage: `url(${image})`,
    };
    return (
        <div className="contact" onClick={() => {
            document.querySelector(".sidebar").classList.remove('active')
            setCurrentChatId()
            }}>
            <div
                style={styles}
                className="contact__image companion-img _icon-status"
            ></div>
            <div className="contact__content">
                <p className="contact__name">{name}</p>
                <p className="contact__text">
                    {lastMessage.split(" ").length > 10
                        ? `${lastMessage.split(" ").slice(0, 10).join(" ")}...`
                        : lastMessage}
                </p>
            </div>
            <p className="contact__date">
                {new Date(lastDate).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })}
            </p>
        </div>
    );
};

export default Contact;
