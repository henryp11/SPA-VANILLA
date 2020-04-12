const Header = () => {

    //al usar `` se conoce como templete literal para meter el códgio html que se añadirá
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        100tifi.co
                    </a>
                </h1>
            </div>
            <div class="Header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `;
    return view;
};

export default Header;