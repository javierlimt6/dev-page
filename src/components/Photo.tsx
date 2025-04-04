import React from "react";
import { motion } from "framer-motion";

const Photo = () => {
  return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
        <motion.img
          src="ghiblipfp.png" // Replace with the path to your photo
          alt="My Photo"
          style={{ width: "300px", borderRadius: "50%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
  );
};

export default Photo;