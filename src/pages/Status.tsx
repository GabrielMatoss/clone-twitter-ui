import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";
const answers = [
  "Concordo...",
  "Olha, faz sentido!",
  "Parabéns pelo progresso.",
];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, nam. Saepe, adipisci, aliquid accusantium reiciendis libero, suscipit temporibus veniam recusandae necessitatibus vero ut perferendis incidunt? Sapiente mollitia nesciunt totam voluptatum!" />

      <Separator />
      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/GabrielMatoss.png" alt="Gabriel Matos" />
          <textarea id="tweet" placeholder="Tweet yout answer" />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
