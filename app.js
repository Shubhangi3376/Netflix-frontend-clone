const fs = require('fs');
const path = require('path');

// Directory where your images are located
const imageDir = 'C:/Users/shubhangi singh/netflix/images'; // Update this with the actual folder path

// Read all image files in the directory
fs.readdir(imageDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory:', err);
    }

    // Filter image files (only .jpg, .jpeg, .png, .webp, etc.)
    const imageFiles = files.filter(file => ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase()));

    // Generate HTML code for each image
    const imageHtml = imageFiles.map(file => `<img src="images/${file}" alt="${file}" style="width: 300px;">`).join('\n');

    // Read the existing HTML file
    fs.readFile('index1.html', 'utf8', (err, data) => {
        if (err) {
            return console.error('Unable to read HTML file:', err);
        }

        // Insert the generated image HTML below the bg-image section
        const updatedHtml = data.replace('<!-- Insert Images Here -->', imageHtml);

        // Write the updated HTML content back to the file
        fs.writeFile('index1.html', updatedHtml, 'utf8', (err) => {
            if (err) {
                return console.error('Unable to write HTML file:', err);
            }
            console.log('HTML file has been updated successfully.');
        });
    });
   
});
