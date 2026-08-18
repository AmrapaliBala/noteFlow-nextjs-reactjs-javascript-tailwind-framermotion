"use client";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import DashboardNavbar from "@/components/DashboardNavbar";
import Sidebar from "@/components/Sidebar";
import ViewNoteModal from "@/components/ViewNoteModal";
import NotesGrid from "@/components/NotesGrid";
import NoteModal from "@/components/NoteModal";
import DeleteModal from "@/components/DeleteModal";
import DeleteAllModal from "@/components/DeleteAllModal";

export default function Dashboard() {

  const { darkMode } = useContext(NotesContext);

  return (
    <div className={`min-h-screen flex flex-col ${ darkMode? "bg-gray-900 text-white": "bg-white text-black"}`}>
      <DashboardNavbar />

      <div className="flex flex-1">
        <Sidebar />
        <NotesGrid />
      </div>
      
      <ViewNoteModal />
      <NoteModal />
      <DeleteModal />
      <DeleteAllModal />
    </div>
  );
}