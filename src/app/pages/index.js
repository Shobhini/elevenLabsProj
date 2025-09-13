import { useState } from 'react';

export default function Home() {
  const [selectedLang, setSelectedLang] = useState('English');
  const [audioUrl, setAudioUrl] = useState('');
  
  const fetchAudioUrl = async (lang) => {
    // Replace with your back-end API endpoint
    const res = await fetch(`/api/audio?lang=${lang}`);
    const data = await res.json();
    setAudioUrl(data.url);
  };

  const handlePlay = () => {
    fetchAudioUrl(selectedLang);
    // play audio using <audio src={audioUrl} />
  };

  return (
    <div className="container">
      <header>
        <button>Login</button>
        <button>Signup</button>
      </header>

      <nav>
        <button className="active">Text to Speech</button>
        <button>Voice Changer</button>
        <button>Speech Synthesis</button>
        {/* Other tab buttons */}
      </nav>
      
      <main>
        <div>
          {/* Only show these in Text to Speech tab */}
          <textarea placeholder="Enter your text..." />
          <select value={selectedLang} onChange={e => setSelectedLang(e.target.value)}>
            <option>English</option>
            <option>Arabic</option>
          </select>
          <button onClick={handlePlay}>Play</button>
          <a href={audioUrl} download><button>Download</button></a>
          {/* Empty content for other tabs */}
        </div>
      </main>
    </div>
  );
}