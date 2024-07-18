const { GoogleGenerativeAI } = require("@google/generative-ai");

// Replace with your actual API key (store securely!)
const API_KEY = "YOUR_API_KEY";

// Function to send a prompt to Gemini and analyze JSON data
async function analyzeJsonWithGemini(jsonData) {
  const genAI = new GoogleGenerativeAI(API_KEY);

  const jsonString = JSON.stringify(jsonData);

  const prompt = `Analyze the following JSON data: ${jsonString}. What insights can you extract?`;

  try {
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const response = await model.generateContent(prompt);

    console.log("Gemini AI Response:");
    console.log(response.text);

  } catch (error) {
    console.error("Error:", error);
  }
}

// Example JSON data (modify as needed)
const jsonData = {
  "name": "John Doe",
  "age": 35,
  "city": "Los Angeles",
  "occupation": "Software Engineer",
  "interests": ["Machine Learning", "AI", "Web Development"]
};

// Call the function with your JSON data
analyzeJsonWithGemini(jsonData);
