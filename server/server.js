const express = require('express');
const cors = require('cors');

const app = express();


// middleware
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
  next()
})

// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');
// Creates a client
const client = new textToSpeech.TextToSpeechClient(
  {
    keyFilename: './gcp_private_key.json'
  }
);

const sendAudio = async (req, res) => {
  //get text
  const { joke } = req.body;
  // const text = 'The generation of random numbers is too important to be left to chance.';

  const request = {
    input: { text: joke },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: "en-US", name: "en-US-Studio-O" },
    // select the type of audio encoding
    audioConfig: { audioEncoding: 'MP3' },
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');

  res.sendFile("./output.mp3", { root: __dirname }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', "./output.mp3");
    }
  });
}
app.post('/get-audio', sendAudio);
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});