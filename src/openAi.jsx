import { Configuration, OpenAIApi } from "openai"; // Change to import

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function sendMsgToAI(message) {
  try {
    const res = await openai.createCompletion({
      model: "davinci-002",
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return res.data.choices[0].text;
  } catch (error) {
    console.error("Error occurred while calling OpenAI API:", error);
    if (error.response) {
      if (error.response.status === 429) {
        console.error("Too many requests. Consider retrying later.");
      } else {
        console.error("Request failed:", error.response.statusText);
      }
    }
    throw error; // Optionally rethrow the error
  }
}
