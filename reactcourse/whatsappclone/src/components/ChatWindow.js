import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css'

import MessageItem from './MessageItem';

import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import Api from '../Api';

export default function ChatWindow({ user, data }) {
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const body = useRef();
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  useEffect(() => {
    setList([]);
    let unsub = Api.onChatContent(data.chatId, setList, setUsers);
    return unsub;
  }, [data.chatId]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji)
  }
  
  const handleInputKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSendClick();
    }
  }

  const handleSendClick = () => {
    if (text) {
      Api.sendMessage(data, user.id, 'text', text, users);
      setText('');
      setEmojiOpen(false);
    }
  }

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true)
      }
      recognition.onend = () => {
        setListening(false);
      }
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      }
      recognition.start();
    }
  }

  return (
    <div className="chatWindow">
      <div className="chatWindow-header">
        <div className="chatWindow-headerinfo">
          <img className="chatWindow-avatar" src={data.image} />
          <div className="chatWindow-name">{data.title}</div>
        </div>
        <div className="chatWindow-headerbuttons">
          <div className="chatWindow-btn">
            <SearchIcon style={{ color: '#919191' }} />
          </div>
          <div className="chatWindow-btn">
            <AttachFileIcon style={{ color: '#919191' }} />
          </div>
          <div className="chatWindow-btn">
            <MoreVertIcon style={{ color: '#919191' }} />
          </div>
        </div>

      </div>

      <div ref={body} className="chatWindow-body">
        {list.map((item, key) => (
          <MessageItem
            key={key}
            data={item}
            user={user}
          />
        ))}
      </div>

      <div
        className="chatWindow-emojiarea"
        style={{ height: emojiOpen ? '200px' : '0px' }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="chatWindow-footer">
        <div className="chatWindow-pre">
          <div
            className="chatWindow-btn"
            onClick={() => setEmojiOpen(false)}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: '#919191' }} />
          </div>

          <div
            className="chatWindow-btn"
            onClick={() => setEmojiOpen(true)}
          >
            <InsertEmoticonIcon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
          </div>
        </div>
        <div className="chatWindow-inputarea">
          <input
            className="chatWindow-input"
            value={text}
            onKeyUp={handleInputKeyUp}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite uma mensagem"
            type="text"
          />
        </div>
        <div className="chatWindow-pos">
          {!text ? (
            <div onClick={handleMicClick} className="chatWindow-btn">
              <MicIcon style={{ color: listening ? '#126ece' : '#919191' }} />
            </div>
          ) : (
            <div onClick={handleSendClick} className="chatWindow-btn">
              <SendIcon style={{ color: '#919191' }} />
            </div>
          )}

        </div>
      </div>
    </div>
  )
};