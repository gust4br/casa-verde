import { useEffect, useState } from 'react';
import { OffersItem } from '../OffersItem';
import { OffersContainer, OurOffersDiv } from './styles';

import { api } from '../../api';

export function OurOffers(){
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        api.get('/products').then((res) => {
            setItems(res.data);
        })

    }, [])

    return(
        <OffersContainer>
            <p>Conheça nossas</p>
            <h2>ofertas</h2>
            <OurOffersDiv>
                {
                    items.map((data) => {
                        return(
                            <OffersItem data={data} />
                        )
                    })
                }
            </OurOffersDiv>
        </OffersContainer>
    )
}