import seta from '../../assets/icons/seta.svg';

import { OffersItemContainer, OffersImage } from './styles';

interface OffersItemData{
    data: OffersItemProps
}
interface OffersItemProps{
    name: string,
    price: string,
    img: string,
}

export function OffersItem({data}: OffersItemData){
    return(
        <OffersItemContainer>
            <OffersImage src={data.img} alt={data.name} />
            <aside>
                <h1>{data.name}</h1>
                <p>R${data.price}</p>
                <button>
                    Comprar
                    <img src={seta} alt="seta no botão de comprar" />
                </button>
            </aside>
        </OffersItemContainer>
    )
}