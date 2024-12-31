const Member = require("../models/memdata");

 const sampleMembers = [
    { 
     name: "Emma Walker", 
     image: {
        filename:"memberimage",
        url:"https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg",
     },
     age: 28, 
     contact: 12345678,
     adress:"XYZ",
    },
    {
    name: "James Thompson", 
    image : {
        filename:"memberimage",
        url: "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg",
    },
    age: 35,
    contact: 12345,
    adress:"XYZ",
    },
    { 
        name: "Sophia Martinez",
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        age: 22,
        contact: 12345,
        adress:"XYZ"
    },
    {
        name: "Liam Smith", 
        image : {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        age: 31,
        contact:123456,
        adress:"ABC"
    },
    {
        name: "Olivia Johnson",  
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        age:26,
        contact:123,
        adress:"abc",
    },
    {
        name: "Lucas Brown", 
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        age: 40,
        contact:1234,
        adress:"abc"
    },
    {
        name: "Ava Davis", 
        image: {
            filename:"memberimage",
            url:"https://randomuser.me/api/portraits/women/5.jpg",
        },
        age: 24,
        contact:12345,
        adress:"abc",
    },
    {
        name: "Mason White", 
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/men/6.jpg",
        },
        age: 38,
        contact:12345,
        adress:"abc",
    },
    {
        name: "Isabella Taylor",
        image: {
            filename:"memberimage",
            url: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        age: 29,
        contact:12234,
        adress:"abcd",
    },
    {
        name: "Ethan Anderson",  
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/men/8.jpg",
        },
        age: 33,
        contact:12345,
        adress:"abcd",
    },
    {
        name: "Mia Thomas", 
        image: {
            filename:"listingimage",
            url: "https://randomuser.me/api/portraits/women/9.jpg",
        },
        age: 21, 
        contact:12345,
        adress:"abcd"
    },
    {
        name: "Benjamin Martinez",  
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/men/10.jpg",
        },
        age: 36,
        contact:123456,
        adress:"abcd",
    },
    { 
        name: "Amelia Harris",
        image:{
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/women/11.jpg",
        },
        age: 30, 
        contact:1234,
        adress:"abcd",
    },
    {
        name: "Daniel Wilson",
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/men/12.jpg",
        },
        age: 25,
        contact:1234,
        adress:"abcd",
    },
    {
        name: "Evelyn Lewis", "age": 32, 
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/women/13.jpg",

        }
    },
    {
        name: "Henry Brown", 
        image:{
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/men/14.jpg",
        },
        age: 27,
        contact:1235,
        adress:"abcd",
    },
    {
        name: "Scarlett Miller",
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/women/15.jpg",
        },
        age: 22,
        contact:1234,
        adress:"xxxx",
    },
    {
        name: "Jack Moore",
        image:{
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/men/16.jpg",
        },
        age: 34, 
        contact:1235,
        adress:"xxx",
    },
    {
        name: "Harper Davis", 
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/women/17.jpg",
        },
        age: 28, 
        contact:1235,
        adress:"xxxx",
    },
    {
        name: "Lucas Clark", 
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/men/18.jpg",
        },
        age: 26,
        contact:7865,
        adress:"xxxx",
    },
    {
        name: "Ava Jackson",  
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/women/19.jpg",
        },
        age: 31,
        contact:12234,
        adress:"xxxx",
    },
    {
        name: "Alexander Martin",
        image: {
            filename:"memberimage",
             url: "https://randomuser.me/api/portraits/men/20.jpg",
        },
        age: 37, 
        contact:1233,
        adress:"xxxxx"
    },
    {
        name: "Emily Garcia", 
        image: {
            filename:"memberimage",
            url: "https://randomuser.me/api/portraits/women/21.jpg",
        },
        age: 23,
        contact:123,
        adress:"xxxx",
    }
];

module.exports = {member: sampleMembers};


    // {"name": "Oliver Harris", "age": 29, "image_url": "https://randomuser.me/api/portraits/men/22.jpg"},
    // {"name": "Grace Walker", "age": 27, "image_url": "https://randomuser.me/api/portraits/women/23.jpg"},
    // {"name": "Samuel White", "age": 40, "image_url": "https://randomuser.me/api/portraits/men/24.jpg"},
    // {"name": "Ella Hall", "age": 22, "image_url": "https://randomuser.me/api/portraits/women/25.jpg"},
    // {"name": "William Young", "age": 35, "image_url": "https://randomuser.me/api/portraits/men/26.jpg"},
    // {"name": "Sophie Adams", "age": 24, "image_url": "https://randomuser.me/api/portraits/women/27.jpg"},
    // {"name": "Logan Baker", "age": 31, "image_url": "https://randomuser.me/api/portraits/men/28.jpg"},
    // {"name": "Chloe Campbell", "age": 30, "image_url": "https://randomuser.me/api/portraits/women/29.jpg"},
    // {"name": "Noah Wright", "age": 36, "image_url": "https://randomuser.me/api/portraits/men/30.jpg"},
    // {"name": "Zoe Mitchell", "age": 28, "image_url": "https://randomuser.me/api/portraits/women/31.jpg"},
    // {"name": "David Perez", "age": 32, "image_url": "https://randomuser.me/api/portraits/men/32.jpg"},
    // {"name": "Hannah Roberts", "age": 25, "image_url": "https://randomuser.me/api/portraits/women/33.jpg"},
    // {"name": "Joseph Carter", "age": 39, "image_url": "https://randomuser.me/api/portraits/men/34.jpg"},
    // {"name": "Victoria Evans", "age": 26, "image_url": "https://randomuser.me/api/portraits/women/35.jpg"},
    // {"name": "Andrew Parker", "age": 41, "image_url": "https://randomuser.me/api/portraits/men/36.jpg"},
    // {"name": "Madison Price", "age": 23, "image_url": "https://randomuser.me/api/portraits/women/37.jpg"},
    // {"name": "Nathan Sanders", "age": 38, "image_url": "https://randomuser.me/api/portraits/men/38.jpg"},
    // {"name": "Layla Nelson", "age": 29, "image_url": "https://randomuser.me/api/portraits/women/39.jpg"},
    // {"name": "Jacob Cooper", "age": 30, "image_url": "https://randomuser.me/api/portraits/men/40.jpg"},
    // {"name": "Aubrey Murphy", "age": 22, "image_url": "https://randomuser.me/api/portraits/women/41.jpg"},
    // {"name": "Ryan Bell", "age": 35, "image_url": "https://randomuser.me/api/portraits/men/42.jpg"},
    // {"name": "Lily Reed", "age": 27, "image_url": "https://randomuser.me/api/portraits/women/43.jpg"},
    // {"name": "Dylan Cook", "age": 34, "image_url": "https://randomuser.me/api/portraits/men/44.jpg"},
    // {"name": "Aria Howard", "age": 31, "image_url": "https://randomuser.me/api/portraits/women/45.jpg"}

  
