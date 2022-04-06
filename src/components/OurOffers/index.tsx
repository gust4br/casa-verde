import { OffersItem } from '../OffersItem';
import { OffersContainer, OurOffersDiv } from './styles';


const offersData = [
    {
        name: 'Ajuga reptans',
        price: '20.00',
        img: './plants/product-1.png'
    },
    {
        name: 'Cordyline fruticosa',
        price: '20.00',
        img: './plants/product-2.png'
    },
    {
        name: 'Crassula ovata',
        price: '20.00',
        img: './plants/product-3.png'
    },
    {
        name: 'Cyperus rotundus',
        price: '20.00',
        img: './plants/product-4.png'
    },
    {
        name: 'Delairea odorata',
        price: '20.00',
        img: './plants/product-5.png'
    },
    {
        name: 'Datura metel',
        price: '20.00',
        img: './plants/product-6.png'
    },
]

export function OurOffers(){
    return(
        <OffersContainer>
            <p>Conheça nossas</p>
            <h2>ofertas</h2>
            <OurOffersDiv>
                {
                    offersData.map((data) => {
                        return(
                            <OffersItem data={data} />
                        )
                    })
                }
            </OurOffersDiv>
        </OffersContainer>
    )
}