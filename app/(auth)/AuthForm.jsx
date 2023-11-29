"use client";

import { useState } from "react";
import styles from "./AuthForm.module.css";

function AuthForm({ cta, handleAuthSubmit }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => handleAuthSubmit(e, email, password)}
      className={styles.form}
    >
      <label className={styles.inputs}>
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className={styles.inputs}>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="btn-primary">{cta}</button>
    </form>
  );
}

export default AuthForm;
