import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const MidProjectCard = ({ project, setShowPopup }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (project.free) {
      navigate(`/build/midproject/${project.id}`, { state: { project } });
    } else if (!user?.isClubMember && project.locked) {
      setShowPopup(true);
    } else {
      navigate(`/build/midproject/${project.id}`, { state: { project } });
    }
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <div className="relative w-full aspect-[4/3] bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 mb-3">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.free ? (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] text-white shadow-lg z-10 leading-none">
            Free
          </span>
        ) : project.locked ? (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[0.65rem] font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-[#007bff] text-white shadow-lg z-10 leading-none">
            Club
          </span>
        ) : null}
        {Array.isArray(project.tags) && project.tags.length > 0 && (
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[0.6rem] font-semibold px-2 py-[2px] bg-[#bceaff] dark:bg-slate-900/80 rounded-full text-[#0600a6] dark:text-white shadow-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="px-1">
        <h3
          className="font-bold mb-1 leading-tight text-black dark:text-white"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1rem",
          }}
        >
          {project.title}
        </h3>
        {project.description && (
          <p className="text-[0.95rem] text-gray-600 dark:text-gray-300 mb-1 leading-snug line-clamp-2">
            {project.description}
          </p>
        )}
        <span
          className="text-[0.85rem] font-semibold"
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: project.free ? "#059669" : "#007bff",
          }}
        >
          {project.free ? "Free" : project.price || "₹XXX"}
        </span>
      </div>
    </div>
  );
};

export default MidProjectCard;
