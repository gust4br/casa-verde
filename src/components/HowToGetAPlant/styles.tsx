import styled from 'styled-components';

export const HowToGetContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    position: relative;
`;

export const BackgroundTree = styled.img`
    position: absolute;
    right: 6.5%;
    bottom: 85%;
    width: 55%;
`;

export const PlantBackground = styled.div`
    z-index: 2;

    width: 50%;
    height: 379px;

    display: flex;

    overflow: hidden;

    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

    img{
        width: 100%;
        height: 100%;
    }
`;

export const TutorialContainer = styled.div`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 43px;
        padding-left: 35px;

        background: white;

        z-index: 2;

        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

        p{
            font-size: 22;
            color: #202020;
            opacity: .5;
            
            margin-top: 15px;

        }

        h3{
            font-family: Elsie Swash Caps;
            font-size: 42px;
            color: #202020;
            font-weight: 900;
        }

        ul{
            display: flex;
            flex-direction: column;
            gap: 20px;
            list-style: none;

            margin-top: 20px;
            li{
                display: flex;
                align-items: center;

                p{
                    position: relative;
                    font-size: 22;
                    color: #202020;
                    opacity: .5;

                    margin-left: 1rem;

                    margin-top: 0;
                }

                &::before{
                    content: '';
                    left: 0;

                    width: 50px;
                    height: 50px;
                    border-radius: 999px;

                    background: #FFCB47;
                }
            }
        }
`;