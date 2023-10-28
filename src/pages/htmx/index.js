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

                <button 
                hx-post="/info" 
                hx-select="#swaped"
                hx-swap="outerHTML">
                Click Me
                </button>
                <div id='swaped'>
                    <p>some text....</p>
                </div>
            </div>
        </div>
    )
};

export default Htmx;