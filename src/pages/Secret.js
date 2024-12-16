import React, { useState } from 'react';
import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient({ apiKey: "sk_10459e2efbf90ce578377e1f43dbf516667833e28265fa90" });

function TextToSpeechApp() {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState(null);

  const handleTextToSpeech = async () => {
      setAudioUrl(null)
    try {
      const response = await client.textToSpeech.convert("21m00Tcm4TlvDq8ikWAM", {
        // voice_id: "nvd86A9yjSArgbVm8pra",
        model_id: "eleven_multilingual_v2",
        text: text,
        output_format:"mp3_22050_32",
      });

      // Convert the stream into an ArrayBuffer
      const arrayBuffer = await response.read();

      // Create a Blob from the ArrayBuffer
      const audioBlob = new Blob([arrayBuffer], { type: 'audio/mp3' });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl); // Set the Blob URL to play the audio
    } catch (error) {
      console.error('Error during text-to-speech conversion:', error);
    }
  };

  return (
    <>
    <div className='dnd-text-to-speech-app'>
    <header className="storytelling-app-title">Storytelling App</header>
      <textarea className= 'narrator-text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTextToSpeech} className="convert-button">Convert to Speech</button>
      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
    </>
  );
}

export default TextToSpeechApp;
