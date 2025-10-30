import { useState, useEffect, useRef } from "react";

interface CardMenuProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onPin?: () => void;
}

const CardMenu = ({ onEdit, onDelete, onPin }: CardMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="text-white hover:text-indigo-200 text-xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        ⋮
      </button>

      {open && (
        <div className="absolute right-0 top-8 bg-white text-gray-700 rounded-md shadow-md border w-36 z-10 overflow-hidden">
          <button
            onClick={onEdit}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            ✏️ Edit
          </button>
          <button
            onClick={onDelete}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            🗑️ Delete
          </button>
          <button
            onClick={onPin}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            📌 Pin
          </button>
        </div>
      )}
    </div>
  );
};

export default CardMenu;
