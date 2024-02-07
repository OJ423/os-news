import notfound from "../assets/404-page-bkg.webp"

export default function ErrorPage() {
  return <>
    <section className="four-oh-four-container">
      <img src={notfound} alt="a hotel door numbered 404 " />
      <h1>Oh Gosh</h1>
      <p>This page cannot be found. Use the navigation to take you somewhere exciting.</p>
    </section>
    </>;
}
