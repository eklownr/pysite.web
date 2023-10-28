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
        .catch((error) => console.error(error));
    }, []);

    return (
        // html kod

// funkar var annan gång efter npm start
//      {potters.map((person) => (
//              <li key={person.id}>{person.id}{person.name}</li>
//      ))}

        <div>  
            <h1>Home page!</h1>
            <div class="row">
                <div class="column">
                    <div className="block">
                        <p>Data from backend:</p>
                        ID: {potters ? potters[0].id : 'loading...'}<br/>
                        Name:  {potters ? potters[0].name : 'Loading..'}<br/>
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