const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// API endpoint for updating the favorites attribute
app.put('/api/favorites/:id', (req, res) => {
  const { id } = req.params;
  const { favorites } = req.body;

  // Read the JSON file
  const jsonData = fs.readFileSync('./src/components/AdviceCard/data/advice-data.json', 'utf8');
  const data = JSON.parse(jsonData);

  // Update the favorites attribute in the JSON data
  const updatedData = data.map((item) => {
    if (item.id === parseInt(id)) {
      return {
        ...item,
        favorites,
      };
    }
    return item;
  });

  // Write the updated JSON data back to the file
  fs.writeFileSync('./src/components/AccountHead/AccountInfo.json', JSON.stringify(updatedData));

  res.json({ success: true });
});

// API endpoint for updating the profile
app.put('/api/updateProfile', async (req, res) => {
    try {
        // Extract updated profile data from the request body
        const updatedProfileData = req.body;

        // Write the updated profile data to the JSON file
        await fs.writeFileSync('./src/components/AccountHead/AccountInfo.json', JSON.stringify(updatedProfileData, null, 2));

        // Send a success response with the updated profile data
        res.json(updatedProfileData);
    } catch (error) {
        // Send an error response if something went wrong
        console.error('Error updating profile:', error);
        res.status(500).json({ error: 'Failed to update profile' });
    }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
