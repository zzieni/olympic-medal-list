import { useState } from 'react';
import MedalForm from './MedalForm';
import MedalList from './MedalList';
import './App.css';

function App() {
  /** style 영역 */
  const containerStyle = {
    border: '1px solid',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#F9FFFF',
  };

  const titleStyle = {
    color: '#52478B',
  };

  /** JS 영역 */
  const [country, setCountry] = useState('');

  const [goldCount, setGoldCount] = useState(0);
  const [silverCount, setSilverCount] = useState(0);
  const [bronzeCount, setBronzeCount] = useState(0);

  const [medalList, setMedalList] = useState([]);

  /* [ 
      {country: "대한민국", gold: 12, silver: 10, brons: 10}, 
      {country: "미국", gold: 10, silver: 10, brons: 10}  
    ] */

  /** HTML 영역 */
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>2024 파리 올림픽</h1>
      <MedalForm
        country={country}
        setCountry={setCountry}
        goldCount={goldCount}
        setGoldCount={setGoldCount}
        silverCount={silverCount}
        setSilverCount={setSilverCount}
        bronzeCount={bronzeCount}
        setBronzeCount={setBronzeCount}
        medalList={medalList}
        setMedalList={setMedalList}
      />
      <div>
        <MedalList medalList={medalList} setMedalList={setMedalList} />
      </div>
    </div>
  );
}

export default App;
