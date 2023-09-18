import React from'react';
import {stylesheet,text,view} from'react-native';
export default function App (){
    return(
        <view style={styles.container}>
            <text>open up App.js to start woring on your App</text>
            </view>
    );
}
const styles=stylesheet.create({container:{
    flex:1,
    backgroundcolor:'#fff',
    alignitans:'center',
    justifycontent:'cent',
}
});