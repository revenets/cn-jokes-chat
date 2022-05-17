import React from "react";
import userImageStatic from "../user.png";
import Contact from "./Contact";

const Sidebar = (props) => {
    const [searchText, setSearchText] = React.useState("");

    const searchHandler = (event) => {
        let searchToLower = event.target.value.toLowerCase();
        setSearchText(searchToLower);
    };

    const searchResults = props.chats.filter((item) => {
        return searchText === ""
            ? item
            : item.name.toLowerCase().includes(searchText);
    });

    const allContacts = searchResults.map((contact) => {
        return (
            <Contact
                key={contact.id}
                name={contact.name}
                image={contact.img}
                lastMessage={contact.messages.slice(-1)[0].text}
                lastDate={contact.messages.slice(-1)[0].dateTime}
                setCurrentChatId={() => props.setCurrentChatId(contact.id)}
            />
        );
    });

    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <div className="sidebar__header">
                    <div
                        className="sidebar__logo logo-sidebar"
                        onClick={() => {
                            document
                                .querySelector(".sidebar")
                                .classList.toggle("active");
                        }}
                    >
                        <div className="logo-sidebar__image _icon-status">
                            <img src={userImageStatic} alt="" />
                        </div>
                    </div>
                    <div className="sidebar__search">
                        <label
                            htmlFor="search"
                            className=" _icon-search"
                        ></label>
                        <input
                            type="text"
                            autocomplete='off'
                            id="search"
                            placeholder="Search or start a new chat"
                            onChange={searchHandler}
                        />
                    </div>
                </div>
                <div className="sidebar__contacts contacts">
                    <h2 className="contacts__title">Chats</h2>
                    <div className="contacts__list">{allContacts}</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
