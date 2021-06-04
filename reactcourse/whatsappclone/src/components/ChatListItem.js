import React from 'react';

import './ChatListItem.css';

export default function ChatList ({onClick, active, data}) {
  return (
    <div 
      className={`chatListItem ${active?'active':''}`}
      onClick={onClick}
    >
      <img className="chatListItem-avatar" src={data.image} alt="" />
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">{data.title}</div>
          <div className="chatListItem-date">09:00</div>
        </div>
        <div className="chatListItem-line">
          <div className="chatListItem-lastMsg">
            <p>Lorem Ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  )
}