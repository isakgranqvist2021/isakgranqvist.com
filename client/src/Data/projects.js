import text from './text';

const projects = [
    {
        label: 'Bobbabean App',
        description: text.bobbabean,
        focused: 0,
        images: [
            { src: 'https://static.isakgranqvist.com/projects/bobbabean_a.png', alt: 'Landing Page' },
            { src: 'https://static.isakgranqvist.com/projects/bobbabean_b.png', alt: 'Products Section' },
            { src: 'https://static.isakgranqvist.com/projects/bobbabean_c.png', alt: 'Description Section' },
            { src: 'https://static.isakgranqvist.com/projects/bobbabean_d.png', alt: 'Footer Section' }
        ],
        href: 'https://bobbabean.com',
        github: null
    },
    {
        label: 'Administration Dashboard',
        description: text.admin_dashboard,
        focused: 0,
        images: [
            { src: 'https://static.isakgranqvist.com/projects/admin_a.png', alt: 'Sign In Screen' },
            { src: 'https://static.isakgranqvist.com/projects/admin_b.png', alt: 'Dashboard Screen' },
            { src: 'https://static.isakgranqvist.com/projects/admin_c.png', alt: 'Modify Account Screen' },
            { src: 'https://static.isakgranqvist.com/projects/admin_d.png', alt: 'Accounts Screen' }
        ],
        href: null,
        github: 'https://github.com/isakgranqvist2021/Administration-UI'
    },
    {
        label: 'Restaurant App',
        description: text.restaurant_app,
        focused: 0,
        images: [
            { src: 'https://static.isakgranqvist.com/projects/restaurant_a.png', alt: 'Landing Page' },
            { src: 'https://static.isakgranqvist.com/projects/restaurant_b.png', alt: 'Landing Page With Menu Open' },
            { src: 'https://static.isakgranqvist.com/projects/restaurant_c.png', alt: 'Restaurant Page' },
            { src: 'https://static.isakgranqvist.com/projects/restaurant_d.png', alt: 'Restaurant Page With Checkout Window Open' }
        ],
        href: 'https://restaurants-apiabcdfg123123.herokuapp.com/',
        github: 'https://github.com/isakgranqvist2021/vigilant-octo-potato'
    },
    {
        label: 'Calendar App',
        description: text.calendar_app,
        focused: 0,
        images: [
            { src: 'https://static.isakgranqvist.com/projects/calendar_a.png', alt: 'Calendar View' },
            { src: 'https://static.isakgranqvist.com/projects/calendar_b.png', alt: 'My Events View' },
            { src: 'https://static.isakgranqvist.com/projects/calendar_c.png', alt: 'Modify Event View' },
        ],
        href: 'https://kalendarapp123.herokuapp.com/sign-in',
        github: 'https://github.com/isakgranqvist2021/turbo-lamp'
    }
];

export default projects;