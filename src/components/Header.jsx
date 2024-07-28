
const Header = () => {
    return (
        <header>
            <div className="header">
                <img src="images/potatoIcon.png" alt="potato icon" />
                <h1>Potato Timer</h1>
            </div>
            <div>
                <ul className="header-btn">
                    <li>Log</li>
                    <li>FAQ</li>
                    <li>Settings</li>
                    <li>Tweet!</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
