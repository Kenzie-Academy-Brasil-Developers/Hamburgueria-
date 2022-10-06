import Logo from "../../assets/logo.png";
import "./Header.css";
import Search from "./Search";

const Header = ({ setSearch, search }) => {
  return (
    <header>
      <img src={Logo} alt="Burguer Kenzie" />
      <Search setSearch={setSearch} search={search} />
    </header>
  );
};

export default Header;
