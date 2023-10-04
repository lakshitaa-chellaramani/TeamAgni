import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        text: newMessage,
        sender: 'user', // You can set the sender as needed
        time: new Date().toLocaleTimeString(),
      };

      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div>
      <div className="container">
        <div className="page-title">
          <div className="row gutters">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <h5 className="title">Chat App</h5>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="card m-0">
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                    <div className="users-container">
                      <div className="chat-search-box">
                        <div className="input-group">
                          <input
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-btn">
                            <button
                              type="button"
                              className="btn btn-info"
                            >
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <ul className="users">
                        {/* Display user list here */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                    <div className="selected-user">
                      <span>
                        To: <span className="name">Emily Russell</span>
                      </span>
                    </div>
                    <div className="chat-container">
                      <ul className="chat-box chatContainerScroll">
                        {messages.map((message, index) => (
                          <li
                            key={index}
                            className={`chat-${message.sender}`}
                          >
                            <div className="chat-avatar">
                              <img
                                src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                                alt="Retail Admin"
                              />
                              <div className="chat-name">
                                {message.sender}
                              </div>
                            </div>
                            <div className="chat-text">
                              {message.text}
                              <br />
                              {message.time}
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="form-group mt-3 mb-0">
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Type your message here..."
                          value={newMessage}
                          onChange={handleInputChange}
                          onKeyPress={handleKeyPress}
                        ></textarea>
                        <button
                          className="btn btn-primary mt-2"
                          onClick={handleSendMessage}
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
