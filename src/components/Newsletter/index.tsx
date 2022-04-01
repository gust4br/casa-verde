import styles from './styles.module.scss';

export function Newsletter(){
    return(
        <div className={styles.newsletterContainer}>
            <h2>Sua casa com as</h2>
            <h1>melhores <br /> plantas</h1>
            <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <form action="#">
                <input type="email" name="email" id="email" placeholder='Insira seu e-mail' />
                <button type='submit'>
                    Assinar newsletter
                </button>
            </form>
        </div>
    )
}