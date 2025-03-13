"use client";
import styles from "../../styles/Profile.module.css";
import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter();

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.article}>
                    <div className={styles.title}>
                        <h1>PROFILE</h1>
                        <h3>@honeyb</h3>
                    </div>
                    <div className={styles.description}>
                        <h2>SOBRE MIM</h2>
                        <p>Estudante dedicada em Desenvolvimento de Sistemas, com foco em adquirir habilidades práticas e teóricas para soluções tecnológicas inovadoras. Proativa e curiosa, busca constantemente por novos aprendizados e desafios que aprimorem suas competências técnicas e interpessoais.</p>
                    </div>
                    <p>Onde me encontrar</p>
                    <div className={styles.contact}>
                        <div className={styles.link}>
                            <img src="/linkedin-icon.png" />
                        </div>
                        <div className={styles.link}>
                            <img src="/github-icon.png" />
                        </div>
                        <div className={styles.link}>
                            <img src="/instagram-icon.png" />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <h2 onClick={() => router.push("/")}>LOG OUT</h2>
                    </div>
                </div>
                <div className={styles.aside}></div>
            </div>
        </div>
    )
}