import "./Footer.css"
export function Footer() {

    return (
        <div className="footer">
            Project by Paweł Walicki
            <div className="icon-box">
                <a href="https://github.com/PawelWalicki/todo-react">
                    <img className="footer-icon" src="github-icon.png"></img>
                </a>
                <a href="https://www.linkedin.com/in/paweł-walicki-a39b09176/">
                    <img className="footer-icon" src="linkedin-icon.png"></img>
                </a>
            </div>
        </div>
    )
}
