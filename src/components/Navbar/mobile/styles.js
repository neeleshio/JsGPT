import styled from 'styled-components/macro';

export const StyledMobileNav = styled.div`
    padding: 5px 10px;
    height: 50px;
    background-color: #10a37f;
    display: none;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    border-radius: 0 0 4px 4px;

    .mobilenav__container {
        display: flex;
        align-items: center;
    }

    .mobilenav__social__container {
        display: flex;
        margin-right: 30px;

        button {
            border: none;
            background: none;
            padding: 0;

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }

    .mobilenav__social {
        display: flex;
        align-items: center;
        margin-right: 30px;
        background: none;
        border: none;
        padding: 5px;
        border-radius: 50px;
        background-color: #1a2b14;

        svg {
            width: 25px;
            height: 25px;
        }
    }

    .logo-text {
        font-size: 22px;
        font-weight: 600;
        position: relative;

        .version {
            font-size: 12px;
            padding-left: 5px;
            position: absolute;
            bottom: -2px;
        }
    }

    .mobile-bookmark {
        position: absolute;
        top: 65px;
        right: 25px;
        display: none;

        &.show-bookmarks {
            display: block;
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
        position: fixed;
        z-index: 999;
        width: 100%;
    }
`;

export const StyledMobileMenu = styled.div`
    position: absolute;
    top: 65px;
    right: 25px;
    display: none;

    .mobilebtns__menu {
        display: flex;
        background-color: ${(props) => props.theme.bookmarksBg};
        font-size: 14px;
        border-radius: 8px;
        box-shadow: rgba(22, 23, 24, 0.35) 0px 10px 38px -10px,
            rgba(22, 23, 24, 0.2) 0px 10px 20px -15px;
        flex-direction: column;

        div:nth-child(1) {
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
                color: #000000;
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
    }

    &.show-menu {
        display: block;
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
`;
