// pages/index.tsx
import { useEffect, useState } from 'react';

interface Message {
  id: number;
  authorized: boolean;
  text: string;
  likes: number;
  ticketNumber: number | null;
  time: string;
}

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('/api/get-messages');
      const result = await response.json();
      setMessages(result);
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Messages from WordPress</h1>
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </div>
  );
};

export default Home;
