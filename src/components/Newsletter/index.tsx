import { useState } from 'react';
import { NewsletterContainer } from './styles';

import validator from 'validator';

export function Newsletter(){
    const [email, setEmail] = useState('');

    function AlertMessage(){
        alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`);
    }



    return(
        <NewsletterContainer>
            <h2>Sua casa com as</h2>
            <h1>melhores <br /> plantas</h1>
            <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <form action="#">
                <input type="email" name="email" id="email" placeholder='Insira seu e-mail' onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    if(validator.isEmail(e.currentTarget.value))
                        setEmail(e.currentTarget.value);
                }} />
                <button type='submit' disabled={!email} onClick={AlertMessage}>
                    Assinar newsletter
                </button>
            </form>
        </NewsletterContainer>
    )
}