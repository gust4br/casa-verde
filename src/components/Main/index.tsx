import { HowToGetAPlant } from '../HowToGetAPlant';
import { Newsletter } from '../Newsletter';
import { OurOffers } from '../OurOffers';

import { MainContainer, HowToGetAPlantContainer } from './styles';

export function Main(){
    return(
        <MainContainer>
            <Newsletter />
            <HowToGetAPlantContainer>
                <HowToGetAPlant />
                <OurOffers />
            </HowToGetAPlantContainer>
        </MainContainer>
    )
}