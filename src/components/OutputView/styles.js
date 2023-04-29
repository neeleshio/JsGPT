import styled from 'styled-components';

export const StyledOutputView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .outputview__top {
        height: 90%;
        overflow-y: auto;
        padding: 0 50px;

        @media screen and (max-width: 1200px) {
            padding: 0 30px;
        }

        @media screen and (max-width: 580px) {
            padding: 0 15px;
        }
    }

    .outputview__bottom {
        height: 10%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: 0 50px;
        margin-top: 20px;

        @media screen and (max-width: 1200px) {
            padding: 0 30px;
        }

        @media screen and (max-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        @media screen and (max-width: 580px) {
            padding: 0 15px;
        }
    }
`;

export const StyledChatBubble = styled.div`
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
            margin-right: 20px;
        }

        @media screen and (max-width: 992px) {
            width: 15%;
            margin-left: 20px;
            margin-right: ${({ bubble }) => !bubble && '0px'};
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
`;

export const StyledLoading = styled.div`
    display: inline-flex;
    align-items: center;
    color: #ffffff;
    margin-left: 20px;
    background: #262626;
    border-radius: 6px;
    padding: 0 10px;
    font-size: 12px;

    span {
        margin-right: 10px;
    }
`;

export const StyledMobileBtns = styled.div`
    width: 10%;
    margin-right: 20px;
    position: relative;

    .mobilebtns__menu {
        display: none;
        background-color: ${(props) => props.theme.bookmarksBg};
        font-size: 14px;
        position: absolute;
        bottom: 75px;
        border-radius: 8px;
        bottom: 80px;
        box-shadow: rgba(22, 23, 24, 0.35) 0px 10px 38px -10px,
            rgba(22, 23, 24, 0.2) 0px 10px 20px -15px;

        div:nth-child(2) {
            padding-top: 16px;
        }

        div:last-child {
            padding-bottom: 20px;
        }

        div {
            display: flex;
            align-items: center;
            padding: 6px 20px 6px 16px;

            span {
                display: block;
                width: 100%;
                margin-left: 10px;
            }
        }

        .mobilebtns__menu__bookmark {
            svg {
                margin-right: 2px;
                margin-left: 4px;
            }
        }

        .mobilebtns__menu__logo {
            font-size: 20px;
            font-weight: 600;
            position: relative;
            background-color: #10a37f;
            padding: 15px 0;
            border-radius: 8px 8px 0 0;

            svg {
                height: 30px;
                margin-left: 8px;
            }

            .logo-text {
                margin-left: 5px;
            }

            .version {
                font-size: 10px;
                font-weight: 500;
                position: absolute;
                bottom: 10px;
                left: 100px;
            }
        }

        :after {
            content: '⏷';
            position: absolute;
            font-size: 50px;
            color: ${(props) => props.theme.bookmarksBg};
            bottom: -35px;
            left: 12px;
        }

        &.show-menu {
            display: block;
        }
    }

    button {
        background-color: #10a37f;
        border-radius: 50px;
        padding: 20px;
        border: 5px solid #eee;
        width: 50px;
        height: 50px;
        margin-right: 10px;
        display: grid;
        place-items: center;

        svg {
            width: 18px;
            height: 18px;
            position: absolute;
        }
    }

    @media screen and (min-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 450px) {
        margin-right: 30px;
    }
`;
