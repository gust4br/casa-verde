import styled from 'styled-components';

export const NewsletterContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 50%;

    margin-top: 150px;

    h2{
        color: #202020;
        font-size: 22px;
        opacity: 0.5;
        font-weight: 400;
    }

    h1{
        font-family: Elsie Swash Caps;
        font-weight: 900;
        font-size: 82px;
        color: #202020;

        margin-top: 12px;
    }

    p{
        color: #202020;
        font-size: 1rem;
        opacity: 0.5;

        margin-top: 24px;

        width: 80%;
    }

    form{
        display: flex;
        align-items: center;
        justify-content: space-between;

        background: white;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

        margin-top: 37px;

        position: relative;

        &:before{
            content: '';

            background: url('../../assets/icons/mail.svg') no-repeat;
            background-size: contain;
            width: 21px;
            height: 10px;

            position: absolute;
            left: 16px;

        }


            input[type=email]{
                border: none;
                padding: 15px;

                width: 50%;

                margin-left: 33px;
                
                outline: none;
            }

        button{
            background: #FFCB47;
            padding: 24px;

            color: white;
            font-size: 1rem;

            max-width: calc(50% - 10px);

            border: none;

            cursor: pointer;

            z-index: 2;

            &:hover{
                filter: brightness(1.07);
            }

            &:disabled{
                opacity: .4;
                cursor: not-allowed;
            }
        }
    }
`;
