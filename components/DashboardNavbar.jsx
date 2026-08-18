"use client";

import { useContext } from "react";
import { NotesContext } from "../app/context/NotesContext";
import { Moon, Sun } from "lucide-react";
import { viga } from "@/app/fonts";

export default function DashboardNavbar() {

  const { darkMode, setDarkMode } =
    useContext(NotesContext);

  return (
    <nav className={`h-16 border-b flex items-center justify-between px-8 ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black"}`}>
      <h1 className={`${viga.className} text-md md:text-2xl font-bold`}>
        NoteFlow
      </h1>

      <button onClick={() => setDarkMode(!darkMode)} className="border p-2 rounded-lg">
        {darkMode ? (
          <Sun size={20} />
        ) : (
          <Moon size={20} />
        )}
      </button>
    </nav>
  );
}