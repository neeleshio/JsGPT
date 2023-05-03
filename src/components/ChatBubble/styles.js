import styled from 'styled-components/macro';

export const StyledQuestionBubble = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;

    .bubble__text {
        border-radius: 12px;
        background: ${({ bubble }) => (bubble ? '#ffffff' : '#10a37f')};
        padding: 20px 30px;
        padding-bottom: ${({ bubble }) => bubble && '10px'};
        color: ${({ bubble }) => (bubble ? '#181818' : '#ffffff')};
        width: 95%;
        position: relative;
        /* margin-top: 10px; */
        font-size: 14px;
        line-height: 25px;

        :after {
            content: '⏷';
            color: ${({ bubble }) => (bubble ? '#ffffff' : '#10a37f')};
            ${({ bubble }) => (bubble ? `left: -12px;` : `right: -12px;`)}
            position: absolute;
            top: -2.5px;
            font-size: 50px;

            @media screen and (max-width: 768px) {
                top: -0.2px;
            }
        }

        @media screen and (max-width: 768px) {
            padding: 10px 20px;
            line-height: 20px;
        }
    }

    .bubble__avatar {
        width: 10%;

        span {
            display: block;
            width: 50px;
            height: 50px;
            background: #24c2e1;
            border-radius: 50%;
            float: ${({ bubble }) => (bubble ? 'left' : 'right')};

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            svg {
                width: 50px;
                height: 50px;
            }
        }

        @media screen and (max-width: 1200px) {
            width: 12.5%;
        }

        @media screen and (max-width: 992px) {
            width: 15%;
            margin-right: ${({ bubble }) => bubble && '20px'};
            margin-left: ${({ bubble }) => !bubble && '20px'};
        }

        @media screen and (max-width: 768px) {
            width: 10%;
        }

        @media screen and (max-width: 450px) {
            margin-right: 30px;
            margin-right: ${({ bubble }) => !bubble && '0px'};
            margin-left: ${({ bubble }) => !bubble && '30px'};
        }
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

export const StyledAnswerBubble = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;

    .bubble__text {
        border-radius: 12px;
        background-color: #ffffff;
        padding: 20px 30px;
        padding-bottom: 20px;
        color: '#181818';
        width: 95%;
        position: relative;
        font-size: 14px;
        line-height: 25px;

        :after {
            content: '⏷';
            color: #ffffff;
            left: -12px;
            position: absolute;
            top: -2.5px;
            font-size: 50px;

            @media screen and (max-width: 768px) {
                top: -0.2px;
            }
        }

        @media screen and (max-width: 768px) {
            padding: 10px 20px;
            line-height: 20px;
        }
    }

    .bubble__avatar {
        width: 10%;

        span {
            display: block;
            width: 50px;
            height: 50px;
            background: #24c2e1;
            border-radius: 50%;
            float: left;

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            svg {
                width: 50px;
                height: 50px;
            }
        }

        @media screen and (max-width: 1200px) {
            width: 12.5%;
        }

        @media screen and (max-width: 992px) {
            width: 15%;
            margin-right: 20px;
        }

        @media screen and (max-width: 768px) {
            width: 10%;
        }

        @media screen and (max-width: 450px) {
            margin-right: 30px;
            /* margin-right: ${({ bubble }) => !bubble && '0px'};
            margin-left: ${({ bubble }) => !bubble && '30px'}; */
        }
    }

    .bubble__toolbar {
        display: flex;
        float: right;

        button {
            display: grid;
            width: 35px;
            height: 35px;
            background-color: #f5f5f5;
            border-radius: 8px;
            place-items: center;
            margin: 0 8px;
            outline: none;
            border: none;
            cursor: pointer;

            :hover {
                background-color: #f0f0f0;
                transition: all 0.5s ease-out;
            }

            &.bookmark__btn {
                svg {
                    width: 15px;
                    height: 15px;
                }
            }

            svg {
                width: 18px;
                height: 18px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;
