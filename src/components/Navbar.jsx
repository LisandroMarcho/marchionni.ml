import React from 'react';

function Navbar () {
  return <>
    <header>
      <h1>Lisandro Marchionni</h1>
      <nav>
        <a href="#">Blog</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
    <style>{`
    header {
      width: 100%;
      height: 100px;
      position: fixed;
      top: 0;

      padding: 0 100px 0 40px;
      box-sizing: border-box;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    header nav, header nav {
      margin: 0;
      padding: 0;
    }

    header > h1 {
      font-size: 1.5rem;
    }

    header nav a {
      margin: 0 10px;
      text-decoration: none;
      color: var(--green);
      font-weight: bold;
    } 

    header nav a:hover {
      color: var(--green-hover);
    }

    header nav a:active {
      color: var(--green-active)
    }
    `}</style> 
  </>
}

export default Navbar;