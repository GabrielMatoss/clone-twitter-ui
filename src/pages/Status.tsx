import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";


export function Status() {
  const [newAnswers, setNewAnswers] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido!",
    "Parabéns pelo progresso.",
  ]);

  function createNewAnswer(event: FormEvent){
    event.preventDefault();
    setAnswers([newAnswers, ...answers ]);
    setNewAnswers("");
  }


  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, nam. Saepe, adipisci, aliquid accusantium reiciendis libero, suscipit temporibus veniam recusandae necessitatibus vero ut perferendis incidunt? Sapiente mollitia nesciunt totam voluptatum!" />

      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/GabrielMatoss.png" alt="Gabriel Matos" />
          <textarea 
          value={newAnswers}
          id="tweet" 
          placeholder="Tweet yout answer" 
          onChange={(event) => {
            setNewAnswers(event.target.value);
          }}
          />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
