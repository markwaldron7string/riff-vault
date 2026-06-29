import { SEED_RIFFS, TUNINGS } from "./riff-vault-starter";

function App() {
  return (
    <div>
      <h1>Riff Vault</h1>
      <p>Riffs I'm learning, organized by guitar.</p>

      {SEED_RIFFS.map((riff) => {
        const tuning = TUNINGS.find((t) => t.id === riff.tuningId);

        return (
          <div key={riff.id}>
            <h2>{riff.title}</h2>
            <p>{riff.artist}</p>
            <p>{tuning?.label} · {tuning?.guitar}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;