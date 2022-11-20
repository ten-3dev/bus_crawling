import React, { useState } from 'react';
import * as Styles from '../style';

const SearchScreen = ({route, navigation}) => {
    const [searchText, setSearchText] = useState("");

    const moveViewScreen = (el) => {
        navigation.navigate("View", {bsNm: el.bsNm, wincId: el.wincId});
    }

    return(
        <Styles.SearchWrapper>
            <Styles.InputBox placeholder="검색" onChangeText={(text) => {
                setSearchText(text);
            }}/>
            <Styles.CustomScrollView>
            {route.params.guData.filter(e => (e.bsNm.includes(searchText) & searchText != "") || (searchText === "")).map((el, idx) => {
                return(
                    <Styles.busButton key={idx} onPress={() => moveViewScreen(el)}>
                        <Styles.busText>{el.bsNm.length > 15 ? el.bsNm.substr(0, 15) + "..." : el.bsNm}</Styles.busText>
                        <Styles.busText>{el.wincId}</Styles.busText>
                    </Styles.busButton>
                )
            })}
            </Styles.CustomScrollView>
        </Styles.SearchWrapper>
    )
}

export default SearchScreen;