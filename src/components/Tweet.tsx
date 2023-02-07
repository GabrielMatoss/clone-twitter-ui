import "./Tweet.css";

export function Tweet() {
    return(
     <a href="#" className="tweet">
        <img src="https://github.com/GabrielMatoss.png" alt="Gabriel Matos"/>

        <div className="tweet-content">
            <div className="tweet-content-header">
                <strong>Gabriel Matos</strong>
                <span>@gabrielmatoss</span>
            </div>
        </div>
     </a>
    )
}