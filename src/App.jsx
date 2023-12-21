import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'

function App() {
  return (
    <>
      <div className="title_banner">
        <h1>Le super blog d'ADA</h1>
      </div>
      <div className="cards_section">
        <Card 
          image='src/assets/cat.png'
          tag="FUN"
          tagColor="green"
          title="Le super chat"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Card 
          image='src/assets/cat2.jpg'
          tag="A LITTLE FUN"
          tagColor="orange"
          title="Le 2e super chat"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <Card 
          image='src/assets/anna_cat.jpg'
          tag="REALLY NOT FUN"
          tagColor="red"
          title="Don't talk to this cat"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <Card 
          image='src/assets/thumbs_up_cat.png'
          tag="SUPER FUN"
          tagColor="pink"
          title="Talk to this cat"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
      <div className="footer">
          <h1>🐱</h1>
      </div>
      <img className="paw_prints" src="src/assets/paw_prints.png"/>
    </>
  )
}

export default App
