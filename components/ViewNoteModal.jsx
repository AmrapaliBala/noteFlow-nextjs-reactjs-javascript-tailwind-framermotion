"use client";
import { useContext } from "react";
import { NotesContext } from "../app/context/NotesContext";

export default function ViewNoteModal() {

  const {  isViewModalOpen, setIsViewModalOpen, selectedNote, darkMode,} = useContext(NotesContext);

  if (!isViewModalOpen || !selectedNote)
    return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className={`w-[600px] max-h-[80vh] overflow-y-auto p-6 rounded-xl ${darkMode? "bg-gray-800 text-white" : "bg-white text-black"}`}>

        <h2 className="text-2xl font-bold mb-4">
          {selectedNote.title}
        </h2>

        <p className="whitespace-pre-wrap">
          {selectedNote.content}
        </p>

        <div className="flex justify-end mt-6">
          <button onClick={() => setIsViewModalOpen(false)} className="border px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}