export type MediaItem = {
    src: string;
    type: "image" | "video" | "vimeo";
};

export type Project = {
    title : string;
    category?: string;
    media: MediaItem[];
};

const projects: Project[] = [
    {
        title: "Tuntum",
        category: "character",
        media: [
        { type: "image", src: "/proj/tuntum/0.png" },
        { type: "image", src: "/proj/tuntum/main.webp" },
        { type: "image", src: "/proj/tuntum/closeup.webp" },
        { type: "image", src: "/proj/tuntum/bts.webp" },
        ]
    },
    {
        title: "Beelzebub",
        category: "character",
        media: [
        { type: "image", src: "/proj/beelzebub/0.png" },
        { type: "image", src: "/proj/beelzebub/00.png"},
        { type: "image", src: "/proj/beelzebub/1.png"},
        { type: "image", src: "/proj/beelzebub/2.jpg"},
        { type: "image", src: "/proj/beelzebub/3.jpg"},
        { type: "image", src: "/proj/beelzebub/4.jpg"},
  
        ]
    },
    {
        title: "Ball Hog",
        category: "character",
        media: [
        { type: "image", src: "/proj/ball-hog/0.jpg" },
        { type: "image", src: "/proj/ball-hog/1.jpg" },
        { type: "image", src: "/proj/ball-hog/2.jpg" },
        { type: "image", src: "/proj/ball-hog/3.jpg" },
        { type: "image", src: "/proj/ball-hog/4.png" },
        ]
    },
    {
        title: "Noise Room",
        category: "animation",
        media: [
        { type: "image", src: "/proj/noise-room/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200163442?h=31d49aee7e" },
        { type: "image", src: "/proj/noise-room/1.png" },
        { type: "image", src: "/proj/noise-room/2.png" },
        { type: "image", src: "/proj/noise-room/3.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200179841?h=1b9c26aff7"},
        ]
    },
    {
        title: "Boogie Woogie",
        category: "character",
        media: [
        { type: "image", src: "/proj/heavy-tank/00.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1201552257?h=802ac53158"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1201552256?h=b1a05acb5f"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1201552255?h=133ed8b17a" },
        { type: "image", src: "/proj/heavy-tank/1.png" },
        { type: "image", src: "/proj/heavy-tank/2.png" },
        ]
    },
    {
        title: "Sou Can Fly",
        category: "animation",
        media: [
        { type: "image", src: "/proj/canfly/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200480356?h=b079d8d77d"  },
        { type: "image", src: "/proj/canfly/11.png" },
        { type: "image", src: "/proj/canfly/22.png" },
        { type: "image", src: "/proj/canfly/1.jpg" },
        { type: "image", src: "/proj/canfly/2.jpg" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200482833?h=8ba27acf90" },
        ]
    },

    {
        title: "Shams Song",
        category: "animation",
        media: [
        { type: "image", src: "/proj/shams-song/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200495602?h=24a7650761"},
        { type: "image", src: "/proj/shams-song/1.png" },
        { type: "image", src: "/proj/shams-song/2.png" },
        { type: "image", src: "/proj/shams-song/3.png" },
        { type: "image", src: "/proj/shams-song/4.png" },
        { type: "image", src: "/proj/shams-song/5.png" },
        { type: "image", src: "/proj/shams-song/6.png" },
        { type: "image", src: "/proj/shams-song/storyboard.png" },
        
        ]
    },

     {
        title: "Bywi Uniforum",
        category: "animation",
        media: [
        { type: "image", src: "/proj/bywin-uniforum/00.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1201721351?h=a15ddd73fe"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1201721350?h=6f33e172ac" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1201721352?h=c081c24a75"  },
        { type: "image", src: "/proj/bywin-uniforum/1.webp" },
        { type: "image", src: "/proj/bywin-uniforum/2.webp" },
        { type: "image", src: "/proj/bywin-uniforum/3.webp" },
        { type: "image", src: "/proj/bywin-uniforum/4.webp" },
        { type: "image", src: "/proj/bywin-uniforum/5.webp" },
        { type: "image", src: "/proj/bywin-uniforum/6.webp" },
        { type: "image", src: "/proj/bywin-uniforum/7.webp" },
        { type: "image", src: "/proj/bywin-uniforum/8.png" },
        { type: "image", src: "/proj/bywin-uniforum/9.png" },
        { type: "image", src: "/proj/bywin-uniforum/10.png" },
        ]
    },

    {
        title: "Bobo Town",
        category: "character",
        media: [
        { type: "image", src: "/proj/bobotown/0.png" },
        { type: "image", src: "/proj/bobotown/1.png" },
        { type: "image", src: "/proj/bobotown/2.png" },
        { type: "image", src: "/proj/bobotown/3.png" },
        { type: "image", src: "/proj/bobotown/4.png" },
        { type: "image", src: "/proj/bobotown/5.png" },
        { type: "image", src: "/proj/bobotown/6.png" },
        { type: "image", src: "/proj/bobotown/7.png" },
        ]
    },
    {
        title: "her",
        category: "character",
        media: [
        { type: "image", src: "/proj/her/0.png" },
        { type: "image", src: "/proj/her/1.png" },
        { type: "image", src: "/proj/her/2.png" },
        ]
    },

    {
        title: "Flyer",
        category: "character",
        media: [
        { type: "image", src: "/proj/flyers/0.png" },
        { type: "image", src: "/proj/flyers/1.webp" },
        { type: "image", src: "/proj/flyers/2.webp" },
        ]
    },
    {
        title: "Pixelizing",
        category:"character",
        media: [
        { type: "image", src: "/proj/pixelizing/0.png" },
        { type: "image", src: "/proj/pixelizing/1.jpg" },
        { type: "image", src: "/proj/pixelizing/2.jpg" },
        { type: "image", src: "/proj/pixelizing/3.jpg" },
        ]
    },

     {
        title: "watergun",
        category: "character",
        media: [
        { type: "image", src: "/proj/watergun/0.png" },
        { type: "image", src: "/proj/watergun/1.jpg" },
        { type: "image", src: "/proj/watergun/2.jpg" },
        ]
    },
    {
        title: "faces",
        category: "character",
        media: [
        { type: "image", src: "/proj/faces/0.png" },
        { type: "image", src: "/proj/faces/1.png" },
        { type: "image", src: "/proj/faces/2.png" },
        { type: "image", src: "/proj/faces/3.png" },
        { type: "image", src: "/proj/faces/4.png" },
        { type: "image", src: "/proj/faces/5.png" },
        { type: "image", src: "/proj/faces/6.png" },
        { type: "image", src: "/proj/faces/7.png" },
        { type: "image", src: "/proj/faces/8.png" },
        { type: "image", src: "/proj/faces/9.png" },
        { type: "image", src: "/proj/faces/10.png" },
    
        ]
    },
    {
        title: "FU",
        category: "character",
        media: [
        { type: "image", src: "/proj/Fu/0.png" },
        { type: "image", src: "/proj/Fu/1.jpg" },
        { type: "image", src: "/proj/Fu/2.jpg" },
        { type: "image", src: "/proj/Fu/3.jpg" },
        ]
    },
    {
        title: "box",
        category: "character",
        media: [
        { type: "image", src: "/proj/boxhead/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200488003?h=8d8ce627d9" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200488447?h=ec11835c0a" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200491052?h=166f41cf6a" },
        ]
    },
    {
        title: "Adrenaline",
        category:"game",
        media: [
        { type: "image", src: "/proj/adrenaline/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1201705245?h=c6b8bf8cbd"},
        { type: "image", src: "/proj/adrenaline/2.jpg" },
        { type: "image", src: "/proj/adrenaline/3.jpg" },
        ]
    },
     {
        title: "Redressing",
        category: "character",
        media: [
        { type: "image", src: "/proj/redressing/0.png" },
        { type: "image", src: "/proj/redressing/1.png" },
        { type: "image", src: "/proj/redressing/2.png" },
        { type: "image", src: "/proj/redressing/3.png" },
        { type: "image", src: "/proj/redressing/4.png" },
        { type: "image", src: "/proj/redressing/5.png" },
       
        
        ]
    },
    {
        title: "Skame",
        category: "game",
        media: [
        { type: "image", src: "/proj/skame/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200220854?h=3e57e649bc"  },
        { type: "image", src: "/proj/skame/2.jpg" },
        { type: "image", src: "/proj/skame/3.jpg" },
        ]
    },
    {
        title: "umi",
        category: "character",
        media: [
        { type: "image", src: "/proj/umi/0.png" },
        { type: "image", src: "/proj/umi/1.jpg" },
        { type: "image", src: "/proj/umi/2.jpg" },
        ]
    },
    {
        title: "parker",
        category: "character",
        media: [
        { type: "image", src: "/proj/parker/0.png" },
        { type: "image", src: "/proj/parker/1.png" },
        { type: "image", src: "/proj/parker/2.png" },
        ]
    },
    {
        title: "break like a baby",
        category: "game",
        media: [
        { type: "image", src: "/proj/breaklikebaby/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200216293?h=09337aeeca"},
        { type: "image", src: "/proj/breaklikebaby/1.png" },
        { type: "image", src: "/proj/breaklikebaby/2.png" },
        ]
    },
    {
        title: "cardgame",
        category: "character",
        media: [
        { type: "image", src: "/proj/cardgame/0.png" },
        { type: "image", src: "/proj/cardgame/1.png" },
        { type: "image", src: "/proj/cardgame/2.png" },
        ]
    },
     {
        title: "black",
        category: "game",
        media: [
        { type: "image", src: "/proj/black/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1201709482?h=3ba0e2b35d" },
        { type: "image", src: "/proj/black/0.png" },
        ]
    },
    {
        title: "Addae",
        category: "character",
        media: [
        { type: "image", src: "/proj/addae/0.jpg" },
        { type: "image", src: "/proj/addae/1.jpg" },
        { type: "image", src: "/proj/addae/2.jpg" },
        { type: "image", src: "/proj/addae/3.jpg" },
        ]
    },
    
    
]

export default projects;