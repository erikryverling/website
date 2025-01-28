import React from 'react';
import ReactGA from 'react-ga'
import Snowfall from 'react-snowfall'
import {createRoot} from 'react-dom/client';

import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);

        ReactGA.initialize('UA-26302151-1')
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <div className="rootBox">
                <Snowfall
                    snowflakeCount={10}
                />

                <div className="upperContentBox">
                    <div className="mainBox">

                        <div className="titleBox">
                            <h1>I'm Erik<br/> <span>R.</span> Yverling</h1>
                            <p>
                                A freelance developer with an overall passion for building mobile apps.
                                I also have leadership and management experience.
                                Besides apps I love creating music.<br/>
                            </p>
                        </div>

                        <div className="socialBox">

                            <Social
                                name="LinkedIn"
                                link="https://linkedin.com/in/erikryverling"
                                path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                            />

                            <Social
                                name="GitHub"
                                link="https://www.github.com/erikryverling"
                                path="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                            />

                            <Social
                                name="Medium"
                                link="https://medium.com/@erik.r.yverling"
                                path="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"
                                viewBox="50"
                            />

                            <Social
                                name="Soundcloud"
                                link="https://soundcloud.com/megoemusic"
                                path="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.233-2.168-3.772-4.121-2.815zm-16.879-.027c-.302-.024-.526-.03-1 .122v5.689c.446.143.636.138 1 .138v-5.949z"
                            />

                        </div>

                    </div>
                    <div className="scrollIndicator">keyboard_arrow_down</div>
                </div>

                <div className="lowerSectionTop"/>
                <div className="lowerSectionMain">
                    <div className="lowerContentBox">

                        <div className="projectIntroBox">
                            <h2>Projects</h2>
                            <p>These are the personal projects that I've been working on lately</p>
                        </div>

                        <div className="projectsBox">

                            <Project
                                name="WearTo"
                                link="https://www.github.com/erikryverling/wearto"
                                description={`
                                    WearTo is an Android app that lets you add items to Todoist with minimal effort using your wearable.
                                    The app is available both on Google Play and on GitHub, as an open source project.
                                `}
                            />

                            <Project
                                name="Twinkle"
                                link="https://www.github.com/erikryverling/twinkle"
                                description={`
                                    Twinkle is a small command line app that let's you save the 
                                    current playing Spotify song to a playlist with a single click.
                                `}
                            />

                        </div>
                    </div>
                    <div className="creditsBox">
                        <p>
                            This site was made with React and hosted on Firebase.
                            You can find the source code on <a
                            href="https://www.github.com/erikryverling/website">github.com/erikryverling/website</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

function Social({name, link, path, viewBox = 24}) {
    return (
        <a href={link}>
            <svg className="socialLogo" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBox} ${viewBox}`}>
                <desc>{name} logo</desc>
                <path d={path}/>
            </svg>
        </a>
    )
}

function Project({name, link, description}) {
    return (
        <a href={link}>
            <img src={`./${name.toLowerCase()}-logo.png`} alt={`${name} logo`}/>
            <h3>{name}</h3>
            <p>
                {description}
            </p>
        </a>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>);