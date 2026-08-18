"use client";
import { useContext } from "react";
import { NotesContext } from "../app/context/NotesContext";
import NoteCard from "./NoteCard";
import { FileText } from "lucide-react";

export default function NotesGrid() {
  const { notes, sortType, searchTerm, setSearchTerm, darkMode } = useContext(NotesContext);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (sortType === "latest") {
      return b.id - a.id;
    }

    return a.id - b.id;
  });

  return (
    <main className="flex-1 p-6">
      <div className="flex flex-row justify-between">
        <div className="flex-1 text-xl font-semibold mb-6">
          All Notes
        </div>

        <input type="text" placeholder="Search by title..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={`border p-3 rounded-lg mb-6 ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black"}`} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedNotes.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center min-h-[50vh] text-center">
            <FileText size={60} className="text-gray-400 mb-4" />

            <h3 className="text-2xl font-semibold">
              No Notes Found
            </h3>

            <p className="text-gray-500 mt-2">
              Create your first note to get started.
            </p>
          </div>
        ) : (
          sortedNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))
        )}
      </div>
    </main>
  );
}