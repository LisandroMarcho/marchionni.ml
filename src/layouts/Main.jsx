import React from 'react';
import Navbar from '../components/Navbar';

function Main ({children}) {
  return <>
    <Navbar />
    <main> { children } </main>
    <style>{`
      :root {
        --black: #242121;

        --green: #16A085;
        --green-hover: #1ABC9C;
        --green-active: #27AE60;
      }
      * {
        font-family: Segoe UI;
        color: var(--black);
      }
      body { margin: 0; padding: 0; }
      .content {
        margin: 120px 300px 0;
      }
    `}</style>
  </>
}

export default Main;
