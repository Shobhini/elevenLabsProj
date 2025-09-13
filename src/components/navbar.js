'use client';
import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Creative Platform', links: ['/voice-cloning', '/multilingual', '/text-to-speech'] },
  { label: 'Agents Platform', links: ['/voice-cloning', '/multilingual', '/text-to-speech'] },
  { label: 'Developers', links: ['/voice-cloning', '/multilingual', '/text-to-speech'] },
  { label: 'Resources', links: ['/voice-cloning', '/multilingual', '/text-to-speech'] },
  { label: 'Enterprise', links: ['/voice-cloning', '/multilingual', '/text-to-speech'] },
  { label: 'Pricing', links: ['/voice-cloning', '/multilingual', '/text-to-speech'] },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index, number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <nav className="text-black px-4 py-2 fixed top-0 w-full shadow-lg z-50">
      <div className="text-medium px-4 py-3 fixed top-0 font-semibold ">
        ElevenLabs
      </div>

      <ul className="flex space sticky top-0 justify-center items-center mx-auto">
        {navItems.map((item, index) => (
          <li key={item.label} className="relative">
            <button
              onClick={() => toggleDropdown(index)}
              className=" md:text-base -tracking-normal text-sm font-normal px-4 py-2 hover:text-gray-500 transition-colors duration-200"
            >
              {item.label} <span className="ml-1">▾</span>
            </button>
            {activeIndex === index && (
              <ul className="absolute top-full left-0 mt-2 w-40 rounded-xl shadow-lg text-sm">
                {item.links.map((href, i) => (
                  <li key={href} className="px-3 py-2 rounded-md transition-all duration-150">
                    <Link href={href}>{href.replace('/', '').replace('-', ' ')}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}