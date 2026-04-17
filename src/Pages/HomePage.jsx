import React, { useState, useEffect } from 'react';
import Banner from '../Component/homepage/banner';
import Friends from '../Friends/Friends';

const HomePage = () => {
    const [Friend, setFriend] = useState([]);

    useEffect(() => {
        fetch('/data.json').then(res => res.json()).then(data => setFriend(data));
    }, []);

    return (
        <div>
           <Banner Friend={Friend}></Banner>
           <Friends></Friends>
        </div>
    );
};

export default HomePage;