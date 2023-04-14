import { useState } from 'react';
import ChatAi from './components/chatAi';
import ImageAi from './components/imageAi';

function App() {
  const [isChatMode, setIsChatMode] = useState(true);

  // modu değiştirme işlemi
  const handleClick = () => {
    setIsChatMode(!isChatMode);
  };

  return (
    <div className="chat-bot">
      <h1>Hayal Et</h1>

      <button onClick={handleClick}>
        {isChatMode ? 'Resim Moduna Geç' : 'Chat Moduna Geç'}
      </button>

      {isChatMode ? <ChatAi /> : <ImageAi />}
    </div>
  );
}

export default App;

