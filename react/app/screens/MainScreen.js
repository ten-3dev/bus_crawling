import React, {useContext} from 'react';
import axios from 'axios';
import * as Styles from '../style';
import Context from '../Context';

const MainScreen = ({ navigation })  => {
  const context = useContext(Context);
  const GuList = [
    {text: "북구", code: '2723000000'},
    {text: "동구", code: '2714000000'},
    {text: "서구", code: '2717000000'},
    {text: "중구", code: '2711000000'},
    {text: "달서구", code: '2729000000'},
    {text: "수성구", code: '2726000000'},
    {text: "달성군", code: '2771000000'},
    {text: "남구", code: '2720000000'},
  ]

  const getGuData = async (busCode) => {
    context.setLoading(true);
    const data = await axios.get(
      `https://businfo.daegu.go.kr:8095/dbms_web_api/bsInfo/bslist?guCode=${busCode}&dongCode=&selOrder=bitNm`, 
      {headers: { 'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7' }}
    );
    context.setLoading(false);
    navigation.navigate("Search", {guData: data.data.body})
  }

  return (
    <Styles.Wrapper>
      <Styles.CustomScrollView>
        <Styles.FavoritesBox>
          <Styles.FavoritesTitle>선택하셈;;</Styles.FavoritesTitle>
        </Styles.FavoritesBox>
        {GuList.map((el, idx) => {
          return(
            <Styles.GuButton key={idx} onPress={() => getGuData(el.code)}>
              <Styles.GuText>{el.text}</Styles.GuText>
            </Styles.GuButton>
          )
        })}
      </Styles.CustomScrollView>
    </Styles.Wrapper>
  );
};

export default MainScreen;
