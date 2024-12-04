// const express = require('express');
// // const fetch = require('node-fetch');
// const axios = require('axios');
// const cors = require('cors'); // Import the CORS middleware
// const app = express();
// const PORT = 5000;

// // Enable CORS for all origins (or specify your frontend URL for more security)
// app.use(cors()); // This will allow requests from any origin

// app.use(express.json());

// // Endpoint to handle text-to-speech request
// app.post('/api/text-to-speech', async (req, res) => {
//   const text = req.body.text;

//   try {
//     // Make request to ElevenLabs API
//     const response = await axios.post(
//       'https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM',
//       {
//         text: text,
//         model_id: 'eleven_multilingual_v2',  // Set desired voice
//       },
//       {
//         headers: {
//           'xi-api-key': 'sk_8cbbcd804c915e6e3a8007901a48eed18417bd1cde7c2936',  // Replace with your API key
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     const audioUrl = response.data.audio_url; // URL for the audio file
//     // Send the audio content back to frontend
//     res.json({ audioUrl });
//   } catch (error) {
//     console.error('Error during text-to-speech conversion:', error);
//     res.status(500).send('Error generating speech');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const textToSpeech = require('@google-cloud/text-to-speech');
// // const fs = require('fs');
// // const util = require('util');

// // // Serve static files from the 'server' directory

// // const app = express();
// // app.use(bodyParser.json());
// // app.use(cors());
// // const path = require('path');
// // // Instantiate the Text-to-Speech client
// // const client = new textToSpeech.TextToSpeechClient({
// //   keyFilename: './keys/service-account.json', // Path to your JSON key file
// // });

// // // Route to convert text to speech
// // app.post('/api/synthesize', async (req, res) => {
// //     const { text } = req.body;
    
// //     const request = {
// //         input: { text },
// //         voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
// //         audioConfig: { audioEncoding: 'MP3' },
// //     };
    
// //     try {
// //         const [response] = await client.synthesizeSpeech(request);
// //         const fileName = `output-${Date.now()}.mp3`;
// //         const filePath = path.join(__dirname, fileName);
        
        
// //         // Save the audio content to a file
        
// //         await util.promisify(fs.writeFile)(filePath, response.audioContent, 'binary');
// //         console.log(`Audio content written to file: ${fileName}`);
        
// //         // Respond with the file URL
// //         res.status(200).send({ url: `http://localhost:5000/files/${fileName}`, message: 'Speech synthesis successful!' });
// //     } catch (error) {
// //         console.error('Error:', error);
// //         res.status(500).send({ error: 'Failed to synthesize speech' });
// //     }
// // });

// // const PORT = 5000;
// // app.listen(PORT, () => {
// //     console.log(`Server running on http://localhost:${PORT}`);
// // });

// // app.use('/files', express.static(path.join(__dirname, './')));
