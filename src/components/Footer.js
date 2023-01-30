import { socialLinks } from "../data";

export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href}>
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
