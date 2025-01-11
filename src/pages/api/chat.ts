import { NextApiRequest, NextApiResponse } from 'next';
    import { GoogleGenerativeAI } from "@google/generative-ai";

    const apiKey = "AIzaSyCf6qjwPusCsdG39v-1RAEQivCyOUTXo2c";

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
      }

      const { message }  = req.body;

      if (!message) {
          return res.status(400).json({ error: 'Message is required' });
      }

      try {
        const chat = model.startChat();
        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({ text });
      } catch (error: any) {
        console.error("Error during chat:", error);
        res.status(500).json({ error: 'Failed to process the message', details: error.message });
      }
    }
