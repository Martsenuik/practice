export const Colorpicker = ({ options }) => {
  return (
    <div>
      <h1 className="text">Color Picker</h1>
      <ul>
        {options.map(({ label, color }) => {
          return (
            <li>
              <button style={{ background: color }}>{label}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
