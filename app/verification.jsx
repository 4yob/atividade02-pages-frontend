"use client";

import { useState } from "react";
import styles from "../styles/Verification.module.css";
import Input from "../components/Input";

export default function Verification() {
        const [input1, setInput1] = useState("");
        const [input2, setInput2] = useState("");
        const [match, setMatch] = useState(null);
        const [error, setError] = useState(null);
    
        const handleCheck = () => {
            if (input1 !== input2) {
                setMatch(false);
                setError("The passwords do not match. Try Again.");
            } else if (input1.length < 6) {
                setMatch(false);
                setError("The password must have at least 6 characters. Try Again.");
            } else {
                setMatch(true);
                setError("Success, Welcome!");
            }
        };

    return (
        <div className={styles.inputs}>
            <Input type="password" 
            placeholder="Enter password"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            />

            <Input type="password" 
            placeholder="Enter password again"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            />

            <button onClick={handleCheck}>CHECK</button>

            {match !== null && <p>{error}</p>}
        </div>
    );
}