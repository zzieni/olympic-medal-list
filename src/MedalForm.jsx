function MedalForm(props) {
  console.log(props);
  const fromStyle = {
    display: 'flex',
  };

  const inputStyle = {
    margin: '10px 10px 10px 10px',
    flexDirection: 'column',
  };

  const btnStyle = {
    margin: '10px 10px 10px 10px',
    backgroundColor: '#4169E1',
    color: 'white',
  };

  //  국가 추가 버튼을 누르면 setMedalList로 데이터가 추가 된다
  const addBtn = (e) => {
    e.preventDefault();

    const countryName = props.medalList.find((el) => {
      if (el.country === props.country) return true;
    });

    if (!countryName) {
      // setMedalList는 medalcount의 새로운 값을 넣어주는 메서드?  setMedalList()안에 배열로 새로 넣어줄값을 만들어줘야됨
      // ...medalList 은 기존 배열이고 뒤에 넣어주고 싶은 형식으로 작성 해서 넣어줘야됨
      const newMedalList = [
        ...props.medalList,
        {
          country: props.country,
          gold: props.goldCount,
          silver: props.silverCount,
          bronze: props.bronzeCount,
        },
      ]; // ...은 배열 안에만 배낀거 []로 다시 감싸줘야뎀

      // 금메달 순으로 정렬
      const sortedList = sortByGold(newMedalList);
      props.setMedalList(sortedList);
    } else {
      alert('이미 등록된 국가입니다.');
    }
    inputTextClear();
  };

  const inputTextClear = () => {
    props.setCountry('');
    props.setGoldCount(0);
    props.setSilverCount(0);
    props.setBronzeCount(0);
  };

  const updateMedalData = (prevMedalList) => {
    /* prevMedalList = [ 
                  {country: "대한민국", gold: 12, silver: 10, brons: 10}, 
                  {country: "미국", gold: 10, silver: 10, brons: 10}  
                ] 
    */
    const updatedList = prevMedalList.map((item) => {
      if (props.country === item.country) {
        return {
          ...item,
          gold: props.goldCount,
          silver: props.silverCount,
          bronze: props.bronzeCount,
        };
      } else {
        return item;
      }
    });

    // 금메달 순으로 정렬
    return sortByGold(updatedList);
  };

  const updateBtn = (e) => {
    e.preventDefault();

    const findCountryName = props.medalList.find((item) => {
      return item.country === props.country;
    });

    if (!findCountryName) {
      alert('국가가 등록되지 않았습니다');
    } else {
      // const newList = // 데이터 가공 1
      props.setMedalList((prevMedalList) => updateMedalData(prevMedalList));
    }
    inputTextClear();
  };

  // 금메달 순 정렬 함수
  const sortByGold = (gold) => {
    return gold.sort((a, b) => b.gold - a.gold);
  };

  return (
    <form style={fromStyle} onSubmit={addBtn}>
      <div style={inputStyle}>
        <label>국가명</label>
        <br />
        <input
          type="text"
          placeholder="국가명을 입력해주세요..."
          value={props.country}
          onChange={(e) => props.setCountry(e.target.value)}
          required
        />
      </div>
      <div style={inputStyle}>
        <label>금메달</label>
        <br />
        <input
          type="number"
          placeholder="0"
          value={props.goldCount}
          onChange={(e) => props.setGoldCount(e.target.value)}
        />
      </div>
      <div style={inputStyle}>
        <label>은메달</label>
        <br />
        <input
          type="number"
          placeholder="0"
          value={props.silverCount}
          onChange={(e) => props.setSilverCount(e.target.value)}
        />
      </div>
      <div style={inputStyle}>
        <label>동메달</label>
        <br />
        <input
          type="number"
          placeholder="0"
          value={props.bronzeCount}
          onChange={(e) => props.setBronzeCount(e.target.value)}
        />
      </div>
      <div>
        <button style={btnStyle} type="submit">
          국가 추가
        </button>
        <button style={btnStyle} onClick={updateBtn}>
          업데이트
        </button>
      </div>
    </form>
  );
}

export default MedalForm;
