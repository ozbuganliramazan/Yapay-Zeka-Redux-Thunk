import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImage, getDataStart } from '../app/acitons/chatActions';
import { useState } from 'react';

const ImageAi = () => {
  const state = useSelector((state) => state.chatState);
  const [prompt, setPrompt] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = () => {
    
    dispatch(getDataStart());


    dispatch(getImage(prompt));


    setPrompt('');
  };

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  console.log(state);

  return (
    <div className="chat">
      <div className="list">
        {state.imageData.map((message) => (
          <>
            <p className="prompt">{message.prompt}</p>
            <img className="answer image-answer" src={message.answer[0].url} />
            <img className="answer image-answer" src={message.answer[1].url} />
          </>
        ))}

        {state.isLoading && 'Mesaj Yükleniyor....'}
      </div>
      <div className="form">
        <input
          value={prompt}
          onChange={handleChange}
          type="text"
          placeholder="yapay zekadan bir resim isteyin"
        />
        <button onClick={handleSubmit}>Gönder</button>
      </div>
    </div>
  );
};

export default ImageAi;
