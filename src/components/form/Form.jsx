import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [expirence, setExpirence] = useState("junior");
  const [agree, setAgree] = useState(false);

  const handleChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setMail(value);
  };
  const handleChangeRadio = (e) => {
    const { value } = e.target;
    setExpirence(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Користувач ${name} зареєструвався під поштою ${mail}`);
  };
  const handleChekChange = () => {
    setAgree(!agree);
  };

  return (
    <div style={{ border: "15px solid #ffa200" }}>
      <form onSubmit={handleSubmit}>
        <h2>Форма 📈👥📊</h2>
        <label>
          Name
          <input
            onChange={handleChangeName}
            type="text"
            name="name"
            value={name}
          />
        </label>
        <label>
          Email
          <input
            onChange={handleChangeEmail}
            type="email"
            name="mail"
            value={mail}
          />
        </label>
        <button type="submit" name="button">
          Click
        </button>
      </form>
      <p>{message}</p>
      <b>який у вас рівень?</b>
      <br />
      <label>
        junior
        <input
          onChange={handleChangeRadio}
          type="radio"
          name="expirence"
          value="junior"
          checked={expirence === "junior"}
        />
      </label>

      <label>
        middle
        <input
          onChange={handleChangeRadio}
          type="radio"
          name="expirence"
          value="middle"
          checked={expirence === "middle"}
        />
      </label>
      <label>
        senior
        <input
          onChange={handleChangeRadio}
          type="radio"
          name="expirence"
          value="senior"
          checked={expirence === "senior"}
        />
      </label>
      <br />
      <label>
        <input onChange={handleChekChange} type="checkbox" name="agree" />
        Погоджуюсь з умовами
      </label>
    </div>
  );
};
