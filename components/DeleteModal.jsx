"use client";
import { useContext } from "react";
import { NotesContext } from "../app/context/NotesContext";

export default function DeleteModal() {
  const {isDeleteModalOpen,setIsDeleteModalOpen,selectedNote, deleteNote,darkMode} = useContext(NotesContext);

  if (!isDeleteModalOpen) 
    return null;

  const confirmDelete = () => {
    deleteNote(selectedNote.id);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className={`rounded-xl p-6 w-[400px] ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <h2 className="text-xl font-bold mb-3">
          Delete Note
        </h2>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this note?
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={() => setIsDeleteModalOpen(false)} className="border px-4 py-2 rounded">
            Cancel
          </button>

          <button onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}