import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";

interface TweetProps {
  content: string;
}

export function Tweet({content}: TweetProps) {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/GabrielMatoss.png" alt="Gabriel Matos" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Gabriel Matos</strong>
          <span>@gabrielmatoss</span>
        </div>

        <p>
         {content}
        </p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  );
}
