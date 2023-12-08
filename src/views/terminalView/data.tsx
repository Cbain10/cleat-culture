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

export const fileStructure: TFile = {
    home: {
        name: 'home',
        path: '/',
        children: {
            soccer: {
                name: 'soccer',
                path: '/soccer',
                children: {
                    cleats: {
                        name: 'cleats',
                        path: '/soccer/cleats',
                        children: {
                            archive: {
                                name: 'archive',
                                path: '/soccer/cleats/archive',
                            },
                            recommender: {
                                name: 'recommender',
                                path: 'soccer/cleats/recommender',
                            }
                        }
                    },
                    content: {
                        name: 'content',
                        path: '/soccer/content',
                    }
                }
            },
            games: {
                name: 'games',
                path: '/games',
                children: {
                    hangman: {
                        name: 'hangman',
                        path: '/games/hangman',
                    }
                    // TODO ADD MORE GAMES
                }
            },
        }
    }
}

export const bannerArt = String.raw`
 ______     ______     ______     __     __   __    
/\  ___\   /\  == \   /\  __ \   /\ \   /\ "-.\ \   
\ \ \____  \ \  __/   \ \  __ \  \ \ \  \ \ \-.  \  
 \ \_____\  \ \_____\  \ \_\ \_\  \ \_\  \ \_\\"\_\ 
  \/_____/   \/_____/   \/_/\/_/   \/_/   \/_/ \/_/ 

enter 'help' to see list of availabled commands
`