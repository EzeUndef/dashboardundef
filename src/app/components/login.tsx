'use client';

import React, { useState } from "react";
import Image from "next/image";
import BackgroundImage from "../../../public/images/background.png";
import Logo from "../../../public/images/logo.png";

type LoginFormProps = {
  onLoginSuccess: () => void; // ✅ Añadimos prop para notificar login exitoso
};

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setShowError(false);

    await new Promise((res) => setTimeout(res, 500)); // Simulación de espera

    if (inputUsername === "admin" && inputPassword === "admin") {
      onLoginSuccess(); // ✅ Notificamos al componente padre
    } else {
      setShowError(true);
    }

    setLoading(false);
  };

  const handlePassword = () => {
    // lógica para recuperar contraseña
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-white p-6 rounded shadow animate-slideDown"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src={Logo} alt="logo" width={64} height={64} />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>

        {/* Error alert */}
        {showError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            Incorrect username or password.
          </div>
        )}

        {/* Username */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            required
          />
        </div>

        {/* Checkbox */}
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm ml-2">Recuérdame</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded text-white font-semibold ${
            loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        {/* Forgot password */}
        <div className="text-right mt-3">
          <button
            type="button"
            onClick={handlePassword}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            ¿Te olvidaste la contraseña?
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="absolute bottom-4 text-white text-center w-full text-sm">
        Made by Hendrik C | &copy;2022
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-150%);
          }
          70% {
            transform: translateY(1rem);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 1s ease-out;
        }
      `}</style>
    </div>
  );
}
