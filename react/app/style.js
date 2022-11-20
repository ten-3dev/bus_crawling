import {SafeAreaView, ScrollView} from 'react-native';
import Styled from "styled-components/native";

export const Wrapper = Styled(SafeAreaView)`
    padding: 10px 10px;
    box-sizing: border-box;
`

export const FavoritesBox = Styled.View`
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    margin-bottom: 20px;
`;

export const FavoritesTitle = Styled.Text`
    font-size: 18px;
    color: black;
    font-weight: bold;
`;

export const GuButton = Styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    margin: 6px 0px;
    border-radius: 5px;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
`

export const GuText = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
`

export const SearchWrapper = Styled(SafeAreaView)`
    width: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
    margin-bottom: 100px;
`

export const CustomScrollView = Styled(ScrollView)`
`

export const busButton = Styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    margin-bottom: 15px;
    padding: 0px 10px;
    flex-direction: row;
`

export const busText = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
`

export const InputBox = Styled.TextInput`
    width: 100%;
    height: 50px;
    border: 1px solid black;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    padding: 0px 10px;
    margin-top: 20px;
    margin-bottom: 15px;
`

export const ViewWrapper = Styled(SafeAreaView)`
    padding: 10px 10px;
    box-sizing: border-box;
    flex: 1;
`

export const ViewScrollView = Styled(ScrollView)`
    box-sizing: border-box;
    flex: 1;
`

export const ViewBox = Styled.View`
    width: 100%;
    margin-bottom: 30px;
    border: 1px solid black;
`

export const ViewTitleBox = Styled.View`
    width: 100%;
    height: 60px;
    padding: 0px 10px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

`

export const ViewTitle = Styled.Text`
    color: black;
    font-size: 25px;
    font-weight: bold;
`

export const ViewBottomBox = Styled.View`
    width: 100%;
    border: 1px solid black;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
`

export const LocationBox = Styled.View`
    width: 100%;
    height: 25px;
    padding: 0px 10px;
    box-sizing: border-box;
    justify-content: center;
    align-items: flex-end;
`

export const LocationText = Styled.Text`
    font-size: 16px;
    color: black;
`

export const ViewSubBox = Styled.View`
    width: 100%;
    height: 25px;
    padding: 0px 10px;
    box-sizing: border-box;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
`

export const ViewSubText = Styled.Text`
    font-size: 16px;
    color: black;
    margin-left: 15px;
`

export const ReloadBtn = Styled.TouchableOpacity`
    width: 100%;
    height: 50px;;
    background-color: blue;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

export const ReloadBtnText = Styled.Text`
    color: white;
    font-size: 18px;
`

export const ViewHeader = Styled.Text`
    width: 100%;
    height: 40px;
    font-weight: bold;
    font-size: 22px;
`