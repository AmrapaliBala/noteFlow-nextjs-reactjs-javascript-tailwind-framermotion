"use client";
import { useContext } from "react";
import { NotesContext } from "../app/context/NotesContext";

export default function DeleteAllModal() {

  const {
    isDeleteAllModalOpen,
    setIsDeleteAllModalOpen,
    deleteAllNotes,
    darkMode,
  } = useContext(NotesContext);

  if (!isDeleteAllModalOpen) return null;

  const handleDeleteAll = () => {
    deleteAllNotes();
    setIsDeleteAllModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div
        className={`w-[400px] p-6 rounded-xl ${
          darkMode
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        }`}
      >

        <h2 className="text-xl font-bold mb-3">
          Delete All Notes
        </h2>

        <p className="mb-6 text-gray-500">
          Are you sure you want to delete all notes?
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={() =>
              setIsDeleteAllModalOpen(false)
            }
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleDeleteAll}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete All
          </button>

        </div>

      </div>

    </div>
  );
}