import styles from "../styles/Input.module.css";

export default function Input({placeholder}) {
    return (
        <div className={styles.inputs}>
            <input type="text" placeholder={placeholder} />
        </div>
    );
}