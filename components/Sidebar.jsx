"use client";
import { useContext } from "react";
import { NotesContext } from "../app/context/NotesContext";
import {Plus,CalendarArrowUp,CalendarArrowDown,Trash,} from "lucide-react";

export default function Sidebar() {
  const {setIsDeleteAllModalOpen,setIsModalOpen,setMode,setSortType,darkMode,} = useContext(NotesContext);

  const handleCreate = () => {
    setMode("create");
    setIsModalOpen(true);
  };

  const sortLatest = () => {
    setSortType("latest");
  };

  const sortOldest = () => {
    setSortType("oldest");
  };

  return (
    <aside className={`w-20 md:w-64 border-r p-4 md:p-6 ${
        darkMode? "bg-gray-900 text-white border-gray-700": "bg-white text-black"}`}>
      <h2 className="hidden md:block text-xl font-semibold mb-6">
        Quick Capture
      </h2>

      <div className="space-y-4">
        <button onClick={handleCreate} className={`flex items-center justify-center md:justify-start gap-2 w-full border p-3 rounded-lg ${ darkMode ? "border-gray-600" : ""}`}>
          <Plus size={18} />
          <span className="hidden md:inline">Create Note</span>
        </button>

        <button onClick={sortLatest} className={`flex items-center justify-center md:justify-start gap-2 w-full border p-3 rounded-lg ${darkMode ? "border-gray-600" : ""}`}>
          <CalendarArrowUp size={18} />
          <span className="hidden md:inline">Sort Latest</span>
        </button>

        <button onClick={sortOldest} className={`flex items-center justify-center md:justify-start gap-2 w-full border p-3 rounded-lg ${darkMode ? "border-gray-600" : ""}`}>
          <CalendarArrowDown size={18} />
          <span className="hidden md:inline">Sort Oldest</span>
        </button>

        <button onClick={() => setIsDeleteAllModalOpen(true)} className="flex items-center justify-center md:justify-start gap-2 w-full bg-red-500 text-white p-3 rounded-lg">
          <Trash size={18} />
          <span className="hidden md:inline">Delete All Notes</span>
        </button>
      </div>
    </aside>
  );
}