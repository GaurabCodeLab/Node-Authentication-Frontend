import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }
    const validate = async () => {
      try {
        const response = await fetch("http://localhost:1634/protected", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (response.ok) {
          setIsAuthenticated(true);
        } else if (response.status === 401) {
          setIsAuthenticated(false);
          alert(result.error);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        setIsAuthenticated(false);
        alert(error);
      }
    };
    validate();
  }, []);

  return isAuthenticated;
};

export default useAuth;
