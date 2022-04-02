import styles from './styles.module.scss';

const offersData = [
    {
        name: 'Ajuga reptans',
        price: 20.00,
    },
    {
        name: 'Cordyline',
        price: 20.00,
    },
    {
        name: 'Crassula ovata',
        price: 20.00,
    },
    {
        name: 'Cyperus rotundus',
        price: 20.00,
    },
    {
        name: 'Delairea odorata',
        price: 20.00,
    },
    {
        name: 'Datura metel',
        price: 20.00,
    },
]

export function OurOffers(){
    return(
        <div className={styles.offersContainer}>
            <p>Conheça nossas</p>
            <h2>ofertas</h2>
            <div className={styles.ourOffers}></div>
        </div>
    )
}