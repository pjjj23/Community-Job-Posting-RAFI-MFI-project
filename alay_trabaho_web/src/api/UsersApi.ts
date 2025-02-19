export const createUser = async (userData: {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  contactNumber: string;
  role: string;
}) => {
  try {
    const response = await fetch("https://alaytrabaho-d6g3b8h0gabdgwgb.canadacentral-01.azurewebsites.net/api/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `Error: ${response.statusText}`);
    }

    return await response.json(); // Return the response data
  } catch (error) {
    console.error("API Error:", error);
    throw error; // Propagate the error for the calling function to handle
  }
};
