import React, { useState } from 'react';
import { FriendTimeLineContext } from './FriendTimelineContext';




const FriendTimeLineProvider = ({children}) => {

    const [timeline, setTimeline] = useState([]);

    const data ={
       timeline,
       setTimeline
    };
    
    console.log(timeline,'timeline')
    return (
        <FriendTimeLineContext.Provider value={data}>{children}</FriendTimeLineContext.Provider>
    );
};

export default FriendTimeLineProvider;