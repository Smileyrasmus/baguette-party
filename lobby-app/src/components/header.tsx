import styles from './header.module.css'

export default () => {
    return <div class={styles.header}>
        <span class={styles.title}>Baguette Party!</span>
        <span class={styles.userDetails}>UserID: 123456789</span>
    </div>;
}