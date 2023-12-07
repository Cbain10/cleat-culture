import { TCommand, TFile } from "./types";

export const availableCommands: TCommand[] = [
    {
        command: 'help',
        description: 'show all available commands'
    },
    {
        command: 'cd',
        description: 'change directory'
    },
    {
        command: 'ls',
        description: 'list files'
    },
    {
        command: 'go',
        description: 'navigate to GUI version of path'
    },
    {
        command: 'banner',
        description: 'print the banner'
    },
    {
        command: 'pwd',
        description: 'print working directory'
    },
    {
        command: 'clear',
        description: 'clear the terminal'
    }
];

/*
    home
        soccer
            cleats
                archive
                recommender
            content
        games
            hangman
*/

export const fileStructure: TFile = {
    name: 'home',
    path: '/',
    children: [
        {
            name: 'soccer',
            path: '/soccer',
            children: [
                {
                    name: 'cleats',
                    path: '/soccer/cleats',
                    children: [
                        {
                            name: 'archive',
                            path: '/soccer/cleats/archive',
                            children: []
                        },
                        {
                            name: 'recommender',
                            path: 'soccer/cleats/recommender',
                            children: []
                        }
                    ]
                },
                {
                    name: 'content',
                    path: '/soccer/content',
                    children: []
                }
            ]
        },
        {
            name: 'games',
            path: '/games',
            children: [
                {
                    name: 'hangman',
                    path: '/games/hangman',
                    children: []
                }
                // TODO ADD MORE GAMES
            ]
        }
    ]
}