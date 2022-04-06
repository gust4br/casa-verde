import treeImage from '../../assets/plants/plant-1.png';
import treeBackgroundImage from '../../assets/tree-1.png';
import {HowToGetContainer, BackgroundTree, PlantBackground, TutorialContainer} from './styles';

export function HowToGetAPlant(){
    return(
        <HowToGetContainer>
            <BackgroundTree src={treeBackgroundImage} alt="arvore em uma cesta" />
            <PlantBackground>
                <img src={treeImage} alt="Imagem de uma bela planta" />
            </PlantBackground>
            <TutorialContainer>
                <p>Como conseguir</p>
                <h3>minha planta</h3>
                <ul>
                    <li><p>Escolha suas plantas</p></li>
                    <li><p>Faça seu pedido</p></li>
                    <li><p>Aguarde na sua casa</p></li>
                </ul>
            </TutorialContainer>
        </HowToGetContainer>
    )
}