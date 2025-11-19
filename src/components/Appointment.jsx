import React, { useState, useEffect } from "react";
import "./Appointment.css";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    number:"",
    email:"",
    department: "",
    doctor: "",
    date: "",
    time: "",
  });

  const [availableSlots, setAvailableSlots] = useState([]);
  const [warning, setWarning] = useState("");
  const [tokenData, setTokenData] = useState(null);

  const departments = {
    Cardiology: ["Dr. A. Sharma", "Dr. R. Menon"],
    Dermatology: ["Dr. P. Singh", "Dr. N. Kapoor"],
    Neurology: ["Dr. V. Rao", "Dr. A. Pillai"],
    Orthopedics: ["Dr. K. Mehta", "Dr. S. Iyer"],
    Pediatrics: ["Dr. T. Das", "Dr. M. Joshi"],
  };

  // --- OPTION A: Fixed doctor schedules ---
  const doctorAvailability = {
    "Dr. A. Sharma": ["09:00 AM", "09:30AM", "10:00 AM", "10:30AM", "11:00AM"],
    "Dr. R. Menon": ["11:00 to 1:00 PM", "2:00-4:00 PM"],
    "Dr. P. Singh": ["1:00 to 3:00 PM", , "9:00-10:00AM"],
    "Dr. N. Kapoor": ["10:00", "10:30", "11:00"],
    "Dr. V. Rao": ["12:00", "12:30", "13:00"],
    "Dr. A. Pillai": ["09:00", "09:30"],
    "Dr. K. Mehta": ["9:00 to 10:00 AM", "11:00 to 1:00 PM"],
    "Dr. S. Iyer": ["09:30", "10:00", "10:30"],
    "Dr. T. Das": ["11:00", "11:30"],
    "Dr. M. Joshi": ["1:00-2:00 PM", "6:00-8:00 AM"],
  };

  // Load booked slots for validation
  const getBookedSlots = () => JSON.parse(localStorage.getItem("bookedTokens")) || [];

  // Update slot dropdown whenever doctor or date changes
  useEffect(() => {
    if (!formData.doctor || !formData.date) {
      setAvailableSlots([]);
      return;
    }

    let slots = doctorAvailability[formData.doctor] || [];

    // Check booked slots (OPTION C)
    const booked = getBookedSlots().filter(
      (t) => t.doctor === formData.doctor && t.date === formData.date
    );

    const updatedSlots = slots.map((slot) => ({
      time: slot,
      booked: booked.some((b) => b.time === slot),
    }));

    setAvailableSlots(updatedSlots);
  }, [formData.doctor, formData.date]);

  // OPTION B: Warning if invalid slot selected
  const handleTimeSelection = (value) => {
    setFormData({ ...formData, time: value });

    if (!doctorAvailability[formData.doctor]?.includes(value)) {
      setWarning("⚠ Doctor is not available at this time.");
    } else {
      setWarning("");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setWarning("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (warning) {
      alert("Please select a valid available time.");
      return;
    }

    const storedTokens = getBookedSlots();

    const tokenNumber = "T" + Date.now().toString().slice(-4);

    storedTokens.push({
      name: formData.name,
      age: formData.age,
      department: formData.department,
      doctor: formData.doctor,
      date: formData.date,
      time: formData.time,
      token: tokenNumber,
      status: "Confirmed",
    });

    localStorage.setItem("bookedTokens", JSON.stringify(storedTokens));

    alert(`✅ Appointment booked successfully!\nYour Token No: ${tokenNumber}`);

    const randomToken = "SQ-" + Math.floor(1000 + Math.random() * 9000);
    const newToken = { ...formData, token: randomToken };
    setTokenData(newToken);

    setFormData({
      name: "",
      age: "",
      department: "",
      doctor: "",
        date: "",
      time: "",
    });
  };

  // Download token
  const handleDownload = () => {
    if (!tokenData) return;

    const tokenContent = `
🏥 SMART QUEUE HOSPITAL — Appointment Token

Patient Name: ${tokenData.name}
Age: ${tokenData.age}
Department: ${tokenData.department}
Doctor: ${tokenData.doctor}
Date: ${tokenData.date}
Time: ${tokenData.time}
Token Number: ${tokenData.token}

📋 Notes:
- Please arrive 10 minutes before your appointment.
- Carry this token for hospital verification.
- If you come late, your token may be skipped.

Thank you for choosing Wellness Hospital 💚
`;

    const blob = new Blob([tokenContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${tokenData.name}_Token.txt`;
    link.click();
  };

  return (
    <div className="appointment">
      <div className="overlay">
        <div className="appointment-container">
          <h1 className="main-title">
            <i className="ri-calendar-2-line"></i> Book Your Appointment
          </h1>

          {!tokenData ? (
            <>
              <div className="rules">
                <h2>Appointment Guidelines</h2>
                <ul>
                  <li>Arrive at least 10 minutes before your appointment.</li>
                  <li>Carry your valid ID and token number for verification.</li>
                  <li>Each token is valid only for the chosen date and time.</li>
                  <li>Emergency patients will be prioritized if needed.</li>
                </ul>
              </div>

              <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>


                <div className="form-row">
                  <div className="form-group">
                    <label>Department</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Department</option>
                      {Object.keys(departments).map((dept) => (
                        <option key={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Doctor</label>
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      disabled={!formData.department}
                      required
                    >
                      <option value="">
                        {formData.department
                          ? "Select Doctor"
                          : "Select Department first"}
                      </option>

                      {formData.department &&
                        departments[formData.department].map((doc) => (
                          <option key={doc}>{doc}</option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label> Appointment Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Time Slot</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={(e) => handleTimeSelection(e.target.value)}
                      disabled={!availableSlots.length}
                      required
                    >
                      <option value="">
                        {formData.doctor && formData.date
                          ? "Select Time Slot"
                          : "Select Doctor and Date"}
                      </option>

                      {availableSlots.map((slot) => (
                        <option
                          key={slot.time}
                          value={slot.time}
                          disabled={slot.booked}
                        >
                          {slot.time} {slot.booked ? "(Booked)" : ""}
                        </option>
                      ))}
                    </select>

                    {warning && (
                      <p style={{ color: "red", marginTop: "5px" }}>{warning}</p>
                    )}
                  </div>
                </div>

                <div className="center-btn">
                  <button className="submit-btn" type="submit">
                    Confirm Appointment
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="token-card">
              <h2>Appointment Confirmed ✅</h2>
              <div className="token">Token: {tokenData.token}</div>

              <div className="token-details">
                <p>
                  <strong>Name:</strong> {tokenData.name}
                </p>
                <p>
                  <strong>Age:</strong> {tokenData.age}
                </p>
                <p>
                  <strong>Mobile Number:</strong> {tokenData.number}
                </p>
                <p>
                  <strong>Email Address:</strong> {tokenData.email}
                </p>
                <p>
                  <strong>Department:</strong> {tokenData.department}
                </p>
                <p>
                  <strong>Doctor:</strong> {tokenData.doctor}
                </p>
                <p>
                  <strong>Date:</strong> {tokenData.date}
                </p>
                <p>
                  <strong>Time:</strong> {tokenData.time}
                </p>
              </div>

              <div className="token-note">
                <p>Please show this token at the hospital front desk.</p>
                <p>If you come late, your token may be skipped.</p>
                <p>
                  <strong>This token is important — keep it safe!</strong>
                </p>
              </div>

              <div className="center-btn">
                <button className="book-again" onClick={() => setTokenData(null)}>
                  Book Another Appointment
                </button>
              </div>

              <div className="center-btn" style={{ marginTop: "15px" }}>
                <button className="book-again" onClick={handleDownload}>
                  Download Your Token
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appointment;