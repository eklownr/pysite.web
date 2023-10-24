import '../../styles/App.css'
import React, {useState, useEffect} from 'react';


const Home = () => {
    // javascrift
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/api/items")
        .then(response => response.json())
        .then(data => setData(data))
    }, []);

    return (
        // html kod
        <div>  
            <h1>Home page!</h1>
            <div className='block'>
                <p>Data from backend:</p>
                Name: {data ? data.user_name : 'loading...'}<br/>
                Age:  {data ? data.age : 'Loading..'}<br/>
                Id:   {data ? data.id : 'Loading..'}
            </div>
        </div>
    )
};

export default Home;