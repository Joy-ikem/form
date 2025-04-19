import React, { useState } from 'react';
import "./App.css"
import "./index.css"
import Intro from './Components/Intro'
import Form from "./Components/Form"

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative">
      <Form />
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
    </div>
  );
};

export default App;

