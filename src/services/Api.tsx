const baseUrl = "http://localhost:3001/api/v1";

interface loginParams {
  email: string;
  password: string;
}

interface userProfile {
  firstName: string;
  lastName: string;
}

type Token = string;

// export const login = async (email: password:) => {

// }

export async function login({ email, password }: loginParams): Promise<Token> {
  try {
    const response = await fetch(baseUrl + "/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error("Connexion refusée");
      } else {
        throw new Error("Erreur de connexion");
      }
    }

    const data = await response.json();
    return data.body.token;
  } catch (error) {
    if (
      error instanceof TypeError &&
      error.message.includes("net::ERR_CONNECTION_REFUSED")
    ) {
      throw new Error("Cannot connect to server");
    } else {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }
}

export async function getUserProfile(token: Token): Promise<userProfile> {
  try {
    const response = await fetch(baseUrl + "/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      if (response.status === 400) {
        throw new Error("Connexion refusée");
      } else {
        throw new Error("Erreur de connexion");
      }
    }

    const data = await response.json();
    return data.body;
  } catch (error) {
    if (
      error instanceof TypeError &&
      error.message.includes("net::ERR_CONNECTION_REFUSED")
    ) {
      throw new Error("Cannot connect to server");
    } else {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }
}
