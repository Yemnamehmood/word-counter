'use client';
import React, { useState } from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  const [text, setText] = useState<string>('');
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText('');
  };

  return (
    <div className="container">
      <Head>
        <title>Word Counter</title>
      </Head>

      
      <h1 className="title">Word Counter</h1>
      
      <textarea
        className="textarea"
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here..."
      />
      <div className="counter">
        <p>Words: {wordCount}</p>
        <p>Characters: {charCount}</p>
      </div>
      <button className="clear-button" onClick={clearText}>Clear Text</button>
      
      <footer className="footer">
        &copy; {new Date().getFullYear()} Yemna Mehmood. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
