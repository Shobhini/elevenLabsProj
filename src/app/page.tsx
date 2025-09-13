"use client";
import React, {useState} from 'react'

const Home = () => {
  const [activeFeature, setActiveFeature] = useState("Text to Speech")
  const features = [
    "TEXT TO SPEECH",
    "AGENTS",
    "🎵 MUSIC",
    "SPEECH TO TEXT",
    "DUBBING",
    "🔊VOICE CLONING",
    "📖ELEVENREADER"
  ]


  return (
    <div>
      <div className="pt-28 text-center px-6">
        <h1 className="max-w-5xl font-semibold flex justify-center items center mx-auto mb-4 tracking-wide text-4xl"> 
          The most realistic voice AI platform 
        </h1>
        <p className="text-xl font-normal text-gray-600 mb-8 text-center max-w-4xl mx-auto">
          AI voice models and products powering millions of developers, creators, and enterprises. From low‑latency   conversational agents to the leading AI voice generator for voiceovers and audiobooks.
        </p>
        <div className="flex justify-center gap-3">
          <button className="font-medium font-thin-bold text-sm background-color-grey bg-black text-white px-2 py-2 rounded-full hover:bg-gray-800 transition">
            SIGN UP
          </button>
          <button className="font-medium font-thin-bold text-sm background-color-grey text-black px-2 py-2 rounded-full bg-gray-300 transition">
            CONTACT SALES
          </button>
        </div>

      </div>  
      <div className="border-gray-500 gap-2 mb-4 transition-colors duration-200 flex justify-center flex-wrap font-thin-bold text-sm mt-10">
        {features.map((feature) => (
          <button 
            key={feature} 
            onClick ={() => setActiveFeature(feature)}
            className={`px-2 py-1 rounded-border${
              activeFeature === feature ? " bg-gray-400 rounded-3xl" : "border-gray-100"
            }`}
          >
            {feature}
          </button>
        ))}
      </div>

      <div className="font-medium flex justify-center">
        <textarea
          className="flex flex-col md:flex-row justify-between max-w-3xl w-full h-40 p-4 border border-gray-300 rounded mb-6"
          placeholder="Enter your story here..."
        />
      </div>       

      <div className="flex flex-wrap  max-w-3xl mx-auto mb-4 ">
        <select className="px-2 mx-auto py-1 justify-center items-center border rounded-4xl">
          <option>English (US)</option>
          <option>Hindi</option>
        </select>
      

        <button className="flex-wrap flex justify-center items-center mx-auto bg-black text-white px-2 py-1 rounded-4xl hover:bg-gray-600">
        ▶️ Play
        </button>
      </div>
    </div>
  )
}

export default Home




  