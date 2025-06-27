import React, { useRef, useState } from "react";
import MiniProjectCard from "../../components/Build/MiniProjectCard";
import MajorProjectCard from "../../components/Build/MajorProjectCard";
import MidLevelProjectsAnimatedLayout from "../../components/Build/MidLevelProjectsAnimatedLayout";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import AccessPopup from "../../utils/accessPopup";
import useMiniProjects from "../../hooks/useMiniProjects";
import useMidProjects from "../../hooks/useMidProjects";

const majorProjects = [
  {
    id: 1,
    title: "Full-Stack E-commerce Platform with Payment Integration",
    description:
      "Build a complete e-commerce platform with user authentication, product management, shopping cart, and payment gateway integration.",
    tech: "React, Node.js, MongoDB, Advanced",
    duration: "2 - 3 weeks",
    image: "/assets/cards/major_projects/major-ecommerce.png",
    trainer: true,
  },
  {
    id: 2,
    title: "AI-Powered Chatbot with Natural Language Processing",
    description:
      "Develop an intelligent chatbot using NLP techniques to understand and respond to user queries effectively.",
    tech: "Python, NLP, Machine Learning, Advanced",
    duration: "3 - 4 weeks",
    image: "/assets/cards/major_projects/major-chatbot.png",
    trainer: true,
  },
];

const BuildPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const { miniProjects, loading, error } = useMiniProjects();
  const { midProjects, loading: loadingMid, error: errorMid } = useMidProjects();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const processedMidProjects = midProjects.map((project, index) => ({
    ...project,
    free: index < 2,
    locked: index >= 2,
    price: index < 2 ? "Free" : "₹XXX",
  }));

  return (
    <main
      className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16"
      style={{ fontFamily: "system-ui, 'Inter', sans-serif" }}>
      {/* Hero Header */}
      <h1
        className="mb-8"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "bold",
          fontSize: "3rem",
          letterSpacing: "2px",
          background: "linear-gradient(90deg, #007bff 0%, #0600a6 50%, #b4a1f4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          transition: "all 0.3s ease",
        }}>
        Build Your Skills with Projects
      </h1>

      {/* Mini Projects */}
      <section className="mb-16">
        <h2
          className="mb-3"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            fontSize: "1.25rem",
            background: "linear-gradient(90deg, #007bff 0%, #0600a6 50%, #b4a1f4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}>
          Mini Projects
        </h2>

        {loading ? (
          <p style={{ color: "#059669" }}>Loading mini projects...</p>
        ) : error ? (
          <p style={{ color: "#dc2626" }}>Error: {error}</p>
        ) : (
          <div className="flex items-start w-full">
            <button
              onClick={() => scroll("left")}
              className="mr-2 mt-12 bg-white dark:bg-[#0a1128] rounded-full shadow p-1 hover:bg-gray-100 dark:hover:bg-[#001233]"
              aria-label="Scroll left">
              <ChevronLeftIcon
                className="w-6 h-6"
                style={{ color: "#001233" }}
              />
            </button>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto pb-4 no-scrollbar gap-5 flex-1"
              style={{ scrollBehavior: "smooth" }}>
              {miniProjects.length > 0 ? (
                miniProjects.map((project) => (
                  <MiniProjectCard key={project._id} project={project} />
                ))
              ) : (
                <p style={{ color: "#7c7c7c" }}>No mini projects found.</p>
              )}
            </div>
            <button
              onClick={() => scroll("right")}
              className="ml-2 mt-12 bg-white dark:bg-[#0a1128] rounded-full shadow p-1 hover:bg-gray-100 dark:hover:bg-[#001233]"
              aria-label="Scroll right">
              <ChevronRightIcon
                className="w-6 h-6"
                style={{ color: "#001233" }}/>
            </button>
          </div>
        )}

        <div className="mt-4 flex justify-center">
          <button
            className="text-base font-medium px-6 py-2 rounded-full bg-[#bceaff] dark:bg-[#001233] text-[#001233] dark:text-[#e0e6f5] shadow border border-gray-200 hover:bg-[#daf0fa] dark:hover:bg-[#0a1128] transition"
            onClick={() => navigate("/build/mini")}
            style={{ fontFamily: "'Poppins', sans-serif" }}>
            See All Mini Projects
          </button>
        </div>
      </section>

      {/* Mid-Level Projects */}
      <section className="mb-16">
        <h2
          className="mb-6"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            fontSize: "1.25rem",
            background: "linear-gradient(90deg, #007bff 0%, #0600a6 50%, #b4a1f4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}>
          Mid-Level Projects
        </h2>
        {loadingMid ? (
          <p style={{ color: "#059669" }}>Loading mid projects...</p>
        ) : errorMid ? (
          <p style={{ color: "#dc2626" }}>Error: {errorMid}</p>
        ) : (
          <MidLevelProjectsAnimatedLayout
            projects={processedMidProjects}
            setShowPopup={setShowPopup}/>
        )}
      </section>

      {/* Major Projects */}
      <section className="mb-12">
        <h2
          className="mb-3"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            fontSize: "1.25rem",
            background: "linear-gradient(90deg, #007bff 0%, #0600a6 50%, #b4a1f4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}>
          Major Projects
        </h2>
        <div className="flex flex-col gap-6">
          {majorProjects.map((project) => (
            <MajorProjectCard
              key={project.id}
              project={project}
              setShowPopup={setShowPopup}/>
          ))}
        </div>
      </section>

      {/* UI Source Library */}
      <section className="mt-14">
        <h2
          className="mb-1"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            fontSize: "1.25rem",
            color: "#001233",
          }}>
          UI Source Library
        </h2>
        <p style={{ color: "#001233", marginBottom: "1rem" }}>
          Explore a collection of reusable UI components to accelerate your development process.
        </p>
        <button
          className="px-5 py-2 rounded-full bg-[#bceaff] dark:bg-[#001233] text-[#001233] dark:text-[#e0e6f5] font-semibold shadow hover:bg-[#daf0fa] dark:hover:bg-[#0a1128] transition"
          onClick={() => navigate("/build/ui")}
          style={{ fontFamily: "'Poppins', sans-serif" }}>
          Explore Components &rarr;
        </button>
      </section>

      <AccessPopup open={showPopup} onClose={() => setShowPopup(false)} />
    </main>
  );
};

export default BuildPage;
