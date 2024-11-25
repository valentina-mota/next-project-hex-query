

export default function Footer (){
    const currentYear = new Date().getFullYear();

    return (
      <footer>
        <h3>
          ©&nbsp;{currentYear}&nbsp;Design&nbsp;and&nbsp;posts&nbsp;by
          <a
            href="https://valentinamota.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;Valentina Mota VM&nbsp;WebDev
          </a>
        </h3>
      </footer>
    );
}