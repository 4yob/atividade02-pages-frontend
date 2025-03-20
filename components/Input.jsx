import styles from "../styles/Input.module.css";

export default function Input({type, placeholder}) {
    return (
        <div className={styles.inputs}>
            <input type={type} placeholder={placeholder} />
        </div>
    );
}