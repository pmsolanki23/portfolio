const TOKEN_KEY = "token";
const TOKEN_EXPIRY_KEY = "tokenExpiry";

export const clearAuth = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRY_KEY);
};

export const saveAuth = ({ token, expiresIn }) => {
  localStorage.setItem(TOKEN_KEY, token);

  if (expiresIn) {
    localStorage.setItem(
      TOKEN_EXPIRY_KEY,
      String(Date.now() + Number(expiresIn) * 1000),
    );
  }
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isAuthenticated = () => {
  const token = getToken();
  const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);

  if (!token) {
    return false;
  }

  if (expiry && Date.now() > Number(expiry)) {
    clearAuth();
    return false;
  }

  return true;
};
