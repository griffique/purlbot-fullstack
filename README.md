# Purlbot Knitting Pattern Generator
## Video Demo:  <https://youtu.be/lCWN1ishpgQ>
## Project Hosted at <https://purlbot.onrender.com/>
### Description: 

#### Purlbot is a knitting pattern generator with a React frontend, a Python/Flask backend and MongoDB. The application allows users to input information about the knitting supplies they have on hand and then generate a custom pattern based on their parameters for a hat, scarf or two mittens. 

#### This is desirable for knitters trying to use materials already on hand because other knitting pattern applications feature some filtering, but still ask the user to manually browse through many patterns to find something they like. PurlBot instead creates a new pattern based on the user's needs and suggests various textures and stitches that might be used for the project, so the user has control over every aspect of their project. 

### Step one: Front End

#### The front end of the Purlbot application establishes a user interface and handles the knitting pattern generation functions using a combination of HTML, CSS and Javascript. React is used for state management and to keep the various components for pattern generation organized. Bootstrap is used for convenient styling. 

#### The user enters the required information about their knitting supplies into the pattern generator form component. The form captures the input as variables using an event listener (OnChange) and sets the variable to the new input using UseState(). 

#### On Submit, the generator form evaluates which pattern type the user chose and returns the appropriate component for hat, scarf or mittens. The pattern components each have an HTML template where the user's parameters are injected via JSX with the correct calculation for the type of garment being produced. For instance, if a user has a knitting gauge of 10 stitches per inch and wishes to make an adult scarf with a width of 8 inches, the numnber of stitches that should be cast on would equal props.gauge X 8, or 80 stitches. The pattern instructions were devised based on my own knitting experience and analysis of many hat, scarf and mitten patterns. 

### Step Two: Back End

#### Users of PurlBot may wish to save patterns, so I have implemented a back end to the site with Python, Flask and MongoDB. app.py contains functions for registering, logging in, logging out, editing and deleting user accounts. Flask mail and JWT enable secure password reset by email.

#### Saved pattern parameters can be fed back into the generator via query parms. The pattern list template is set up to generate a link to the generator form with the user's params which are then retrieved by the front end component using UseLocation. 

### Future Directions

#### Further user testing is required to verify the success of the pattern calculations for extremely large and extremely small gauges, but this is more of a knitting problem than a coding problem. My plan is to offer the application up to users for testing and collect feedback about the results they got from knitting the generated patterns. 

#### I am also in the midst of Google UX Training. It would be beneficial to look at user experience with the application itself in addition to the patterns, and implement suggested changes for increased usability. 

#### I very much enjoyed this chance to combine my love of knitting with coding and hope that the application is useful to other knitters. 



