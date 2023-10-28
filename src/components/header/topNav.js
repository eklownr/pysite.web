import '../../styles/topNav.css';

const TopNav = () => {
    // javascript:
    return (
        // html:
        <div class="topnav">
          <a class="active" href="/home">&#x2615;</a>
          <a href="tutorial">Tutorial</a>
          <a href="contact">Contact</a>
          <a href="/about">About</a>
          <a href="/htmx">HTMX</a>
        </div>
    )
};

export default TopNav;