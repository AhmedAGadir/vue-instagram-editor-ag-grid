export const getBlankUser = () => {
    return {
        id: Math.floor(Math.random() * 99999) + 10,
        avatarUrl: '',
        username: null,
        name: null,
        following: false,
        verified: false
    }
}

export const isBlankUser = user => {
    return !user.username
        && !user.name
        && !user.avatarUrl
}

export default [
    {
        id: 0,
        avatarUrl: "/assets/khabib_nurmagomedov.jpg",
        username: "khabib_nurmagomedov",
        name: "Khabib Nurmagomedov",
        following: true,
        verified: true
    }, {
        id: 1,
        avatarUrl: "/assets/itsdougthepug.jpg",
        username: "itsdougthepug",
        name: "Doug The Pug",
        following: true,
        verified: false
    },
    {
        id: 2,
        avatarUrl: "/assets/natgeotravel.jpg",
        username: "natgeotravel",
        name: "National Geographic Travel",
        following: false,
        verified: false
    },
    {
        id: 3,
        avatarUrl: "/assets/adele.jpg",
        username: "adele",
        name: "Adele",
        following: true,
        verified: true
    },
    {
        id: 4,
        avatarUrl: "/assets/instagram.jpg",
        username: "instagram",
        name: "Instagram",
        following: true,
        verified: false
    },
    {
        id: 5,
        avatarUrl: "/assets/oatly.jpg",
        username: "oatly",
        name: "Oatly",
        following: true,
        verified: false
    },
    {
        id: 6,
        avatarUrl: "/assets/lucaslepri.jpg",
        username: "lucaslepri",
        name: "LUCAS LEPRI",
        following: true,
        verified: false
    },
    {
        id: 7,
        avatarUrl: "/assets/nike.jpg",
        username: "nike",
        name: "nike",
        following: true,
        verified: true
    },
    {
        id: 8,
        avatarUrl: "/assets/commondeer.jpg",
        username: "commondeer",
        name: "COMMON DEER",
        following: false,
        verified: false
    },
    {
        id: 9,
        avatarUrl: "/assets/taylorswift.jpg",
        username: "taylorswift",
        name: "Taylor Swift",
        following: true,
        verified: false
    },
    {
        id: 10,
        avatarUrl: "/assets/leomessi.jpg",
        username: "leomessi",
        name: "Leo Messi",
        following: false,
        verified: false
    }
];