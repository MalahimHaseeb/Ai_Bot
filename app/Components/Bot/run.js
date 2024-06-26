import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(`${process.env.NEXT_PUBLIC_DB_API}`);

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

async function run(data) {
    const prompt = data
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }
 export { run}