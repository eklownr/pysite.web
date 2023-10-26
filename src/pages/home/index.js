import '../../styles/App.css'
import React, {useState, useEffect} from 'react';

const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

const Home = () => {
    // javascrift
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/api/items", {Method: "GET"})
        .then(response => response.json())
        .then(data => setData(data))
    }, []);

    return (
        // html kod
        <div>  
            <h1>Home page!</h1>
            <div class="row">
                <div class="column">
                    <div className='block'>
                        <p>Data from backend:</p>
                        Name: {data ? data.user_name : 'loading...'}<br/>
                        Age:  {data ? data.age : 'Loading..'}<br/>
                        Id:   {data ? data.id : 'Loading..'}
                    </div>
                    <br/>
                    <div className='block'>
                        <p>Names from  a list using .map</p>
                        {names.map(name => (<li>{name}</li>))}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div className='block'>
                        <p>Names from  a list using .map</p>
                        {names.map(name => (<li>{name}</li>))}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Home;