import styled from "styled-components";

export const OffersItemContainer = styled.div`
    background: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

    width: 340px;
    height: 200px;

    padding: 20px;

    position: relative;
    overflow: hidden;

    aside{
        display: flex;
        justify-content: center;
        flex-direction: column;

        width: 50%;
        height: 200px;

        h1{
            font-family: Elsie Swash Caps;
            font-weight: 900;
            font-size: 32px;
            color: rgba(32, 32, 32, 1);
        }

        p{
            color: rgba(32, 32, 32, 1);
            opacity: .5;
            font-size: 16px;
            margin-top: 8px;
            font-weight: 500;
        }

        button{
            margin-top: 24px;

            color: #FFCB47;
            font-size: 16px;
            font-weight: 500;

            background: none;
            border: none;

            text-align: left;

            cursor: pointer;

            img{
                margin-left: 16px;
            }

            &:hover{
                opacity: 0.4;
            }
        }
    }
`;

export const OffersImage = styled.img`
    position: absolute;
    left: -5px;
    bottom: -5px;

    height: 190px;
`;