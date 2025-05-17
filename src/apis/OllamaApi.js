import axios from 'axios';

export const queryOllama = async (prompt) => {
  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'mistral',
      prompt: prompt,
      stream: false
    });
    return response.data.response;
  } catch (error) {
    console.error('Error querying Ollama:', error);
    return 'Errir connecting to local AI';
  }
};