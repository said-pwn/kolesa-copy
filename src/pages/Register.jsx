import React, { useState } from "react";

const Register = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    if (!nickname.trim() || !email.trim()) {
      alert("Заполните все поля!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("Пользователь с такой почтой уже зарегистрирован!");
      return;
    }

    const newUser = { nickname, email };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    window.location.href = "/profile";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Регистрация</h1>
      <input
        type="text"
        placeholder="Никнейм"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="border px-4 py-2 mb-3 rounded w-64"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-4 py-2 mb-3 rounded w-64"
      />
      <button
        onClick={handleRegister}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
      >
        Зарегистрироваться
      </button>
    </div>
  );
};

export default Register;
