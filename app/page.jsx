"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import styles from "../styles/Raiz.module.css"

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    }, [router]);

    return (
        <div className={styles.background}>
            <div className={styles.spinner}></div>
            <p>REDIRECTING</p>
        </div>
    );
}