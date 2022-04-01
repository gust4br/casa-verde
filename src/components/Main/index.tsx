import { Newsletter } from '../Newsletter';
import styles from './styles.module.scss';

export function Main(){
    return(
        <main className={styles.mainContainer}>
            <Newsletter />
        </main>
    )
}