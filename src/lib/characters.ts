export interface Character {
    name: string;
    subtitle: string;
    level: number;
    image: string;
    bgColor: string;
    updateProgress: number;
    team?: string[];
    stats?: {
        label: string;
        value: string;
    }[];
}

export const demoCharacter: Character = {
    name: 'Liang T43',
    subtitle: 'soul crusher',
    level: 15,
    image: 'https://via.placeholder.com/200?text=Liang',
    bgColor: 'from-gray-300 to-gray-400',
    updateProgress: 65,
    team: ['team1', 'team2', 'team3'],
    stats: [
        { label: 'Power', value: '8,500' },
        { label: 'Wins', value: '42' },
        { label: 'WR', value: '68%' }
    ]
}