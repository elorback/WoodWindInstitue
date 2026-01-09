import { Card, Container } from "react-bootstrap";
import "./css/MyStory.css"; // Import your CSS file for styling

const MyStory: React.FC = () => {
    return (
        <Container className="story-container">
            <header className="text-center mb-4">
                <h1 className="display-4 story"><strong>My Story</strong></h1>
            </header>
            <Card className="content-card">
                <Card.Body >
                    <p>
                        Born and raised in the Los Angeles area, Andrew Marlin began playing the bassoon at 14 years old. Ever since then, he has been working tirelessly to master his art and to spread the true joy of music to all who can listen.
                    </p>
                    <p>
                        Currently located in the Chicago area, Mr. Marlin has been actively freelancing and can be heard playing on a variety of musical platforms throughout the city. He has primarily performed with Opera Festival Chicago, Oistrakh Symphony of Chicago, Chicago Summer Opera, and Northbrook Symphony Orchestra. He is a Core Artist with CHAI Collaborative Ensemble, an ensemble dedicated to mixed vocal and instrumental chamber music.
                    </p>
                    <p>
                        Additionally, Mr. Marlin has been most thankful to have performed with the Seattle Symphony Orchestra with Maestro Ludovic Morlot and the Las Vegas Philharmonic with Maestro Donato Cabrera. In 2017, Mr. Marlin was selected to perform <i>Rituum, Bassoon Concerto</i> by Stephanie Ann Boyd as the soloist in Cincinnati Soundbox's New Concerto Project.
                    </p>
                    <p>
                        As a passionate advocate for music education, Mr. Marlin has also further connected with the community to build up a private teaching studio and serves as the bassoon faculty at many schools throughout the northwest suburbs of Chicago. His former students have continued on to some of the finest music schools in the country with competitive scholarships. Some of which include:
                    </p>
                    <ul>
                        <li>The Peabody Institute at Johns Hopkins University</li>
                        <li>Ball State University</li>
                        <li>Northwestern University's Bienen School of Music</li>
                        <li>University of Illinois, Urbana-Champaign</li>
                        <li>Roosevelt University's Chicago College of Performing Arts</li>
                        <li>Duquesne University's Mary Pappert School of Music</li>
                    </ul>
                    <p>
                        Aside from teaching his private studio, Mr. Marlin has created the Summer Bassoon Workshop. This unique program is a bassoon ensemble chamber music workshop that is designed to expose young bassoonists to the incredible world of music. The workshop is also geared to teach ensemble skills in a more focused dynamic that can't be done in larger ensemble settings. All orchestra classics, opera scenes, ballet, and film score arrangements covered in the workshop are written by Mr. Marlin himself.
                    </p>
                    <p>
                        Mr. Marlin is a graduate from Roosevelt University's Chicago College of Performing Arts where he received both a Masters of Music and a Professional Artist Diploma in Orchestral Studies. During his various studies at the Chicago College of Performing Arts, he was fortunate enough to study with Dennis Michel and David McGill from the Chicago Symphony Orchestra and Lewis Kirk from the Lyric Opera of Chicago.
                    </p>
                    <p>
                        Prior to his adventures in Chicago, Mr. Marlin earned his Bachelor's of Music in Bassoon Performance from the University of Washington, Seattle where he was given the extraordinary opportunity to study with Seth Krimsky, Principal Bassoon of the Seattle Symphony Orchestra.
                    </p>
                    <p>
                        Mr. Marlin is the first and only owner of his Heckel Crest Bassoon, finished in January of 2004.
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MyStory;