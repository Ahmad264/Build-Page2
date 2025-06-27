import React from "react";
import { useNavigate } from "react-router-dom";

const tagColors = {
  Python: "bg-[#b4a1f4] text-[#0600a6]",
  "HTML/CSS": "bg-[#daf0fa] text-[#007bff]",
  JS: "bg-[#bceaff] text-[#0600a6]",
  Beginner: "bg-[#10b981] text-white",
};

const MiniProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex-none w-40 cursor-pointer"
      onClick={() => navigate(`/build/mini/${project._id}`)}
      style={{ fontFamily: "system-ui, 'Inter', sans-serif" }}
    >
      {/* Image Card */}
      <div className="w-full h-32 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition overflow-hidden mb-3">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content Below Card */}
      <div className="px-1">
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[tag] || "bg-gray-100 text-gray-700"}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm font-medium text-[#001233] dark:text-[#e0e6f5] leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}>
          {project.title}
        </div>
      </div>
    </div>
  );
};

export default MiniProjectCard;
