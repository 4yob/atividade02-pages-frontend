import styles from '../styles/Card.module.css';

export default function Card({ title, content, image1, image2 }) {
    return (
        <div className={styles.card2}>
            <h2>{title}</h2>
            <div className={styles.line}></div>
            <p>{content}</p>
            <image>{image1}</image>
            <image>{image2}</image>
        </div>
    )
}