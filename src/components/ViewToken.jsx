import React, { useEffect, useState } from "react";
import "./ViewToken.css";

const ViewToken = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const storedTokens = JSON.parse(localStorage.getItem("bookedTokens")) || [];
    setTokens(storedTokens);
  }, []);

  // ✅ Function to delete a token
  const handleDelete = (index) => {
    const updatedTokens = [...tokens];
    updatedTokens.splice(index, 1); // remove one token by index
    setTokens(updatedTokens);
    localStorage.setItem("bookedTokens", JSON.stringify(updatedTokens));
    alert("🗑 Token deleted successfully!");
  };

  const totalTokens = tokens.length;
  const confirmedTokens = tokens.filter((t) => t.status === "Confirmed").length;
  const pendingTokens = totalTokens - confirmedTokens;

  return (
    <div className="token-board">
      <h1 className="board-title">🏥 Hospital Token Board</h1>
      <p className="subtext">
        “Your health, our priority — stay calm, your turn is coming.”
      </p>

      <div className="summary-section">
        <div className="summary-card confirmed">
          <h3>✅ Confirmed Tokens</h3>
          <p>{confirmedTokens}</p>
        </div>
        <div className="summary-card pending">
          <h3>⏳ Pending Tokens</h3>
          <p>{pendingTokens}</p>
        </div>
        <div className="summary-card total">
          <h3>🎫 Total Registered</h3>
          <p>{totalTokens}</p>
        </div>
      </div>

      <div className="instructions">
        <h2>📋 Patient Guidelines</h2>
        <ul>
          <li>
            Please arrive <strong>10 minutes early</strong> before your
            appointment time.
          </li>
          <li>
            Keep your <strong>token number ready</strong> when your name is
            announced.
          </li>
          <li>Maintain silence and social distance in the waiting area.</li>
          <li>
            If your token is missed, kindly contact the Reception immediately.
          </li>
          <li>
            Emergency cases are given priority — we appreciate your patience.
          </li>
        </ul>
      </div>

      <div className="token-display">
        <h2>📢 Active Token Registrations</h2>
        {tokens.length === 0 ? (
          <p className="empty-msg">
            No tokens booked yet. Book your appointment to generate a token.
          </p>
        ) : (
          <ul className="token-list">
            {tokens.map((t, index) => (
              <li key={index}>
                <span className="token-id"># {index + 1}</span>
                <div className="token-info">
                  <strong>{t.name}</strong>
                  <p>Date: {t.date}</p>
                  <p>Time: {t.time}</p>
                  <p>Doctor: {t.doctor}</p>
                  <p>Token No: {t.token}</p>

                  <p>
                    Status:{" "}
                    <span className={t.status.toLowerCase()}>{t.status}</span>
                  </p>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  ❌ Cancel
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="quote-box">
        <p>◾ “Patience is also a form of treatment.” — Smart Queue Hospital</p>
      </div>
    </div>
  );
};

export default ViewToken;