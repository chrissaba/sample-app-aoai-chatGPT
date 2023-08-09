// ChatManager.tsx

import { useState } from 'react';
import { ChatMessage } from './types'; 

export default function ChatManager() {
  const [chat, setChat] = useState<ChatMessage[]>([]);
  
  return <Chat chat={chat} setChat={setChat} />;
}