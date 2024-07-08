const Api = () => {
  return {
    getUserProfile: async () => {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Invalid credentials");
        } else {
          throw new Error("Network response was not ok");
        }
      }
      const data = await response.json();
      return data.body;
    },
  };
};

export default Api;
