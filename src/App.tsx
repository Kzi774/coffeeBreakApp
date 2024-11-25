import { useState } from 'react';
import StartScreen from './components/StartScreen';
import RelaxScreen from './components/RelaxScreen';

function App() {
  const [isRelaxMode, setIsRelaxMode] = useState(false);

  const handleStart = () => {
    setIsRelaxMode(true);
  };

  return (
    <div>
      {isRelaxMode ? (
        <RelaxScreen />
      ) : (
        <StartScreen onStart={handleStart} />
      )}
    </div>
  );
}

export default App;