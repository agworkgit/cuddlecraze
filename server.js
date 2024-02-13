const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// API endpoint for fetching posts
app.get('/api/posts', (req, res) => {
    const jsonData = fs.readFileSync('./src/components/AdviceCard/data/advice-data.json', 'utf8');
    const data = JSON.parse(jsonData);
    res.json(data);
});

// API endpoint for updating the favorites attribute
app.put('/api/favorites/:id', (req, res) => {
    const { id } = req.params;
    const { favorites } = req.body;

    const jsonData = fs.readFileSync('./src/components/AdviceCard/data/advice-data.json', 'utf8');
    const data = JSON.parse(jsonData);

    const updatedData = data.map((item) => {
        if (item.id === parseInt(id)) {
            return {
                ...item,
                favorites,
            };
        }
        return item;
    });

    fs.writeFileSync('./src/components/AdviceCard/data/advice-data.json', JSON.stringify(updatedData));
    res.json(updatedData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});