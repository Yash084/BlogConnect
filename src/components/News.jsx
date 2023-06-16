import React from 'react';
import ArticleCard from './ArticleCard';
import './Job.css';
const articles = [
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Hannah Ward-Glenton",
        "title": "European markets higher as traders digest ECB rate hike - CNBC",
        "description": "European stock markets were higher on Friday as traders digest the ECB's decision to raise interest rates.",
        "url": "https://www.cnbc.com/2023/06/16/european-markets-open-to-close-earnings-data-and-news.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107258026-1686893404637-gettyimages-1258709924-20090101230615-99-67588.jpeg?v=1686893776&w=1920&h=1080",
        "publishedAt": "2023-06-16T08:38:00Z",
        "content": "More countries are reducing their reliance on China, and India could be the next best bet for nations looking to move their manufacturing operations, said Matthew Culley, portfolio manager at Janus H… [+758 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Barbie Latza Nadeau,Helen Regan",
        "title": "Pope Francis discharged from hospital in Rome following surgery - CNN",
        "description": "Pope Francis was set to be discharged from Rome’s Gemelli hospital Friday where the 86-year-old was recovering from abdominal surgery.",
        "url": "https://www.cnn.com/2023/06/16/europe/pope-francis-discharged-hospital-surgery-intl-hnk/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230616024851-01-pope-francis-leaves-hospital-061623.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-06-16T07:11:00Z",
        "content": "Pope Francis was discharged from Romes Gemelli hospital Friday where the 86-year-old was recovering from abdominal surgery, after the procedure sparked renewed concerns over his health.\r\nThe Pontiff … [+3527 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Lim Hui Jie",
        "title": "Asia markets trade higher as Bank of Japan leaves rates unchanged, in line with expectations - CNBC",
        "description": "Investors in Asia also will be looking to the Bank of Japan's rate decision, scheduled to be announced Friday",
        "url": "https://www.cnbc.com/2023/06/16/asia-markets.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107257944-1686871334383-gettyimages-1258302640-JAPAN_BOJ.jpeg?v=1686873160&w=1920&h=1080",
        "publishedAt": "2023-06-16T07:06:00Z",
        "content": "Singapore's non-oil domestic exports slid 14.7% year-on-year in May, a larger fall than the 9.8% decrease in April and more than the 8.1% drop expected by economists polled by Reuters.\r\nThe May figur… [+737 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Sara Smart",
        "title": "At least 15 dead in Canada highway collision - CNN",
        "description": "At least 15 people have died after a truck collided with a bus carrying senior citizens in a rural portion of Canada’s Manitoba province on Thursday afternoon, according to local authorities.",
        "url": "https://www.cnn.com/2023/06/15/americas/canada-highway-collision-intl-latam/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230615153348-01-manitoba-highway-collision.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-06-16T06:57:00Z",
        "content": "At least 15 people have died after a truck collided with a bus carrying senior citizens in a rural portion of Canadas Manitoba province on Thursday afternoon, according to local authorities.\r\nThe bus… [+1868 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "US grand jury indicts Pentagon leak suspect Teixeira, Justice Department says - Reuters.com",
        "description": "A federal grand jury has indicted a U.S. Air National Guardsman accused of leaking top-secret military intelligence records online, the Justice Department said in a statement on Thursday.",
        "url": "https://www.reuters.com/legal/us-grand-jury-indicts-pentagon-leak-suspect-teixeira-justice-department-says-2023-06-15/",
        "urlToImage": "https://www.reuters.com/resizer/Wo8qg_774dcXRTHd47ASZMK4hko=/800x419/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DWALBOJ5O5M6DBPAMSS3C3WXZ4.jpg",
        "publishedAt": "2023-06-16T06:14:00Z",
        "content": "WASHINGTON, June 15 (Reuters) - A federal grand jury has indicted a U.S. Air National Guardsman accused of leaking top-secret military intelligence records online, the Justice Department said in a st… [+2212 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "Chuck Booth",
        "title": "USMNT dominate Mexico 3-0: Chaos reigns with four red cards as USA advances to Concacaf Nations League final - CBS Sports",
        "description": "A game that the Americans dominated ended in chaos with red cards and an early end thanks to a homophobic chant",
        "url": "https://www.cbssports.com/soccer/news/usmnt-dominate-mexico-3-0-chaos-reigns-with-four-red-cards-as-usa-advances-to-concacaf-nations-league-final/live/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/16/829fbc89-7c37-40d2-8060-b6b62c6a7d6a/thumbnail/1200x675/26a43ff078fbf3e3503633798bb4ad58/untitled-design-2023-06-16t000414-123.png",
        "publishedAt": "2023-06-16T05:52:00Z",
        "content": "After an absolutely wild affair, the Concacaf Nations League final is set as the United States will face Canada after defeating Mexico 3-0 in Las Vegas on Thursday night. It was a match that ended ea… [+2632 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Athletic"
        },
        "author": "The Athletic Staff",
        "title": "Heat investigating allegations of Conor McGregor sexually assaulting woman during Game 4 of NBA Finals - The Athletic",
        "description": "\"We are aware of the allegations and are conducting a full investigation,\" the Heat said.",
        "url": "https://theathletic.com/4613825/2023/06/15/conor-mcgregor-sexual-assault-nba-finals/",
        "urlToImage": "https://cdn.theathletic.com/app/uploads/2020/06/07140113/GettyImages-1200439651-1024x685.jpg",
        "publishedAt": "2023-06-16T04:21:35Z",
        "content": "Content warning: This story includes allegations of sexual assault that may be difficult to read and emotionally upsetting.\r\nThe Miami Heat are investigating allegations that UFC star Conor McGregor … [+2506 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Sandee LaMotte",
        "title": "Night owls may die younger, but more than sleep is to blame - CNN",
        "description": "Going to bed late, also known as being a night owl, was linked to increased use of alcohol and tobacco and early death, a new study found.",
        "url": "https://www.cnn.com/2023/06/16/health/night-owl-early-death-wellness/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230615171259-night-owl-early-death-wellness-restricted.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-06-16T04:01:00Z",
        "content": "Editors Note: Sign up for CNNs Sleep, But Better newsletter series. Our seven-part guide has helpful hints to achieve better sleep.\r\nPeople who prefer to go to bed and get up later a sleep chronotype… [+5784 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SciTechDaily"
        },
        "author": null,
        "title": "NASA Power Play: Astronauts Finish Installing Roll-Out Solar Array in Record-Tying Spacewalk - SciTechDaily",
        "description": "NASA astronauts, Woody Hoburg and Steve Bowen, successfully installed a new solar array on the International Space Station during a 5-hour spacewalk, boosting power production. This marked Bowen's tenth spacewalk, tying the record for most U.S. spacewalks. Ex…",
        "url": "https://scitechdaily.com/nasa-power-play-astronauts-finish-installing-roll-out-solar-array-in-record-tying-spacewalk/",
        "urlToImage": "https://scitechdaily.com/images/Spacewalker-Woody-Hoburg-Rides-the-Canadarm2-Robotic-Arm-scaled.jpg",
        "publishedAt": "2023-06-16T03:58:41Z",
        "content": "ByNASAJune 15, 2023\r\nA view of the new roll-out solar array unfolding after NASA astronauts Steve Bowen and Woody Hoburg successfully installed it to the 1B power channel on June 15, 2023. Credit: NA… [+4419 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Richard Branson: Virgin Galactic commercial space flights to start this month - BBC",
        "description": "It comes just weeks after a separate space firm owned Sir Richard, Virgin Orbit, was shut down.",
        "url": "https://www.bbc.com/news/business-65924495",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15A54/production/_130106688_richardbranson-1.jpg",
        "publishedAt": "2023-06-16T03:50:24Z",
        "content": "Sir Richard Branson's space tourism company Virgin Galactic says it will launch its first commercial flight before the end of this month.\r\nThe firm is targeting a launch window for the flight, which … [+2508 chars]"
    },
    {
        "source": {
            "id": "independent",
            "name": "Independent"
        },
        "author": "Abe Asher",
        "title": "Trump declared 'food for all' at Miami cafe – but skipped the bill - The Independent",
        "description": "The former president visited the restaurant after being arraigned on federal charges",
        "url": "https://www.independent.co.uk/news/world/americas/us-politics/trump-food-for-everyone-miami-versailles-b2358666.html",
        "urlToImage": "https://static.independent.co.uk/2023/06/14/02/Trump_Classified_Documents_25524.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "2023-06-16T03:48:02Z",
        "content": "Sign up for the daily Inside Washington email for exclusive US coverage and analysis sent to your inbox\r\nGet our free Inside Washington email\r\nWhen former President Donald Trump visited the iconic Ve… [+2349 chars]"
    },
    {
        source: {
            "id": null,
            "name": "Variety"
        },
        "author": "Matt Donnelly",
        "title": "New Batman Film ‘Brave and the Bold’ Lands ‘The Flash’ Director Andy Muschietti (EXCLUSIVE) - Variety",
        "description": "Andy Muschietti is officially suiting up to direct a new Batman film, Variety can report exclusively. The film is one of several new DC Studios titles mapped out by leaders James Gunn and Peter Saf…",
        "url": "https://variety.com/2023/film/news/brave-and-the-bold-andy-muschietti-directing-batman-film-the-flash-1235646262/",
        "urlToImage": "https://variety.com/wp-content/uploads/2023/06/muschietti-batman-brave-bold-split-2.jpg?w=1000&h=562&crop=1",
        "publishedAt": "2023-06-16T01:05:00Z",
        "content": "Andy Muschietti is officially suiting up to direct a new Batman film, Variety can report exclusively. The film is one of several new DC Studios titles mapped out by leaders James Gunn and Peter Safra… [+2269 chars]"
    },
]

const Job = () => {

    return (
        <div className='job-container'>
            {articles.map((article, index) => (
                <ArticleCard article={article} key={index} />
            ))}
        </div>
    );
};

export default Job;
