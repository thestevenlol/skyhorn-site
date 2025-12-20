export interface NavItem {
    text: string;
    href?: string;
    fa_icon?: string;
}

export const navItems: NavItem[][] = [
    [
        { text: 'Characters', href: '/characters', fa_icon: 'fa-solid fa-user' },
    ],  // Left section
    [],  // Middle section
    []   // Right section
];