import React, { useState } from 'react';
import './NewChat.css';

import ArrowBack from '@material-ui/icons/ArrowBack';

export default function NewChat({user, chatlist, show, setShow}) {
  const [list, setList] = useState([
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Barbosa'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Barbosa'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Barbosa'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Barbosa'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Barbosa'},
  ])

  return (
    <div className="newChat" style={{left: show ? 0 : -415}}>
      <div className="newChat-head">
        <div onClick={() => setShow(false)} className="newChat-backbutton">
          <ArrowBack style={{ color: '#FFF' }} />
        </div>
        <div className="newChat-headtitle">Nova Conversa</div>
      </div>
      <div className="newChat-list">
        {list.map((item, key) => (
          <div className="newChat-item" key={key}>
            <img className="newChat-itemavatar" src={item.avatar} alt="" />
            <div className="newChat-itemname">{item.name}</div>
          </div>
        ))}
        </div>
    </div>
  )
};