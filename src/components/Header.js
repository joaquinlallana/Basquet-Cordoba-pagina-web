import '../styles/components/layout/Headers.css';
const Header = (props) => {
  return (
    <header>
    <div className="holder">
      <img
        src="/images/logo-basquetball.png"
        width="100px"
        alt="Logo Cordoba Basquet"
      />
      <h1> Cordoba Basquet</h1>
      </div>
    </header>
  );
};

export default Header;
