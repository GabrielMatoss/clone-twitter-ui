import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { Tweet } from "./components/Tweet";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Separator } from "./components/Separator";

const tweets = [
  "Meu primeiro tweet",
  "Teste",
  "Funcionou o tweetar"
]

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <Header title="Home" />
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/GabrielMatoss.png"
                alt="Gabriel Matos"
              />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>
          <Separator />
          {tweets.map((tweet) => {
            return <Tweet key={tweet} content={tweet}/>
          })}
        </main>
      </div>
    </div>
  </React.StrictMode>
);
