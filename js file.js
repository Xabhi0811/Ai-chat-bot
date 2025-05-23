const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
   
    let botReply = "I'm here to help with safety queries.";

    if (userMessage.toLowerCase().includes('emergency')) {
        botReply = "If this is an emergency, please call the appropriate authorities immediately.";
    }
    res.json({ reply: botReply });
});

app.get('/emergency', (req, res) => {
    
    const emergencyContacts = {
        police: '100',
        fire: '101',
        ambulance: '102',
        instant_help: '112',
        guidelines: 'Stay calm, follow emergency instructions.',
        services: 'Local emergency responders will be alerted.'
    };

    res.json(emergencyContacts);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
