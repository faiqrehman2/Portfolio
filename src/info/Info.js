import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Faiq",
    lastName: "Rehman",
    initials: "fr", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by Tea'
        },
        {
            emoji: '🌎',
            text: 'Based in the Pakistan'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer at Torrantal Asia"
        },
        {
            emoji: "📧",
            text: "faiqrehman174@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://web.facebook.com/faiqrehman2",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/faiqrehmann/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/faiqrehman2",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/faiqrehman/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/Faiqrehman12",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Faiq. I studied Computer Science at GIFT University, I enjoy long walks in winter nights, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Git', 'Github', 'Bootstrap', 'Html5', 'Css3'],
            exposedTo: ['Nodejs', 'Python']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Snooker',
            emoji: '🎱'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Cricket',
            emoji: '🏏'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Tinder Clone",
            source: "https://github.com/faiqrehman2/Tinder-Clone.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Ristorante con Fusion",
            source: "https://github.com/faiqrehman2/Ristorante-conFusion.git",
            image: mock2
        },
        {
            title: "Portfolio",
            source: "https://github.com/faiqrehman2/Portfolio",
            image: mock3
        },
        {
            title: "Task Tracker",
            source: "https://github.com/faiqrehman2/Task-Tracker",
            image: mock4
        },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}