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
        <div className='bg-color'>  
            <h1>Home page!</h1>
            <p>Name: {data ? data.user_name : 'loading...'}, Age: {data ? data.Age : 'Loading..'}</p>
        </div>
    )
};

export default Home;