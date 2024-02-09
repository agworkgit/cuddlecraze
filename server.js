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
  const jsonData = fs.readFileSync('./path/to/your/json/file.json', 'utf8');
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
  fs.writeFileSync('./src//components/AdviceCard/data/advice-data.json', JSON.stringify(updatedData));

  res.json({ success: true });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});