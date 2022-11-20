import React from 'react';
import * as Styles from './style';
import LoadingGif from './loading.gif';


const Loading = ({loading})  => {
    return (
    <Styles.Wrapper display={loading}>
        <Styles.CustomGiF source={LoadingGif} />
    </Styles.Wrapper>
    );
  };
  
  export default Loading;