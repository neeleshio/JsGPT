import Trash from './Svg/Trash';
import Moon from './Svg/Moon';
import User from './Svg/User';

export const nav_items = ({ fill }) => {
    return [
        {
            icon: <User fill={fill} />,
            title: 'Login'
        },
        {
            icon: <Trash fill={fill} />,
            title: 'Clear Conversation'
        },
        {
            icon: <Moon fill={fill} />,
            title: 'Dark Mode'
        }
    ];
};

export const WELCOME_MSG =
    'Welcome to JsGPT. Try me by asking questions related to JavaScript, ReactJs, NextJs, HTML & CSS.';

export const BOOKMARKS = [
    'What is Javascript?',
    'Is Javascript Asynchronous?',
    "What's the typeof NaN",
    'Explain Scope chain',
    'Main Thread blocking'
];

export const INITIAL_DATA_STATE = {
    ques: '',
    ans: WELCOME_MSG,
    error: ''
};
