import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Steve Jobs</h1>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Main
            </Link>
          </li>
          <li>
            <Link className="link" to="7090/">
              Life
            </Link>
          </li>
          <li>
            <Link className="link" to="9000/">
              Company
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
