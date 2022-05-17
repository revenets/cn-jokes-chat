import {nanoid} from 'nanoid';

const users = [
    {
        id: nanoid(),
        name: "Josefina",
        img: './images/avatar-1.jpg',
        messages: [
            {
                text: 'Hi, how are you ?',
                dateTime: '2022-04-27T09:24:09.636Z',
                direction: 'in',
            },
            {
                text: 'Fine, you?',
                dateTime: '2022-04-27T09:24:10.636Z',
                direction: 'out',
            },
            {
                text: "I'm ok too, thanks",
                dateTime: '2022-04-27T09:24:11.636Z',
                direction: 'in',
            },
            {
                text: 'How can I help you ?',
                dateTime: '2022-04-27T09:24:12.636Z',
                direction: 'in',
            }, 
        ]
    },
    {
        id: nanoid(),
        name: "Alice Freeman",
        img: './images/avatar-2.jpg',
        messages: [
            {
                text: 'Hi, how are you ?',
                dateTime: '2022-04-27T09:24:09.636Z',
                direction: 'in',
            },
            {
                text: 'Fine',
                dateTime: '2022-04-27T09:24:10.636Z',
                direction: 'out',
            },
            {
                text: "I need you to make a product review by Monday",
                dateTime: '2022-04-27T09:24:11.636Z',
                direction: 'out',
            },
            {
                text: "Ok, I'll try",
                dateTime: '2022-04-27T09:24:12.636Z',
                direction: 'in',
            }, 
        ]
    },
    {
        id: nanoid(),
        name: "John Walker",
        img: './images/avatar-3.jpg',
        messages: [
            {
                text: 'Hi',
                dateTime: '2022-04-27T09:24:09.636Z',
                direction: 'in',
            },
            {
                text: 'Hi',
                dateTime: '2022-04-27T09:24:10.636Z',
                direction: 'out',
            },
            {
                text: "Have any plan on evening?",
                dateTime: '2022-04-27T09:24:11.636Z',
                direction: 'in',
            },
            {
                text: "Let's go for a dinner",
                dateTime: '2022-04-27T09:24:12.636Z',
                direction: 'out',
            }, 
        ]
    },
];

export default users;