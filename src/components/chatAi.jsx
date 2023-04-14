import { useDispatch, useSelector } from "react-redux";
import { getAnswer, getDataStart } from "../app/acitons/chatActions";
import { useState } from "react";

const ChatAi = () => {
  const state = useSelector((state) => state.chatState);
  const [prompt, setPrompt] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getDataStart());

    dispatch(getAnswer(prompt));

    setPrompt("");
  };

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="chat">
      <div className="list">
        {state.chatData.map((message) => (
          <>
            <p className="prompt">{message.prompt}</p>
            <p className="answer"> {message.answer}</p>
          </>
        ))}

        {state.isLoading && 'Mesaj Yükleniyor....'}
      </div>
      <div className="form">
        <input
          value={prompt}
          onChange={handleChange}
          type="text"
          placeholder="yapay zekadan bir şey isteyin"
        />
        <button onClick={handleSubmit}>Gönder</button>
      </div>
    </div>
  );
};
export default ChatAi;
