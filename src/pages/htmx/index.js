import '../../styles/App.css'

const Htmx = () => {
    // javascrift
    return (
        // html kod
        <div>
            <h2>HTMX</h2>
            <div className='block'>
                <p>add htmx-test here...</p>
                <script src="https://unpkg.com/htmx.org@1.9.6" integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni" crossorigin="anonymous"></script>
             
                <div className='block'>
                    <button
                    hx-get="https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode"
                    hx-target="#output2"
                    >Amuse Me</button>
                    <p id="output2">Jokes from jokeapi.dev</p>
                </div> 
             
            </div>
        </div>
    )
};

export default Htmx;