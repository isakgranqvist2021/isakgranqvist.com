const projects = [
    {
        label: 'Bobbabean App',
        description: `This project was initially given to me as a single html file with the purpose of re-building the navigation system but I ended up rebuilding the whole webpage. I chose Angular 11 as my framework and I am quite happy with my work. The source code can be provided if you would be interested in that. In retrospect I would have chosen React rather than Angular due to project size. React seems more suitable for building smaller projects in my opinion.`,
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
        label: 'Restaurant App',
        description: `This project was presented to me as - build a restaurant app like uber-eats. This was a school project and I used two different API's in the development process. Documenu for fetching restaurant data and MapboxGL for the map integration. If given the same project today there are a lot of things I would have done differently. There was a restriction on the project as well which was to not use a SPA framework. Which obviously made the process a lot more challenging.`,
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
        description: `The project was presented as a specification list and I have developed most of the things with moderate success. The restrictions were not to use a SPA framework which of course made things a lot more challenging. The backend was built in Node.js + Express and the client in pure JavaScript. The project also makes use of sessions to enable the sign-in and sign-up features which was a requirement.`,
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