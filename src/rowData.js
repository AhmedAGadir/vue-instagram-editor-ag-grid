let idSequence = 11;

export const createGhostUser = () => {
    return {
        ghost: true,
        id: idSequence++,
        avatarUrl: '',
        accountDetails: {
            username: '',
            name: '',
            following: false,
            verified: false
        },
    }
}

export const isGhostUser = user => {
    return Boolean(user.ghost);
}

export const isBlankUser = user => {
    return !user.accountDetails.username
        && !user.accountDetails.name
        && !user.avatarUrl
}

export default [
    {
        id: 0,
        avatarUrl: "/assets/khabib_nurmagomedov.jpg",
        accountDetails: {
            username: "khabib_nurmagomedov",
            name: "Khabib Nurmagomedov",
            following: true,
            verified: true
        }
    }, {
        id: 1,
        avatarUrl: "/assets/itsdougthepug.jpg",
        accountDetails: {
            username: "itsdougthepug",
            name: "Doug The Pug",
            following: true,
            verified: false
        }
    },
    {
        id: 2,
        avatarUrl: "/assets/natgeotravel.jpg",
        accountDetails: {
            username: "natgeotravel",
            name: "National Geographic Travel",
            following: false,
            verified: false
        }
    },
    {
        id: 3,
        avatarUrl: "/assets/adele.jpg",
        accountDetails: {
            username: "adele",
            name: "Adele",
            following: true,
            verified: true
        }
    },
    {
        id: 4,
        avatarUrl: "/assets/instagram.jpg",
        accountDetails: {
            username: "instagram",
            name: "Instagram",
            following: true,
            verified: false
        }
    },
    {
        id: 5,
        avatarUrl: "/assets/oatly.jpg",
        accountDetails: {
            username: "oatly",
            name: "Oatly",
            following: true,
            verified: false
        }
    },
    {
        id: 6,
        avatarUrl: "/assets/lucaslepri.jpg",
        accountDetails: {
            username: "lucaslepri",
            name: "LUCAS LEPRI",
            following: true,
            verified: false
        }
    },
    {
        id: 7,
        avatarUrl: "/assets/nike.jpg",
        accountDetails: {
            username: "nike",
            name: "nike",
            following: true,
            verified: true
        }
    },
    {
        id: 8,
        avatarUrl: "/assets/commondeer.jpg",
        accountDetails: {
            username: "commondeer",
            name: "COMMON DEER",
            following: false,
            verified: false
        }
    },
    {
        id: 9,
        avatarUrl: "/assets/taylorswift.jpg",
        accountDetails: {
            username: "taylorswift",
            name: "Taylor Swift",
            following: true,
            verified: false
        }
    },
    {
        id: 10,
        avatarUrl: "/assets/leomessi.jpg",
        accountDetails: {
            username: "leomessi",
            name: "Leo Messi",
            following: false,
            verified: false
        }
    }
];


