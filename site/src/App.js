import React from 'react';
import Navbar from './components/navbar';
import { newbieProjects } from './data'; // Import the projects array
import Card from './components/card';
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <h1 className="type-title">Newbie Projects</h1>
      <div className="card-container">
        {newbieProjects.map((newbieProjects) => (
          <Card
            key={newbieProjects.id}
            image={newbieProjects.image}
            title={newbieProjects.title}
            tech1={newbieProjects.tech1}
            tech2={newbieProjects.tech2}
            tech3={newbieProjects.tech3}
            liveLink={newbieProjects.liveLink}
            repoLink={newbieProjects.repoLink}
          />
        ))}
      </div>
    </>
  );
}

export default App;
