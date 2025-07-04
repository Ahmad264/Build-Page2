import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const MajorProjectCard = ({ project, setShowPopup }) => {
  const handleCardClick = (e) => {
    if (
      e.target.closest("button") &&
      e.target.closest("button").getAttribute("aria-label") === "WhatsApp Us"
    ) {
      return;
    }
    setShowPopup(true);
  };

  const handleWhatsapp = (e) => {
    e.stopPropagation();
    window.open(
      `https://wa.me/91XXXXXXXXXX?text=I want to know more about ${project.title}`,
      "_blank"
    );
  };

  return (
    <div
      className="relative flex flex-col md:flex-row bg-gradient-to-r from-[#007bff] via-[#0600a6] to-[#b4a1f4] rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] text-white shadow z-10">
        Club
      </span>
      <div className="relative flex items-center justify-center bg-[#0600a6] md:w-1/3 w-full h-40 md:h-auto min-h-[160px] md:min-h-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {project.trainer && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#10b981] text-white">
                Trainer Supported
              </span>
            )}
          </div>
          <div
            className="font-bold mb-1"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#001233",
              fontSize: "1.05rem",
            }}
          >
            {project.title}
          </div>
          <div className="text-white text-sm mb-2">{project.description}</div>
          <div
            className="text-[#bceaff] text-xs mb-2"
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {project.tech}
          </div>
          <div className="text-[#bceaff] text-xs">Duration : {project.duration}</div>
        </div>
        <div className="mt-4">
          <button
            onClick={handleWhatsapp}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-semibold shadow transition"
            aria-label="WhatsApp Us"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <FaWhatsapp className="text-lg" />
            Consult Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MajorProjectCard;
