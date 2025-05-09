
import "../Redesign/About.css"
export default function About(){

    return(
        <>
        <div className="intro">

        <h1 className="text-4xl font-bold mt-14">About</h1>
        <p>Welcome to my tiny little space on the internet!  </p>

        <p>I love to build software and work with data and I&apos;ve been spending time working on projects, building my skills and working in the freelance space.</p>

        <p>Here are the projects I have been working on:

        <ul className="mt-10 space-y-4 list-disc">
            <li> <a href="https://github.com/vennisabarfi/celestial_tracker">Celestial Tracker (In Progress)</a>: Developer-friendly API for tracking celestial objects in real time. Helps bridge my love of computers and astronomy.</li>
            <li> <a href="https://github.com/vennisabarfi/load_balancer">News Sentiment Analyzer</a>: Perform Sentiment Analysis on News Articles. I loved working on this project and implementing AI models. Pretty fun stuff.</li>
            <li> <a href="https://github.com/vennisabarfi/load_balancer">Load Balancer</a>: Balance Network Traffic to your Backend easily. Helped me sharpen my backend skills in Go and working with data structures and algorithms.</li>
            <li> <a href="https://github.com/vennisabarfi">View all my projects on GitHub</a></li>
        </ul>
        </p>

        <h2 className="text-2xl font-bold mt-14">Freelance Work</h2>
        <p>I love working with different clients to bring their vision to life. A couple cool projects I&apos;ve worked on are:</p>

        {/* Here are my socials, Linkedin */}
        
        </div>
    
        </>
    );
}