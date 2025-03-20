import styles from '../styles/Card.module.css';

export default function Card({ title, content, image }) {
    return (
        <div className={styles.card2}>
            <h2>{title}</h2>
            <div className={styles.line}></div>
            <p>{content}</p>
            <image>{image}</image>
        </div>
    )
}