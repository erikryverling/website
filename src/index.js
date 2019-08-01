import React from 'react';
import ReactDOM from 'react-dom';
import Typewriter from 'react-typewriter';
import ReactGA from 'react-ga'

import './index.css'
import '../node_modules/highlight.js/styles/gruvbox-dark.css'

class App extends React.Component {
    constructor() {
        super();

        ReactGA.initialize('UA-26302151-1')
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return(
            <div className="rootBox"> 
                <div className="upperContentBox"> 
                    <div className="linkBox">
                        <a href="https://www.linkedin.com/in/erikryverling">LinkedIN</a>
                        <a href="https://www.github.com/erikryverling">GitHub</a>
                        <a href="https://www.twitter.com/erikryverling">Twitter</a>
                    </div>
                    <div className="mainBox"> 
                        <div className="titleBox">
                            <h1>I'm Erik<br/> R. Yverling</h1>
                            <p>
                                I work as an Android developer at <a className="hemnet" href="https://www.hemnet.se">Hemnet</a>.<br/>
                                I'm also a bedroom DJ and into stuff like snowboarding, travel, food and beer.
                            </p>
                        </div>
                        <CodeBox/>
                    </div>
                    <div className="scrollIndicator">keyboard_arrow_down</div>
                </div>
                <div className="lowerSectionTop"/>
                <div className="lowerSectionMain">
                    <div className="lowerContentBox">
                        <div className="projectIntroBox"> 
                            <h2>Projects</h2>
                            <p>These are the personal projects that I've been working on latly</p>
                        </div>
                        <div className="projectBox">
                            <a href="https://www.github.com/erikryverling/wearto"><img className="projectLogo" src="./wearto-logo.png"/></a>
                            <div className="projectDescriptionBox">
                                <h3>WearTo</h3>
                                <p>
                                    WearTo is an Android app that lets you add items to Todoist with minimal effort using your wearable.
                                    The app is available both on Google Play and on GitHub, as an open source project.
                                </p>
                                <a href='https://play.google.com/store/apps/details?id=se.yverling.wearto&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' className="googlePlayButton"/></a>
                            </div>
                        </div>
                        <div className="projectBox">
                            <a href="https://soundcloud.com/megoemusic"><img className="projectLogo" src="./megoe-logo.png"/></a>
                            <div className="projectDescriptionBox">
                                <h3>DJ mixes</h3>
                                <p>
                                    Besides software development one of my hobbies are DJing. You can find my mixes on <a href="https://www.soundcloud.com/megoemusic">https://www.soundcloud.com/megoemusic</a>. These are all mixed and recored straight from the decs.
                                </p>
                                <iframe title="soundcloudEmbedded" className="soundcloudEmbedded" width="100%" height="150" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/649189928&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
                            </div>
                        </div>
                    </div>
                    <div className="creditsBox">
                        <p>This site was made with React, inspired by Gruvbox and hosted on Firebase. You can find the source code on <a href="https://www.github.com/erikryverling/website">github.com/erikryverling/website</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

function CodeBox() {
    return(
        <div className="codeBox">
            <Typewriter typing={1}>
                <span><span className="red">init</span> &#123;</span><br/>
                <span className="in2"><span className="red">val</span> disposable = <span className="purple">networkClient</span>.getCoffeeOrders()</span><br/>
                <span className="in4">.flatMapCompleteble &#123;</span><br/>
                <span className="in6"><span className="purple">dataBaseClient</span>.persitsOrders(<span className="blue fat">it</span>)</span><br/>
                <span className="in4">&#125;</span><br/>
                <span className="in4">.subscribeOn(<span className="yellow">Schedules</span>.io())</span><br/>
                <span className="in4">.subscribeBy(</span><br/>
                <span className="in6"><span className="blue">onComplete =</span> &#123;</span><br/>
                <span className="in8">info(<span className="green">"Mmm... coffee")</span></span><br/>
                <span className="in6">&#125;</span><br/>
                <span className="in4">)</span><br/>
                <span className="in2"><span className="purple">disposables</span>.add(disposable)</span><br/>
                <span>&#125;</span><br/>
            </Typewriter>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
