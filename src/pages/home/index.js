import '../../styles/App.css'
import React, {useState, useEffect} from 'react';

const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

const Home = () => {
    // javascrift
//    const [data, setData] = useState(null)
//
//    useEffect(() => {
//        fetch("/api/items", {Method: "GET"})
//        .then(response => response.json())
//        .then(data => setData(data))
//    }, []);
//
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/api/potter", {Method: "GET"})
        .then(response => response.json())
        .then(data => setData(data))
    }, []);

    return (
        // html kod
        <div>  
            <h1>Home page!</h1>
            <div class="row">
                <div class="column">
                    <div className="block">
                        <p>Data from backend:</p>
                        ID: {data ? data[0].id : 'loading...'}<br/>
                        Name:  {data ? data[0].name : 'Loading..'}<br/>
                    </div>
                </div>
                <did class="column">
                    <div className="block">
                        <p>Names from  a list using .map</p>
                        {names.map(name => (<li>{name}</li>))}
                    </div>
                </did>
            </div>
        </div>
    )
};
export default Home;