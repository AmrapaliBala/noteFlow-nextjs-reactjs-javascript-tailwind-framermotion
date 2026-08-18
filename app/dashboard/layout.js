import NotesProvider from "../context/NotesContext";
export default function RootLayout({ children }) {
  return (
        <NotesProvider>
          {children}
        </NotesProvider>
  );
}