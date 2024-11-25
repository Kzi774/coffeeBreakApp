import { FC } from 'react';
import '../StartScreen.css';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="start-container">
      <h1>どこでもリラックス</h1>
      <p>休憩したいとき、リラックスしたいとき、集中したいときいつでもどうぞ</p>
      <p>※音が出るためご注意ください</p>
      <button className="start-button" onClick={onStart}>
        休憩する
      </button>
    </div>
  );
};

export default StartScreen;