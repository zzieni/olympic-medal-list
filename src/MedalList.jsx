import MedalItem from './MedalItem';

function MedalList(props) {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const th = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#000069',
    color: 'white',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr style={th}>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <MedalItem {...props} />
    </table>
  );
}

export default MedalList;
