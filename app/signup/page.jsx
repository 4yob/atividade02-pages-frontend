"use client";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/navigation";


export default function SignUp() {
    const router = useRouter();

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
                    <div className={styles.inputs}>
                        <input type="text" placeholder="alejandra.barros@aluno.senai.br" />
                        <input type="password" placeholder="12345" />
                        <div className={styles.passwordp}>
                            <p>Confirme a senha *</p>
                        </div>
                        <input type="password" placeholder="12345" />
                        <button type="submit" onClick={() => router.push("/profile")}>CONTINUE</button>
                    </div>
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