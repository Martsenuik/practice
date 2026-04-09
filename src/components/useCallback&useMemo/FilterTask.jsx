import { useState, useMemo } from "react";

const generateUsers = () => Array.from({ length: 5000 }, (_, i) => `User ${i}`);
const users = generateUsers();

export function FilterTask() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ⚠️ Проблема: Ця фільтрація запускається навіть при кліку на "Toggle Theme"
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        //console.log("Фільтрація масиву..."); // Подивіться в консоль!
        return user.toLowerCase().includes(searchQuery.toLowerCase());
      }),
    [searchQuery],
  );

  return (
    <div style={{ border: "15px solid #fe41df" }}>
      <div
        style={{
          background: isDarkMode ? "#333" : "#fff",
          color: isDarkMode ? "#fff" : "#000",
        }}
      >
        <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
        <br />
        <br />
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul>
          {filteredUsers.slice(0, 10).map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
