import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHeart,
  FaRegComment,
  FaShare
} from "react-icons/fa";

export default function ProfileCard() {
  // Inline styles object
  const styles = {
    card: {
      width: "300px",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      background: "#fff",
      fontFamily: "'Courier New', Courier, monospace",
      position: "relative",
      margin: "40px auto"
    },
    header: {
      height: "120px",
      background: "linear-gradient(135deg, #3b82f6, #6366f1)"
    },
    avatarContainer: {
      width: "110px",
      height: "110px",
      borderRadius: "50%",
      border: "5px solid #fff",
      overflow: "hidden",
      position: "absolute",
      top: "60px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#fff"
    },
    avatarImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    body: {
      padding: "70px 20px 20px",
      textAlign: "center"
    },
    name: {
      margin: "0",
      fontSize: "1.6rem",
      fontFamily: "Georgia, serif",
      letterSpacing: "0.5px",
      color: "#222"
    },
    subtitle: {
      margin: "5px 0 20px",
      fontSize: "0.9rem",
      color: "#555",
      fontFamily: "'Courier New', Courier, monospace"
    },
    socialRow: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      marginBottom: "20px"
    },
    socialButton: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      cursor: "pointer"
    },
    btnRow: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "20px"
    },
    pillButton: {
      padding: "8px 20px",
      borderRadius: "20px",
      border: "none",
      background: "linear-gradient(135deg, #3b82f6, #6366f1)",
      color: "#fff",
      fontSize: "0.95rem",
      cursor: "pointer",
      fontFamily: "'Courier New', Courier, monospace"
    },
    statsRow: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      borderTop: "1px solid #eee",
      paddingTop: "12px",
      color: "#555",
      fontSize: "0.9rem"
      
    },
    statItem: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      cursor: "pointer"
    },
    divider: {
      margin: "0 12px",
      borderLeft: "1px solid #ccc",
      height: "18px"
    }
  };

  return (
    <div style={styles.card}>
      {/* Blue Gradient Header */}
      <div style={styles.header} />

      {/* Avatar (overlapping) */}
      <div style={styles.avatarContainer}>
        {/* Replace the src with your own avatar URL if needed */}
        <img
          style={styles.avatarImg}
          src="public/avatar.jpg"
          alt="Avatar"
        />
      </div>

      {/* Card Body */}
      <div style={styles.body}>
        {/* Name + Subtitle */}
        <h2 style={styles.name}>Enjambre</h2>
        <p style={styles.subtitle}>Front‐End Developer Student</p>

        {/* Social Icons */}
        <div style={styles.socialRow}>
          <div
            style={{
              ...styles.socialButton,
              backgroundColor: "#3b5998"
            }}
          >
            <FaFacebookF size={14} />
          </div>
          <div
            style={{
              ...styles.socialButton,
              backgroundColor: "#1DA1F2"
            }}
          >
            <FaTwitter size={14} />
          </div>
          <div
            style={{
              ...styles.socialButton,
              backgroundColor: "#E1306C"
            }}
          >
            <FaInstagram size={14} />
          </div>
          <div
            style={{
              ...styles.socialButton,
              backgroundColor: "#FF0000"
            }}
          >
            <FaYoutube size={14} />
          </div>
        </div>

        {/* Subscribe / Message Buttons */}
        <div style={styles.btnRow}>
          <button style={styles.pillButton}>Subscribe</button>
          <button style={styles.pillButton}>Message</button>
        </div>

        {/* Stats Row */}
        <div style={styles.statsRow}>
          <div style={styles.statItem}>
            <FaHeart size={16} />
            <span>60k</span>
          </div>

         <div style={styles.divider} />

          <div style={styles.statItem}>
            <FaRegComment size={16} />
            <span>20k</span>
          </div>

          <div style={styles.divider} />

          <div style={styles.statItem}>
            <FaShare size={16} />
            <span>12k</span>
          </div>
        </div>
      </div>
    </div>
  );
}
