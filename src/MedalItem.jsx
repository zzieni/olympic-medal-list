function MedalItem(props) {
  const td = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
  };

  const delBtnStyle = {
    padding: '5px 10px',
    cursor: 'pointer',
    backgroundColor: '#EB4646',
    color: 'white',
  };

  const deleteBtn = (item) => {
    const deleltNewMedalList = props.medalList.filter((el) => {
      return item !== el.country;
    });
    props.setMedalList(deleltNewMedalList);
  };

  return (
    <tbody>
      {props.medalList &&
        props.medalList.map((countryList) => {
          return (
            <tr key={countryList.country} style={td}>
              <td>{countryList.country}</td>
              <td>{countryList.gold}</td>
              <td>{countryList.silver}</td>
              <td>{countryList.bronze}</td>
              <td>
                <button
                  style={delBtnStyle}
                  onClick={() => deleteBtn(countryList.country)}
                >
                  삭제
                </button>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}

export default MedalItem;
