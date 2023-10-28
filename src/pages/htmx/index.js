import '../../styles/App.css'

const Htmx = () => {
    // javascrift
    return (
        // html kod
        <div>
            <h2>HTMX</h2>

            <p>add htmx-test here...</p>
            <script src="https://unpkg.com/htmx.org@1.9.6"></script>
            <button hx-post="/clicked" hx-swap="outerHTML">
            Click Me
            </button>
        </div>
    )
};

export default Htmx;