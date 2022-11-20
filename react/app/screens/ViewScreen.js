import React, { useEffect, useState, useContext } from "react";
import Context from '../Context';
import * as Styles from '../style';
import axios from 'axios';

const ViewScreen = ({route}) => {
    const context = useContext(Context);
    const [data, setData] = useState(null);

    const getBusData = async (bsNm, wincId) => {
        context.setLoading(true);
        const busData = await axios.get(`http://101.101.211.131:3000/?bus_name=${bsNm}&bus_id=${wincId}`);
        setData(busData.data);
        context.setLoading(false);
    }

    useEffect(() => {
        getBusData(route.params.bsNm, route.params.wincId)
    }, [])

    if (!data) return null;

    return(
        <Styles.ViewWrapper>
            <Styles.ViewHeader>{route.params.bsNm}</Styles.ViewHeader>
            <Styles.ReloadBtn onPress={() => getBusData(route.params.bsNm, route.params.wincId)}>
                <Styles.ReloadBtnText>새로고침</Styles.ReloadBtnText>
            </Styles.ReloadBtn>
            <Styles.ViewScrollView contentContainerStyle={{flexGrow: 1}}>
            {data.map((el, idx) => {
                return(
                    <Styles.ViewBox key={idx}>
                        <Styles.ViewTitleBox>
                            <Styles.ViewTitle>{el.name}</Styles.ViewTitle>
                            <Styles.ViewTitle>{el.min[0]}</Styles.ViewTitle>
                        </Styles.ViewTitleBox>
                        {el.location[0] != "운행종료" && el.location.map((ele, idx) => {
                            return(
                                <Styles.ViewBottomBox key={idx}>
                                    <Styles.LocationBox>
                                        <Styles.LocationText>{ele}</Styles.LocationText>
                                    </Styles.LocationBox>
                                    <Styles.ViewSubBox>
                                        <Styles.ViewSubText>{el.before[idx]}</Styles.ViewSubText>
                                        <Styles.ViewSubText>{el.min[idx]}</Styles.ViewSubText>
                                    </Styles.ViewSubBox>
                                </Styles.ViewBottomBox>
                            )
                        })}
                    </Styles.ViewBox>
                )
            })}
            </Styles.ViewScrollView>
        </Styles.ViewWrapper>
    )
}

export default ViewScreen;