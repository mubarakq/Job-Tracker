import type { cardProps } from "../types/types";
import CardMenu from "./CardMenu";

const Card = ({ companyName, role, status, date, description }: cardProps) => {
  return (
    <article className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg hover:scale-[1.]  transition-shadow duration-300">
      {/* Header */}
      <div className="bg-indigo-700 text-white text-md font-semibold p-3 flex justify-between items-center">
        <span>{companyName}</span>
        <CardMenu
          onEdit={() => console.log("Edit:", companyName)}
          onDelete={() => console.log("Delete:", companyName)}
          onPin={() => console.log("Pinned:", companyName)}
        />
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col justify-between h-56">
        <div>
          <h2 className="text-lg font-medium text-gray-800">{role}</h2>
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>

        <div className="flex justify-between items-center text-sm pt-2 mt-2 border-t border-gray-100">
          <p className="text-gray-500">{date}</p>
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              status === "Applied"
                ? "bg-blue-100 text-blue-700"
                : status === "Interviewed"
                ? "bg-yellow-100 text-yellow-700"
                : status === "Offer Accepted"
                ? "bg-green-100 text-green-700"
                : status === "Rejected"
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
