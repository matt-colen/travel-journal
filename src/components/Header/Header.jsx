import logo from "../../assets/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <a className="logo" href="index.html">
          <img src={logo} alt="logo" />
          <p>my travel journal.</p>
        </a>
      </nav>
    </header>
  );
}
