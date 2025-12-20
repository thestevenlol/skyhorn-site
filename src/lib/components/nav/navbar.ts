export interface NavItem {
    text: string;
    href?: string;
    fa_icon?: string;
}

export const navItems = [
    { text: 'Characters', href: '/characters', fa_icon: 'fa-solid fa-user' },
]