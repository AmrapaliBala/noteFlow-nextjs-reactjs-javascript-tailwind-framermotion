"use client";
import { createContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteAllModalOpen, setIsDeleteAllModalOpen] = useState(false);
  const [sortType, setSortType] = useState("latest");
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
  if (typeof window !== "undefined") {
      return JSON.parse( localStorage.getItem("darkMode")) || false;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode",JSON.stringify(darkMode));
  }, [darkMode]);

  // GET ALL NOTES
  const getNotes = () => {
    const storedNotes =JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }; 

  // CREATE NOTE
  const createNote = (note) => {
    const updatedNotes = [...notes, note];
    localStorage.setItem("notes",JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    toast.success("Note created!");
  };

  // UPDATE NOTE
  const updateNote = (id, updatedData) => {
    const updatedNotes = notes.map((note) =>note.id === id? { ...note, ...updatedData }: note);
    localStorage.setItem("notes",JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    toast.success("Note updated!");
  };

  // DELETE NOTE
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes",JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    toast.success("Note deleted!");
  };

  // DELETE ALL NOTES
  const deleteAllNotes = () => {localStorage.removeItem("notes");setNotes([]);};

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        notes,
        selectedNote,
        setSelectedNote,
        createNote,
        updateNote,
        deleteNote,
        deleteAllNotes,
        isViewModalOpen,
        setIsViewModalOpen,
        isModalOpen,
        setIsModalOpen,
        mode,
        setMode,
        isDeleteModalOpen,
        isDeleteAllModalOpen,
        setIsDeleteAllModalOpen,
        setIsDeleteModalOpen,sortType,
        setSortType,
        searchTerm,
        setSearchTerm,
        darkMode,
        setDarkMode,}}>
      {children}
      <Toaster position="top-right" />
    </NotesContext.Provider>
  );
}