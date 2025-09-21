import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-xl">Вы не авторизованы</h2>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Профиль</h1>
      <p className="mb-2">👤 {user.nickname}</p>
      <p className="mb-4">📧 {user.email}</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
      >
        Выйти
      </button>
    </div>
  );
};

export default Profile;
