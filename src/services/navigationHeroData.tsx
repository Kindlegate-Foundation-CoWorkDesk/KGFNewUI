export interface NavigationHeroData {
    heroTitle: string;
    heroContent: string;
    backgroundImageUrl: string;
}

export function getNavigationHeroData(route: string): NavigationHeroData {
    switch(route) {
        case '/':
            return {
                heroTitle:'KINDLEGATE FOUNDATION',
                heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est.`,
                backgroundImageUrl: '/close-up-community-concept-with-hands.svg',
            };
        case '/OurMandate':
            return {
                heroTitle:'OUR MANDATE',
                heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. 
                Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `,
                backgroundImageUrl: '/cute-black-baby-home-with-parents.svg',

            };
        
        case '/Program':
        case '/Program/Leadership':
        case '/Program/Entrepreneurship':
        case '/Program/FoodShelter':
        case '/Program/SBGAwareness':
        case '/Program/Arts':
            return {
                heroTitle:'PROGRAMS',
                heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. 
                Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `,
                backgroundImageUrl: '/study-group-african-people.svg'
            };

        case '/OurTribe':
            return {
                heroTitle:'OUR TRIBE',
                heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. 
                Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `,
                backgroundImageUrl: '/group-happy-african-volunteers-hugs-park-africa-volunteering-charity-people-ecology-concept.svg',

            };

        
        case '/NewsAndEvent':
            return {
                heroTitle:'NEWS AND EVENT',
                heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. 
                Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `,
                backgroundImageUrl: '/man-reading-newspaper-street.svg',

            };

        case '/Blog':
            return {
                heroTitle:'BLOG',
                heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. 
                Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `,
                backgroundImageUrl: '/group-afro-americans-working-together.svg',
            };

            case '/ContactUs':
                return {
                    heroTitle:'REACH US',
                    heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Maecenas porttitor congue massa. 
                    Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                    sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `,
                    backgroundImageUrl: '/happy-black-businesswoman-taking-phone-while-working-laptop-office.svg',

                };

        default: 
        return {
            heroTitle:'KINDLEGATE FOUNDATION',
            heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Maecenas porttitor congue massa. Fusce posuere, magna sed
            pulvinar ultricies, purus lectus malesuada libero, sit amet
            commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
            est.`,
            backgroundImageUrl: '/close-up-community-concept-with-hands.svg',
        };
    }
}