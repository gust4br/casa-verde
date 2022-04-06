import logo from '../../assets/logo.svg';
import { SiteHeader, HeaderNav } from './styles';

export function Header(){
    return(
        <SiteHeader>
            <a href='#'>
                <img src={logo} alt="Logo Casa Verde, uma folha verde ao lado da escrita 'Casa Verde'" />
            </a>
            <HeaderNav>
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
            </HeaderNav>
        </SiteHeader>
    );
}