import styles from './styles.module.scss';
import treeImage from '../../assets/plants/plant-1.png';
import treeBackgroundImage from '../../assets/tree-1.png';

export function HowToGetAPlant(){
    return(
        <div className={styles.howToGetContainer}>
            <img className={styles.backgroundTree} src={treeBackgroundImage} alt="arvore em uma cesta" />
            <div className={styles.plantBackground}>
                <img src={treeImage} alt="Imagem de uma bela planta" />
            </div>
            <div className={styles.tutorialContainer}>
                <p>Como conseguir</p>
                <h3>minha planta</h3>
                <ul>
                    <li><p>Escolha suas plantas</p></li>
                    <li><p>Faça seu pedido</p></li>
                    <li><p>Aguarde na sua casa</p></li>
                </ul>
            </div>
        </div>
    )
}