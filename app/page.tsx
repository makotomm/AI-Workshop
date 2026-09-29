// Edit these three items to update the "This semester" list.
const thisSemester = [
  "Working on a business analytics course project",
  "Learning to build with AI tools",
  "Preparing for a career in business analytics",
];

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <h1>Makoto M</h1>
        <p className="subtitle">
          I am a senior MIS student at the Shidler school of Business at the
          University of Hawaii Manoa going into business analytics with an
          interest in AI.
        </p>
      </header>

      <section>
        <h2>About</h2>
        <p>
          I am a senior studying Management Information Systems at the Shidler
          School of Business at the University of Hawaii Manoa. I am going into
          business analytics. I also have an interest in AI.
        </p>
      </section>

      <section>
        <h2>This semester</h2>
        <ul>
          {thisSemester.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Makoto M
        </p>
      </footer>
    </main>
  );
}
