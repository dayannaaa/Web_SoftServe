import Quote from "./components/Quote";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Quote
        text='"Mankind invented the atomic bomb, but no mouse would ever construct a mousetrap."'
        author="Albert Einstein"
      />
    </div>
  );
}
