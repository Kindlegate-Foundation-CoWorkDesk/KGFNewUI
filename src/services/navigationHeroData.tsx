export interface NavigationHeroData {
    heroTitle: string;
    heroContent: string;
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
            };
        case '/OurMandate':
            return {
                heroTitle:'OUR MANDATE',
                heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. 
                Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `,
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
            };

        case '/OurTribe':
            return {
                heroTitle:'OUR TRIBE',
                heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. 
                Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `,
            };

        
        case '/NewsAndEvent':
            return {
                heroTitle:'NEWS AND EVENT',
                heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. 
                Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `,
            };

        case '/Blog':
            return {
                heroTitle:'BLOG',
                heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. 
                Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `,
            };

            case '/ContactUs':
                return {
                    heroTitle:'REACH US',
                    heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Maecenas porttitor congue massa. 
                    Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
                    sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. `,
                };

        default: 
        return {
            heroTitle:'KINDLEGATE FOUNDATION',
            heroContent: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Maecenas porttitor congue massa. Fusce posuere, magna sed
            pulvinar ultricies, purus lectus malesuada libero, sit amet
            commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
            est.`,
        };
    }
}