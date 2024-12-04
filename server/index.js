const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

// Serve static files from the 'server' directory

const app = express();
app.use(bodyParser.json());
app.use(cors());
const path = require('path');
// Instantiate the Text-to-Speech client
const client = new textToSpeech.TextToSpeechClient({
  keyFilename: './keys/service-account.json', // Path to your JSON key file
});

// Route to convert text to speech
app.post('/api/synthesize', async (req, res) => {
    const { text } = req.body;
    
    const request = {
        input: { text },
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' },
    };
    
    try {
        const [response] = await client.synthesizeSpeech(request);
        const fileName = `output-${Date.now()}.mp3`;
        const filePath = path.join(__dirname, fileName);
        
        
        // Save the audio content to a file
        
        await util.promisify(fs.writeFile)(filePath, response.audioContent, 'binary');
        console.log(`Audio content written to file: ${fileName}`);
        
        // Respond with the file URL
        res.status(200).send({ url: `http://localhost:5000/files/${fileName}`, message: 'Speech synthesis successful!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to synthesize speech' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.use('/files', express.static(path.join(__dirname, './')));
