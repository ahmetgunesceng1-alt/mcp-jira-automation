// Import the 'fs' module to handle file operations
const fs = require('fs');

// Function to generate a random book summary
function generateBookSummary() {
    const summary = 'This is a captivating story about a young hero who embarks on an epic journey. Along the way, they face numerous challenges and discover the true meaning of friendship. Ultimately, the hero learns that courage and perseverance can overcome any obstacle.';
    return summary;
}

// Write the summary to a text file
fs.writeFile('book_summary.txt', generateBookSummary(), (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Book summary written to book_summary.txt');
    }
});
