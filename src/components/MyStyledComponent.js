import React from 'react';

function MystyledComponent(props){
    const MyStyledComponentStles ={
        backgroundColor: '#ecf0f1',
        fontFamily: 'sans-serif',
        paddingTop: '20px'
    }
    return(
        <div style ={MyStyledComponentStles}>
            <h1>Hey, I am a component</h1>
            <h2>But there is something different about me...</h2>
            <h3>Unlike other components you have worked with thus far</h3>
            <h4>I also include inline CSS style!</h4>
        </div>
    );
}
export default MystyledComponent;