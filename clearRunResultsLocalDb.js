const { exec } = require('child_process');
const path = require('path');
const os = require('os');

// Get the user's home directory
const homeDir = os.homedir();

// Construct the full file path dynamically
const filePath = path.join(homeDir, '.promptfoo', 'promptfoo.db');

// Command to delete the file
const command = `del /f "${filePath}"`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error deleting file: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`File deleted successfully: ${stdout}`);
});
