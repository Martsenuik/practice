export function Status({ isOnline }) {
  return <p>{isOnline ? "Користувач онлайн" : "Користувач офлайн"}</p>;
}
