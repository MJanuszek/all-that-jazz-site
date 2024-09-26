import "./styles/footer.scss";

function Footer() {
  return (
    <div className="footer-wrapper" id="footer">
      <p>Copyright Monika Januszek</p>
      <p style={{ fontSize: "14px" }}>
        The photographic materials come from various authors on the Unsplash
        website and are not my property.
      </p>

      <a className="footer-info" href="https://github.com/MJanuszek">
        https://github.com/MJanuszek
      </a>
    </div>
  );
}

export default Footer;
