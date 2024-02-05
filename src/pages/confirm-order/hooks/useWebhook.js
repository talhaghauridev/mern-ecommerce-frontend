import React, { useEffect } from "react";

const useWebhook = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/webhook", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log("Webhook response:", data);
      } catch (error) {
        console.error("Error calling webhook:", error);
      }
    };

    fetchData();
  }, []);
};

export default useWebhook;
