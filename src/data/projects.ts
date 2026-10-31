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
        { type: "vimeo", src: "https://player.vimeo.com/video/1031300610?autoplay=1&loop=1&muted=1&background=1" },
        ]
    },
    {
        title: "spiderman",
        category: "animation",
        media: [
        { type: "image", src: "/proj/spiderman/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1241807280?autoplay=1&loop=1&muted=1&background=1" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1241807782?autoplay=1&loop=1&muted=1&background=1" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1241808350?autoplay=1&loop=1&muted=1&background=1" },
        ]
    },
    {
        title: "Beelzebub",
        category: "character",
        media: [
        { type: "image", src: "/proj/beelzebub/0.png" },
        { type: "image", src: "/proj/beelzebub/000.png"},
        { type: "image", src: "/proj/beelzebub/111.png"},
        { type: "image", src: "/proj/beelzebub/222.png"},
        { type: "image", src: "/proj/beelzebub/333.png"},
        { type: "image", src: "/proj/beelzebub/444.png"},
  
        ]
    },
     {
        title: "Noise Room",
        category: "animation",
        media: [
        { type: "image", src: "/proj/noise-room/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200163442?h=31d49aee7&autoplay=1&loop=1&muted=1&background=1" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200179841?h=1b9c26aff7&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1202839681?h=499cd0867e&autoplay=1&loop=1&muted=1&background=1"},
        { type: "image", src: "/proj/noise-room/1.png" },
        { type: "image", src: "/proj/noise-room/2.png" },
        { type: "image", src: "/proj/noise-room/3.png" },
       
        ]
    },
     {
        title: "scout",
        category: "animation",
        media: [
        { type: "image", src: "/proj/scout/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1241101082?&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1241119934?autoplay=1&loop=1&muted=1&background=1"}
        ]
    },
     {
        title: "Bywi Uniforum",
        category: "animation",
        media: [
        { type: "image", src: "/proj/bywin-uniforum/00.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1201721351?h=a15ddd73fe&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1201721350?h=6f33e172ac&autoplay=1&loop=1&muted=1&background=1" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1201721352?h=c081c24a75&autoplay=1&loop=1&muted=1&background=1"  },
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
        title: "raph",
        category: "animation",
        media: [
        { type: "image", src: "/proj/raph/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1239683712?badge=0&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1239683713?badge=0&autoplay=1&loop=1&muted=1&background=1"},
        ]
    },
    {
        title: "Adrenaline",
        category:"game",
        media: [
        { type: "image", src: "/proj/adrenaline/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1211239466?h=9c94dbc9b4&autoplay=1&loop=1&muted=1&background=1"},
        { type: "image", src: "/proj/adrenaline/3.png" },
        { type: "image", src: "/proj/adrenaline/2.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1202091916?h=6bed6a9839&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1201705245?h=c6b8bf8cbd&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1211086894?h=82931c0610&autoplay=1&loop=1&muted=1&background=1"},
        { type: "image", src: "/proj/adrenaline/1.png"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1210357357?h=ff1bd3ec85&autoplay=1&loop=1&muted=1&background=1" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1201969945?h=a103ae158d&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1202091479?h=35c4954864&autoplay=1&loop=1&muted=1&background=1"},
        ]
    },
    {
        title: "playerone",
        category: "character",
        media: [
        { type: "image", src: "/proj/playerone/0.png" },
        { type: "image", src: "/proj/playerone/1.png" }
        ]
    },
    {
        title: "Sou Can Fly",
        category: "animation",
        media: [
        { type: "image", src: "/proj/canfly/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200480356?h=b079d8d77d&autoplay=1&loop=1&muted=1&background=1"  },
        { type: "image", src: "/proj/canfly/111.png" },
        { type: "image", src: "/proj/canfly/222.png" },
        { type: "image", src: "/proj/canfly/333.png" },
        { type: "image", src: "/proj/canfly/444.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200482833?h=8ba27acf90&autoplay=1&loop=1&muted=1&background=1" },
        ]
    },
    {
        title: "2b",
        category: "animation",
        media: [
        { type: "image", src: "/proj/2b/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1239923111?&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1240021248?&autoplay=1&loop=1&muted=1&background=1"},
        ]
    },
    
     {
        title: "striker",
        category: "character",
        media: [
        { type: "image", src: "/proj/striker/0.png" },
        { type: "image", src: "/proj/striker/1.png" },
        { type: "image", src: "/proj/striker/3.png" },
        { type: "image", src: "/proj/striker/2.png" },
        { type: "image", src: "/proj/striker/4.png" },
        
        ]
    },
    
    {
        title: "anger",
        category: "animation",
        media: [
        { type: "image", src: "/proj/anger/0.png" },
        { type: "vimeo", src: "https://www.youtube.com/embed/fwLMiFmM5Q8?si=77CbkGBjbph7_EgR&autoplay=1&mute=1&loop=1&&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0" },
        ]
    },
    {
        title:"judyhopp",
        category: "animation",
        media: [
            {type:"image", src: "/proj/judyhopp/0.png"},
            {type:"vimeo", src: "https://player.vimeo.com/video/1241808890?autoplay=1&loop=1&muted=1&background=1"}
        ]
    },
      {
        title: "fight",
        category: "character",
        media: [
        { type: "image", src: "/proj/fight/0.png" },
        { type: "image", src: "/proj/fight/1.png" },
        { type: "image", src: "/proj/fight/2.png" },
        { type: "image", src: "/proj/fight/3.png" },
       
        ]
    },
   
    {
        title: "Klara",
        category: "character",
        media: [
        { type: "image", src: "/proj/klara/0.png" },
        { type: "image", src: "/proj/klara/1.png" },
        { type: "image", src: "/proj/klara/2.png" },

        ]
    },
     {
        title: "Trasket Ball",
        category: "game",
        media: [
        { type: "image", src: "/proj/trasket-ball/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1205482410?h=167e889101&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1205484367?h=f21f3aba61&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1205484420?h=5cea19461f&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1205484386?h=64694d8c57&autoplay=1&loop=1&muted=1&background=1"}
        ]
    },
    {
        title: "Ms Mango",
        category: "character",
        media: [
        { type: "image", src: "/proj/msmango/0.png" },
        { type: "image", src: "/proj/msmango/1.png" },
        { type: "image", src: "/proj/msmango/2.png" },
        { type: "image", src: "/proj/msmango/4.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1206046373?h=4182720358?autoplay=1&loop=1&muted=1&background=1" },
        ]
    },
     {
        title: "happiness",
        category: "animation",
        media: [
        { type: "image", src: "/proj/happy/0.png" },
        { type: "vimeo", src: "https://www.youtube.com/embed/fvARteUqP2k?si=Nk43wS9Sf1QWUqG_&autoplay=1&mute=1&loop=1&&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0" },
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
        title: "Ball Hog",
        category: "character",
        media: [
        { type: "image", src: "/proj/ball-hog/0.jpg" },
        { type: "image", src: "/proj/ball-hog/111.png" },
        { type: "image", src: "/proj/ball-hog/222.png" },
        { type: "image", src: "/proj/ball-hog/333.png" },
        { type: "image", src: "/proj/ball-hog/444.png" },
        ]
    },
    
    {
        title: "Warriors-furries",
        category: "character",
        media: [
        { type: "image", src: "/proj/warriors/0.png" },
        { type: "image", src: "/proj/warriors/111.png"},
        { type: "image", src: "/proj/warriors/666.png"},
        { type: "image", src: "/proj/warriors/222.png"},
        { type: "image", src: "/proj/warriors/333.png"},
        { type: "image", src: "/proj/warriors/444.png"},
    
        
        ]
    },
    {
        title: "Boogie Woogie",
        category: "character",
        media: [
        { type: "image", src: "/proj/heavy-tank/00.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1201552257?h=802ac53158&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1201552256?h=b1a05acb5f&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1201552255?h=133ed8b17a&autoplay=1&loop=1&muted=1&background=1" },
        { type: "image", src: "/proj/heavy-tank/111.png" },
        { type: "image", src: "/proj/heavy-tank/222.png" },
        { type: "image", src: "/proj/heavy-tank/333.png" },
        ]
    },
   
    {
        title: "Shams Song",
        category: "animation",
        media: [
        { type: "image", src: "/proj/shams-song/0.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200495602?h=24a7650761&autoplay=1&loop=1&muted=1&background=1"},
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
        title: "kane",
        category: "character",
        media: [
        { type: "image", src: "/proj/kane/0.png" },
        { type: "image", src: "/proj/kane/1.png" },
        ]
    },

    {
        title: "Flyer",
        category: "character",
        media: [
        { type: "image", src: "/proj/flyers/0.png" },
        { type: "image", src: "/proj/flyers/111.png" },
        { type: "image", src: "/proj/flyers/2.webp" },
        ]
    },
     {
        title: "vlad",
        category: "character",
        media: [
        { type: "image", src: "/proj/vlad/0.png" },
        { type: "image", src: "/proj/vlad/1.png" },
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
        title: "addae-short",
        category: "animation",
        media: [
        { type: "image", src: "/proj/addae-short/0.jpg" },
        { type: "vimeo", src: "https://www.youtube.com/embed/nhRj6aaWHeY?si=0xMsHI0vJ_c9dtaw&autoplay=1&mute=1&loop=1&&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0" },
        
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
        { type: "vimeo", src: "https://player.vimeo.com/video/1200488003?h=8d8ce627d9&autoplay=1&loop=1&muted=1&background=1" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200488447?h=ec11835c0a&autoplay=1&loop=1&muted=1&background=1" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200491052?h=166f41cf6a&autoplay=1&loop=1&muted=1&background=1" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1201740561?h=843d4ff538&autoplay=1&loop=1&muted=1&background=1" },
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
        { type: "image", src: "/proj/skame/00.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200220854?h=3e57e649bc&autoplay=1&loop=1&muted=1&background=1"  },
        { type: "image", src: "/proj/skame/111.png" },
        { type: "image", src: "/proj/skame/222.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1241847797?&autoplay=1&loop=1&muted=1&background=1"},
         { type: "vimeo", src: "https://player.vimeo.com/video/1241851497??&autoplay=1&loop=1&muted=1&background=1"},
        { type: "image", src: "/proj/skame/3.png" },
        { type: "image", src: "/proj/skame/2.png" },
        { type: "image", src: "/proj/skame/333.png" },
        { type: "image", src: "/proj/skame/444.png" },
        { type: "image", src: "/proj/skame/4.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1241848087?&autoplay=1&loop=1&muted=1&background=1"},

        ]
    },
    {
        title: "bumble",
        category: "character",
        media: [
        { type: "image", src: "/proj/bumble/0.png" },
        { type: "image", src: "/proj/bumble/1.png" }
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
        title: "runner",
        category: "game",
        media: [
        { type: "image", src: "/proj/runner/0.png" },
        { type: "vimeo", src: "https://www.youtube.com/embed/8fr9oLg9w1k?si=NuV3qxq8FiHYgshh&autoplay=1&mute=1&loop=1&&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0" },
        { type: "vimeo", src: "https://www.youtube.com/embed/Q_5VvAEEjWo?si=4NHDhucn6pbjRh63&autoplay=1&mute=1&loop=1&&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0" },
        { type: "image", src: "/proj/runner/ab.png" },
        { type: "image", src: "/proj/runner/abc.png" },
        { type: "image", src: "/proj/runner/a.png" },
        { type: "image", src: "/proj/runner/b.png" },
        ]
    },
    {
        title: "Walk Cycle",
        category: "animation",
        media: [
        { type: "image", src: "/proj/walk-cycle/0.png" },
        { type: "vimeo", src: "https://www.youtube.com/embed/7i21DJmV3vQ?si=BnjSYQbAfSbT_y2p&autoplay=1&mute=1&loop=1&&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0" },
        
        ]
    },
    {
        title: "break like a baby",
        category: "game",
        media: [
        { type: "image", src: "/proj/breaklikebaby/00.png" },
        { type: "vimeo", src: "https://www.youtube.com/embed/D4pU74SOIJ0?si=5Qw9nbEHXOuNCFlA&autoplay=1&mute=1&loop=1&&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0"},
        { type: "image", src: "/proj/breaklikebaby/111.png" },
        { type: "image", src: "/proj/breaklikebaby/222.png" },
        { type: "image", src: "/proj/breaklikebaby/333.png" },
        { type: "vimeo", src: "https://player.vimeo.com/video/1200216293?h=09337aeeca&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1202099376?&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1202099432?&autoplay=1&loop=1&muted=1&background=1"},
        { type: "vimeo", src: "https://player.vimeo.com/video/1241822112?&autoplay=1&loop=1&muted=1&background=1"},
        { type: "image", src: "/proj/breaklikebaby/22.png" },
       
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
        title: "flats",
        category: "game",
        media: [
        { type: "image", src: "/proj/flat/0.jpg" },
        { type: "vimeo", src: "https://www.youtube.com/embed/BTydIk_A-F8?si=SBmXwVSs2DJuk4v3&autoplay=1&mute=1&loop=1&&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0" },
        
        ]
    },
     {
        title: "black",
        category: "game",
        media: [
        { type: "image", src: "/proj/black/0.png" },
        { type: "vimeo", src:"https://player.vimeo.com/video/1202126917?h=99d5775d35&autoplay=1&loop=1&muted=1&background=1"},
        { type: "image", src: "/proj/black/2.png" },
        { type: "image", src: "/proj/black/1.png" },
        { type: "image", src: "/proj/black/3.png" },
        { type: "image", src: "/proj/black/4.jpg" },
        { type: "image", src: "/proj/black/5.jpg" },
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
     {
        title: "painting-polygons",
        category: "character",
        media: [
        { type: "image", src: "/proj/painting-polygons/0.jpg" },
        { type: "image", src: "/proj/painting-polygons/1.jpg" },
        { type: "image", src: "/proj/painting-polygons/2.png" },
        { type: "image", src: "/proj/painting-polygons/3.png" },
        { type: "image", src: "/proj/painting-polygons/4.png" },
        ]
    },
    {
        title: "besquared",
        category: "game",
        media: [
        { type: "image", src: "/proj/besquared/0.jpg" },
        { type: "vimeo", src: "https://www.youtube.com/embed/o3ry96WW-Ho?si=iOigDSkghG9CZLbJ&autoplay=1&mute=1&loop=1&&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0" },
        ]
    },
    
    
]

export default projects;