"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "../../styles/Home.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";


export default function SignUp() {
    const router = useRouter();

    const [senha, setSenha] = useState(""); 
    const [confirmSenha, setConfirmSenha] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCheck = () => {
        if (isSubmitting) return;
        setIsSubmitting(true);

        if (senha.length < 6) {
            setError("A senha deve ter no mínimo 6 caracteres");
            setIsSubmitting(false);
            return;
        }
        if (senha !== confirmSenha) {
            setError("As senhas não coincidem");
            setIsSubmitting(false);
            return;
        }

        setError("Success");

        setTimeout(() => {
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.article}>
                    <h1>WELCOME!</h1>
                    <h3>Sign Up to access</h3>
                </div>
                <div className={styles.aside}>
                    <div className={styles.title}>
                        <h1>SIGN UP</h1>
                    </div>
                    <div className={styles.inputs} onSubmit={(e) => e.preventDefault()}>
                        <Input type="text"
                        placeholder="Insert your e-mail"/>

                        <Input type="password"
                        placeholder="Insert your passcode"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}/>

                        <Input type="password"
                        placeholder="Insert your passcode again"
                        value={confirmSenha}
                        onChange={(e) => setConfirmSenha(e.target.value)}/>
                    </div>

                    <Button
                    text="CONTINUE"
                    onClick={handleCheck}
                    disabled={isSubmitting}
                    route={error === "Success" ? "/profile" : null} />

                    {error && <p className={`error-text ${error === "Sucesso" ? "success" : ""}`}>{error}</p>}

                    <p>Connect with</p>
                    <div className={styles.socialmedia}>
                        <div className={styles.media}>
                            <img src="/google-icon.png"/>
                        </div>
                        <div className={styles.media}>
                            <img src="/ios-icon.png"/>
                        </div>
                        <div className={styles.media}>
                            <img src="/facebook-icon.png"/>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <p>Or</p>
                        <h2 onClick={() => router.push("/")}>LOG IN</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}