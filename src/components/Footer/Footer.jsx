import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__credit">Developed by Zeryab</span>
      {/* CHANGED: Dynamically update the year */}
      <span className="footer__year">{new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;