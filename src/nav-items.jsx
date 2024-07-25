import { Home, FileSpreadsheet } from "lucide-react";
import Index from "./pages/Index.jsx";
import CsvEditor from "./pages/CsvEditor.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "CSV Editor",
    to: "/csv-editor",
    icon: <FileSpreadsheet className="h-4 w-4" />,
    page: <CsvEditor />,
  },
];
