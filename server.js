const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// API endpoint for fetching pets
app.get('/api/pets', (req, res) => {
    const jsonData = fs.readFileSync('./src/components/PetCard/data/pets-data.json', 'utf8');
    const data = JSON.parse(jsonData);
    res.json(data);
});

// API endpoint for updating the favorites attribute of a pet
app.put('/api/favorites/:id', (req, res) => {
    const { id } = req.params;
    const { favorites } = req.body;

    const jsonData = fs.readFileSync('./src/components/PetCard/data/pets-data.json', 'utf8');
    const data = JSON.parse(jsonData);

    const updatedData = data.map((pet) => {
        if (pet.id === parseInt(id)) {
            return {
                ...pet,
                favorites,
            };
        }
        return pet;
    });

    fs.writeFileSync('./src/components/PetCard/data/pets-data.json', JSON.stringify(updatedData));
    res.json(updatedData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// API endpoint for fetching pets
app.get('/api/pets', (req, res) => {
    const jsonData = fs.readFileSync('./src/components/PetCard/data/pets-data.json', 'utf8');
    const data = JSON.parse(jsonData);
    res.json(data);
});

// API endpoint for updating the favorites attribute of a pet
app.put('/api/favorites/:id', (req, res) => {
    const { id } = req.params;
    const { favorites } = req.body;

    const jsonData = fs.readFileSync('./src/components/PetCard/data/pets-data.json', 'utf8');
    const data = JSON.parse(jsonData);

    const updatedData = data.map((pet) => {
        if (pet.id === parseInt(id)) {
            return {
                ...pet,
                favorites,
            };
        }
        return pet;
    });

    fs.writeFileSync('./src/components/PetCard/data/pets-data.json', JSON.stringify(updatedData));
    res.json(updatedData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
