// pages/send.tsx
import { useState } from 'react';

const Send = () => {
  const [authorized, setAuthorized] = useState(false);
  const [text, setText] = useState('');
  const [likes, setLikes] = useState(0);
  const [ticketNumber, setTicketNumber] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/create-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ authorized, text, likes, ticketNumber }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h1>Send Message to WordPress</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Authorized:
          <input
            type="checkbox"
            checked={authorized}
            onChange={(e) => setAuthorized(e.target.checked)}
          />
        </label>
        <label>
          Text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label>
          Likes:
          <input
            type="number"
            value={likes}
            onChange={(e) => setLikes(Number(e.target.value))}
          />
        </label>
        <label>
          Ticket Number:
          <input
            type="number"
            value={ticketNumber || ''}
            onChange={(e) => setTicketNumber(Number(e.target.value))}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Send;
