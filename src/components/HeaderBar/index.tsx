import { Link } from "react-router-dom";
import "./styles.css";

export default function HeaderBar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>MeuSite</h1>
        </Link>
      </nav>
    </header>
  );
}
