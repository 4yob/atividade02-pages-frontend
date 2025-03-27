"use client";
import styles from "../../styles/Profile.module.css";
import { useRouter } from "next/navigation";
import Card from "../../components/Card";

export default function Profile() {
    const router = useRouter();

    return (
        <div className={styles.background}>
            <div className={styles.aside}>
                <div className={styles.pages}>
                    <p onClick={() => router.push("/profile")}>MY DASHBOARD</p>
                    <p onClick={() => router.push("/signup")}>SIGN UP</p>
                    <p onClick={() => router.push("/login")}>LOG OUT</p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>MY DASHBOARD</h1>
                </div>
                <div className={styles.main}>   
                    <div className={styles.block}>
                        <div className={styles.left}>
                            <div className={styles.card1}>
                                <div className={styles.photo}>
                                    <img src="/img-profile.jpg" />
                                </div>
                                <div className={styles.description}>
                                    <h2>ALEJANDRA BARROS</h2>
                                    <p><span>SESI/SENAI-SP</span></p>
                                    <p>Estudante de Desenvolvimento de Sistemas</p>
                                    <p>2TDS1</p>
                                    <p>17 anos</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <Card title="SOBRE MIM" content="Apaixonada por arte e paisagens. Me interesso por moda, dança e música e não vivo sem meus amigos."/>
                            <Card title="TECNOLOGIAS" image1={<div className={styles.icons}>
                                <img src="/postgrees-icon.png"/>
                                <img src="/javascript-icon.png"/>
                                <img src="/css-icon.png"/>
                                <img src="/html-icon.png"/>
                                <img src="/react-icon.png"/>
                                <img src="/nextjs-icon.png"/>
                                <img src="/nodejs-icon.png"/>
                                <img src="/vscode-icon.png"/>
                                <img src="/postman-icon.png"/>
                                <img src="/figma-icon.png"/>
                                <img src="/git-icon.png"/>
                                <img src="/github-icon.png"/>
                                <img src="/expogo-icon.png"/>
                            </div>}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}