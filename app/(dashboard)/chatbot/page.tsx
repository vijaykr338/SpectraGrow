"use client";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Chatbot() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("NEXT_PUBLIC_GEMINI_API_KEY is not defined");
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleSubmit = async () => {
    setLoading(true);
    setAnswer("");

    const prompt = `
      Act as an agricultural expert and format your response beautifully. Based on:
      - **Latitude**: ${latitude}
      - **Longitude**: ${longitude}
      - **Phosphorus Level**: ${phosphorus} ppm

      Structure the response in sections:
      1. 🌾 **Best Crops for This Region**
      2. 🌱 **Fertilizer Recommendations** (with dosages and names of fertilizers)
      3. 🛠 **Steps to Improve Soil Quality** (numbered list)
      4. 🚜 **Additional Farming Tips**

      Use clear formatting. Provide detailed and helpful recommendations.
    `;

    try {
      const result = await model.generateContent(prompt);
      const formattedText = formatText(result.response.text());
      setAnswer(formattedText);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setAnswer("⚠️ Failed to get a response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatText = (text: string) => {
    return text
      .replace(/#+\s?(.*?)\n/g, "<h2 class='text-xl font-bold'>$1</h2>") // Convert Markdown headers to h2
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Convert **bold** to <strong>
      .replace(/__(.*?)__/g, "<em>$1</em>") // Convert __italic__ to <em>
      .replace(/\n- /g, "<br />• ") // Convert - list items to bullets
      .replace(/\n\d+\./g, (match) => `<br /><strong>${match}</strong>`) // Bold numbered lists
      .replace(/\n/g, "<br />") // Convert newlines to <br>
      .replace(
        /```([\s\S]*?)```/g,
        "<pre class='bg-gray-200 p-2 rounded'>$1</pre>"
      ) // Code block
      .replace(
        /`([^`]+)`/g,
        "<code class='bg-gray-100 px-1 py-0.5 rounded'>$1</code>"
      ) // Inline code
      .replace(/\*/g, "•"); // Replace remaining * with bullets
  };

  const splitResponse = (text: string) => {
    const sections = text.split(/(?=\d+\.\s🌾|\d+\.\s🌱|\d+\.\s🛠|\d+\.\s🚜)/);

    return sections.map((section, index) => (
      <div key={index} className="bg-white p-4 rounded-lg shadow-lg mb-2 ">
        <div
          className="text-gray-700 mt-2"
          dangerouslySetInnerHTML={{ __html: section }}
        ></div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        🌱 AI Agricultural Expert
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-2 font-semibold">Latitude:</label>
        <input
          type="text"
          placeholder="Enter Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="mb-4 border p-2 w-full rounded"
          disabled={loading}
        />

        <label className="block mb-2 font-semibold">Longitude:</label>
        <input
          type="text"
          placeholder="Enter Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="mb-4 border p-2 w-full rounded"
          disabled={loading}
        />

        <label className="block mb-2 font-semibold">
          Phosphorus Level (ppm):
        </label>
        <input
          type="text"
          placeholder="Enter Phosphorus Level"
          value={phosphorus}
          onChange={(e) => setPhosphorus(e.target.value)}
          className="mb-4 border p-2 w-full rounded"
          disabled={loading}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Get Recommendations"}
        </button>
      </div>

      {answer && (
        <div className="mt-2 bg-white p-6 rounded-lg shadow-md w-full max-w-screen-xl text-left">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            🌾 AI Recommendations:
          </h2>
          <div className="text-gray-700 leading-7">{splitResponse(answer)}</div>
        </div>
      )}
    </div>
  );
}
