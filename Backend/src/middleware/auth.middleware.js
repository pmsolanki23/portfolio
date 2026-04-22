// import jwt from "jsonwebtoken";

// // export const protect = (req, res, next) => {
// //   const token = req.headers.authorization;

// //   if (!token) {
// //     return res.status(401).json({ message: "No token" });
// //   }

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = decoded;
// //     next();
// //   } catch (error) {
// //     res.status(401).json({ message: "Invalid token" });
// //   }
// // };

// export const protect = (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({ message: "No token" });
//     }

//     // verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = decoded;
//     next();
//   } catch {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };


import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1]; // 🔥 FIX
    }

    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    console.error("AUTH ERROR:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};