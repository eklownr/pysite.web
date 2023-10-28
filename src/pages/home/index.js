import '../../styles/App.css'
import React, {useState, useEffect} from 'react';

// TEST
const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

function Anser(props) {
  return <li>Ny name is: { props.person }</li>;
}

const Home = () => {
    // javascrift
    const [potters, setPotter] = useState(null)

    useEffect(() => {
        fetch("/api/potter", {Method: "GET"})
        .then(response => response.json())
        .then(data => setPotter(data))
        .catch((error) => console.log(error));
    }, []);

    return (
        // html kod
// TEST FUNKAR
//     ID: {potters ? potters[0].id : 'loading...'}<br/>
//    Name:  {potters ? potters[0].name : 'Loading..'}<br/>

        <div>  
            <h1>Home page!</h1>
            <div class="row">
                <div class="column">
                    <div className="block">
                        <h3>Data from backend:</h3>
                        
                        {potters && potters.map((potter, index) => (
                        <div key={index}>
                            <p>ID:   {potter.id}</p>
                            <p>Name: {potter.name}</p>
                            <hr/>
                        </div>
                        ))}

                    </div>
                </div>
                <did class="column">
                    <div className="block">
                        <p>Names from a list using .map</p>
                        <ul>
                        {names.map((name) => <Anser person={name} />)}
                        </ul>
                    </div>
                </did>
            </div>
        </div>
    )
};
export default Home;