export function Status({ isOnline }) {
  return (
    <div style={{ border: "5px solid green" }}>
      <h2>Користувач онлайн?</h2>
      <p>{isOnline ? "Так, користувач онлайн" : "Ні, користувач офлайн"}</p>
    </div>
  );
}
