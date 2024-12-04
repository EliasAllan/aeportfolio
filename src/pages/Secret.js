import React, { useState } from 'react';
import axios from 'axios';

function Secret() {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleSynthesize = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/synthesize', { text });
      setAudioUrl(response.data.url);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id="text-to-speech-app">
      <textarea
        placeholder="Enter text to convert to speech"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSynthesize}>Convert to Speech</button>
      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default Secret;

