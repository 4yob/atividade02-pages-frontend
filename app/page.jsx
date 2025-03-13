"use client";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/navigation";
import Input from "../components/Input"

export default function Home() {
    const router = useRouter();

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.article}>
                    <h1>WELCOME!</h1>
                    <h3>Join us in this journey</h3>
                </div>
                <div className={styles.aside}>
                    <div className={styles.title}>
                        <h1>LOGIN</h1>
                    </div>
                    <div className={styles.inputs}>
                        <Input placeholder="E-mail Address or Username" />
                        <Input type="password" placeholder="Password" />
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
                        <h2 onClick={() => router.push("/signup")}>SIGN UP</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}