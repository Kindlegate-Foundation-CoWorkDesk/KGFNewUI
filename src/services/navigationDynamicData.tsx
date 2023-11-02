// navigationData.ts
export const navigationDynamicLinks = [
    { id: 1, text: 'HOME', url: '/', identifier: 'home' },
    { id: 2, text: 'OUR MANDATE', url: '/OurMandate', identifier: 'ourMandate'
        
    },
    { id: 3, text: 'PROGRAM', url: '', identifier: 'program',
        submenu: [
            { id: 31, text: 'ARTS', url: '/Program/Arts' },
            { id: 32, text: 'LEADERSHIP', url: '/Program/Leadership' },
            { id: 33, text: 'ENTREPRENEURSHIP', url: '/Program/Entrepreneurship' },
            { id: 34, text: 'FOOD SHELTER', url: '/Program/FoodShelter' },
            { id: 35, text: 'SBG AWARENESS', url: '/Program/SBGAwareness' },
            
        ]
    },

    { id: 4, text: 'OUR TRIBE', url: '/OurTribe', identifier: 'ourTribe',
    submenu: [
        { id: 41, text: 'BOARD OF DIRECTORS', url: '/OurTribe/BoardOfDirectors' },
        { id: 42, text: 'EXECUTIVE ADVISORY', url: '/OurTribe/ExecutiveAdvisory' },
        { id: 43, text: 'DEVELOPMENT TEAM', url: '/OurTribe/DevelopmentTeam' },
    ]
    },
    { id: 5, text: 'NEWS', url: '/NewsAndEvent', identifier: 'newsAndEvent' },
    { id: 6, text: 'BLOG', url: '/Blog', identifier: 'blog' },
    { id: 7, text: 'CONTACT US', url: '/ContactUs', identifier: 'contactUs' },
    { id: 8, text: 'GET INVOLVED', url: '/GetInvoled', identifier: 'getInvolved',
    submenu: [
        { id: 81, text: 'AS A SPONSOR', url: '/GetInvoled/AsASponsor' },
        { id: 82, text: 'AS A MENTOR', url: '/GetInvoled/AsAMentor' },
        { id: 83, text: 'AS VOLUNTEER', url: '/GetInvoled/AsVolunteer' },

    ]
    },
  ];
  
  
  