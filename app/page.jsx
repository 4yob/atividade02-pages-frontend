import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.article}>
                    <h1>WELCOME!</h1>
                    <h3>Join us in this journey</h3>
                </div>
                <div className={styles.aside}>
                    <h1>LOGIN</h1>
                    <div className={styles.inputs}>
                        <input type="text" placeholder="E-mail Address or Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">CONTINUE</button>
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
                    <p>Or</p>
                    <h2>SIGN UP!</h2>
                </div>
            </div>
        </div>
    )
}