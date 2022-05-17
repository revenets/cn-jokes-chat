import React from 'react';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import data from './data';

function App () {
  const [chats, setChats] = React.useState (
    () => JSON.parse (localStorage.getItem ('chats')) || data
  );

  const [currentChatId, setCurrentChatId] = React.useState (
    (chats[0] && chats[0].id) || ''
  );

  const [message, setMessage] = React.useState ({
    text: '',
    dateTime: new Date (),
    direction: 'out',
  });

  React.useEffect (
    () => {
      localStorage.setItem ('chats', JSON.stringify (chats));
    },
    [chats]
  );

  const findCurrentChat = () => {
    return (
      chats.find (chat => {
        return chat.id === currentChatId;
      }) || chats[0]
    );
  };

  const updateChat = message => {
    setChats (oldChats => {
      const newChats = [];
      for (let chat of oldChats) {
        if (chat.id === currentChatId) {
          newChats.unshift ({...chat, messages: [...chat.messages, message]});
        } else {
          newChats.push (chat);
        }
      }
      return newChats;
    });
    document.getElementById ('wave').setAttribute ('hidden', '');
  };

  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar
          chats={chats}
          setCurrentChatId={setCurrentChatId}
        />
        {currentChatId &&
          <Chat
            currentChat={findCurrentChat ()}
            updateChat={updateChat}
            message={message}
            setMessage={setMessage}
          />}
      </div>
    </div>
  );
}

export default App;
