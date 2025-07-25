import { useState, useEffect } from "react";
import axios from "axios";

const useMidProjects = () => {
  const [midProjects, setMidProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/build/mid-projects")
      .then((res) => setMidProjects(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { midProjects, loading, error };
};

export default useMidProjects;
