export type TCommand = {
    command: string;
    description: string;
}

export type TFile = {
    name: string;
    path: string;
    children: TFile[];
}