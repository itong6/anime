import styles from '../styles/Home.module.css'

export default function Up() {
    return(
        <>
            <div className={styles.up} 
            title='Click to go up'
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
                👆🏻
            </div>
        </>
    )
}