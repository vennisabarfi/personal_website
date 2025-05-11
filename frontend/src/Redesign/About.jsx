
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
            <li> <a target="_blank" href="https://github.com/vennisabarfi/celestial_tracker">Celestial Tracker (In Progress)</a>: Developer-friendly API for tracking celestial objects in real time. Helps bridge my love of computers and astronomy.</li>
            <li> <a target="_blank" href="https://github.com/vennisabarfi/load_balancer">News Sentiment Analyzer</a>: Perform Sentiment Analysis on News Articles. I loved working on this project and implementing AI models. Pretty fun stuff.</li>
            <li> <a target="_blank" href="https://github.com/vennisabarfi/load_balancer">Load Balancer</a>: Balance Network Traffic to your Backend easily. Helped me sharpen my backend skills in Go and working with data structures and algorithms.</li>
            <li> <a target="_blank" href="https://github.com/vennisabarfi">View all my projects on GitHub</a></li>
        </ul>
        </p>

        <h2 className="text-2xl font-bold mt-14">Freelance Work</h2>
        <p>I love working with different clients to bring their vision to life. A couple cool projects I&apos;ve worked on are:
        <ul className="mt-10 space-y-4 list-disc">
            <li> <a target="_blank" href="https://cincygaypages.com/">Cincy Gay Pages (Non-Profit Client)</a>: Find LGBTQ+ Resources and Businesses in Cincinnati. Loved working with a non-profit on this. Great cause, fun and challenging project. </li>
            <li> <a target="_blank" href="https://www.darbyfrederiksen.com/">Client Portfolio Website</a>: Artsy website for a client. Great experience showcasing their work and creative projects.</li>
            <li> <a target="_blank" href="https://github.com/vennisabarfi/sentiment-app">Small Business Client (Code Snippets)</a>: Worked on an Application to help a small business analyze how clients felt about their products. Loved working with AI models to analyze business data.</li>
            
        </ul>
        </p>

        <p>Connect with me on <a target="_blank" href="https://www.linkedin.com/in/vennisa-owusu-barfi-95155216b/">Linkedin</a> and <a target="_blank" href="https://bsky.app/profile/vennisabarfi.bsky.social">Bluesky</a></p>
        <br/>
        {/* Here are my socials, Linkedin */}
        
        </div>
    
        </>
    );
}