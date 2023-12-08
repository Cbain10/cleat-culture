export type TCommand = {
    command: string;
    description: string;
}

export type TFile = {
    home: {
        name: string;
        path: string;
        children: {
            soccer: {
                name: string;
                path: string;
                children: {
                    cleats: {
                        name: string;
                        path: string;
                        children: {
                            archive: {
                                name: string;
                                path: string;
                            },
                            recommender: {
                                name: string;
                                path: string;
                            }
                        }
                    },
                    content: {
                        name: string;
                        path: string;
                    }
                }
            },
            games: {
                name: string;
                path: string;
                children: {
                    hangman: {
                        name: string;
                        path: string;
                    }
                }
            },
            [key: string]: any;
        }
    }
}