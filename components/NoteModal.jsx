"use client";
import { useContext, useState, useEffect } from "react";
import { NotesContext } from "../app/context/NotesContext";

export default function NoteModal() {
  const { isModalOpen, setIsModalOpen, mode, createNote, updateNote, selectedNote, darkMode } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    if (mode === "edit" && selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [mode, selectedNote]);

  if (!isModalOpen)
    return null;

  const handleSubmit = () => {
    if (!title || !content)
      return;
    if (mode === "create") {
      createNote({ id: Date.now(), title, content, });
    } else {
      updateNote(selectedNote.id, { title, content, });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className={`p-6 rounded-xl w-[450px] ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <h2 className="text-xl font-bold mb-4">
          {mode === "create"? "Create Note" : "Edit Note"}
        </h2>

        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className={`border w-full p-3 rounded mb-4 ${darkMode ? "bg-gray-700 text-white border-gray-600" : ""}`} />

        <textarea placeholder="Content" rows="5" maxLength={500} value={content} onChange={(e) => setContent(e.target.value)} className={`border w-full p-3 rounded ${darkMode ? "bg-gray-700 text-white border-gray-600" : ""}`} />
        
        <p>{content.length}/500</p>

        <div className="flex justify-end gap-3 mt-5">
          <button onClick={() => setIsModalOpen(false)} className="border px-4 py-2 rounded">
            Cancel
          </button>

          <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}