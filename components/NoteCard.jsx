"use client";
import { useContext } from "react";
import { NotesContext } from "../app/context/NotesContext";
import { Pencil, Trash2 } from "lucide-react";

export default function NoteCard({ note }) {
    const { setSelectedNote, setIsViewModalOpen, setIsDeleteModalOpen, setIsModalOpen, setMode, darkMode } = useContext(NotesContext);

    const colors = [
        "border-t-red-500",
        "border-t-blue-500",
        "border-t-green-500",
        "border-t-yellow-500",
        "border-t-purple-500",
        "border-t-pink-500",
        "border-t-orange-500",
        "border-t-cyan-500",
    ];

    const borderColor = colors[note.id % colors.length];
    return (
        <div onClick={() => { setSelectedNote(note); setIsViewModalOpen(true); }} className={`rounded-xl p-5 shadow-sm border border-t-4 h-64 flex flex-col cursor-pointer ${borderColor} ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black"}`}>
            <h3 className="font-bold text-lg mb-2">
                {note.title}
            </h3>

            <p className={`line-clamp-4 overflow-hidden ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {note.content}
            </p>

            <div className="flex justify-between mt-auto pt-4">
                <button onClick={(e) => { e.stopPropagation(); setSelectedNote(note); setMode("edit"); setIsModalOpen(true);}}>
                    <Pencil />
                </button>
                <button onClick={(e) => { e.stopPropagation(); setSelectedNote(note); setIsDeleteModalOpen(true);}}>
                    <Trash2 />
                </button>
            </div>
        </div>
    );
}