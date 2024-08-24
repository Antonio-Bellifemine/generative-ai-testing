const { exec } = require('child_process');

const filePath = "C:\\Users\\abell\\.promptfoo\\promptfoo.db";

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
