// Load environment variables from .env file
require('@dotenvx/dotenvx').config();

// Access the API key (optional verification)
const apiKey = process.env.OPENAI_API_KEY;
console.log(`Your API key is: ${apiKey}`);

// No need to explicitly pass the API key; it will be available as an environment variable
// Your Promptfoo logic can go here if needed, or just run Promptfoo via command line
