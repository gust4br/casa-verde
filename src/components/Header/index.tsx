import logo from '../../assets/logo.svg';
import styles from './styles.module.scss';

export function Header(){
    return(
        <header className={styles.headerNavigation}>
            <a href='#'>
                <img src={logo} alt="Logo Casa Verde, uma folha verde ao lado da escrita 'Casa Verde'" />
            </a>
            <nav>
                <ul>
                    <li><a href='#'>Como fazer</a></li>
                    <li>/</li>
                    <li><a href='#'>Ofertas</a></li>
                    <li>/</li>
                    <li><a href='#'>Depoimentos</a></li>
                    <li>/</li>
                    <li><a href='#'>Vídeos</a></li>
                    <li>/</li>
                    <li><a href='#'>Meu carrinho</a></li>
                </ul>
            </nav>
        </header>
    );
}