function Header() {
  return (
    <header className="text-white m-5 row align-items-center">
      <h1 className="col">My Website</h1>
      <ul className="list-inline col d-flex justify-content-end mb-0">
        <li className="list-inline-item me-4">
          <i className="bi bi-house-door-fill me-1"></i> HOME
        </li>
        <li className="list-inline-item me-4">
          <i className="bi bi-person-lines-fill me-1"></i> ABOUT
        </li>
        <li className="list-inline-item me-4">
          <i className="bi bi-gear-fill me-1"></i> SERVICES
        </li>
        <li className="list-inline-item">
          <i className="bi bi-telephone-fill me-1"></i> CONTACT US
        </li>
      </ul>
    </header>
  );
}
export default Header;