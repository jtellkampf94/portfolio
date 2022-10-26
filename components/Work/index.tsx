const Work: React.FC = () => {
  return (
    <section className="work" id="work">
      <div className="work__heading">
        <h1>work</h1>
      </div>
      <div className="work__container">
        <div className="work__card">
          <div className="work__card-image-container">
            <img
              className="work__card-image"
              alt="ChatBack App Mock ups"
              src="/assets/images/chatback-all-screens.png"
            />
          </div>
          <div className="work__card-icon-container">
            <img
              className="work__card-icon"
              src="/assets/images/typescript-logo.png"
              alt="Typescript Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/nextjs-logo.png"
              alt="Next.js Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/react-logo.png"
              alt="React Logo"
            />
            <img
              className="work__card-icon"
              alt="Styled Components Logo"
              src="/assets/images/styledcomponents-logo.png"
            />
            <img
              className="work__card-icon"
              src="/assets/images/graphql-logo.png"
              alt="Graphql Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/apollo-logo.png"
              alt="Apollo Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/nodejs-logo.png"
              alt="Nodejs Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/postgresql-logo.png"
              alt="Postgresql Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/redis-logo.png"
              alt="Redis Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/awsec2-logo.png"
              alt="Awsec2 Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/awss3-logo.png"
              alt="Awss3 Logo"
            />
          </div>
          <div className="work__card-header">
            <h3>ChatBack</h3>
            <h4>Creator and Software developer</h4>
          </div>
          <div className="work__card-description">
            <h4>Description</h4>
            <ul>
              <li>
                ChatBack is a real time messaging app enabled using websockets
                from GraphQL subscriptions
              </li>
              <li>
                Users can send text and / or images to other users one-on-one or
                in groups.
              </li>
              <li>
                Users can search for other users to add as contacts, to message
                or to include in a group to message.
              </li>
              <li>
                Users are required to register or login to use app, which uses
                session based authentication
              </li>
              <li>
                The frontend uses React to create the UI and is styled using the
                css in js library Styled Components. It is rendered server-side
                with the use of the Next.js framework
              </li>
              <li>
                The backend is a Node.js server implementing a GraphQL API with
                the use of Apollo server
              </li>
              <li>
                Apollo Client is used on the frontend to fetch data from the
                GraphQL API and for state management
              </li>
              <li>
                The app is entirely written in TypeScript so uses TypeGraphQL
                and TypeORM libraries on the back end to integrate TypeScript
                better with GraphQL and the models in the database.
              </li>
              <li>
                The app uses a PostgreSQL database to store user and message
                data and uses Redis to store session data
              </li>
              <li>
                The app uses an AWS S3 Bucket for image storage. A presigned URL
                is required to send an image to S3 bucket ensuring an extra
                layer of security
              </li>
              <li>
                Docker and Docker Compose is used for deployment. The app is
                deployed on an AWS EC2 Instance.
              </li>
            </ul>
          </div>
          <div className="work__card-button-container">
            <a href="https://github.com/jtellkampf94/ChatBack" target="_blank">
              <button>Code</button>
            </a>
            <a href="http://44.208.163.53/" target="_blank">
              <button>Website</button>
            </a>
          </div>
        </div>

        <div className="work__card">
          <div className="work__card-image-container">
            <img
              className="work__card-image"
              alt="Movid App Mock ups"
              src="/assets/images/movid-all-screens.png"
            />
          </div>

          <div className="work__card-icon-container">
            <img
              className="work__card-icon"
              src="/assets/images/typescript-logo.png"
              alt="Typescript Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/react-logo.png"
              alt="React Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/scss-logo.png"
              alt="SCSS Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/redux-logo.png"
              alt="Redux Logo"
            />
          </div>

          <div className="work__card-header">
            <h3>Movid</h3>
            <h4>Creator and Software developer</h4>
          </div>

          <div className="work__card-description">
            <h4>Description</h4>
            <ul>
              <li>
                {" "}
                The Movid web app shows users information of any movie or TV
                show on the movie database API, including the plot, cast and
                crew, release date, critics reviews, average rating and many
                more
              </li>
              <li>
                The app allows users to create an account through the movie
                database API (uses third party authentication), and rate movies
                or tv shows. Users can also create watchlists and favourite
                titles to view on account profile.
              </li>
              <li>
                Users can advance search for titles, actors, release dates,
                genres and / or voting average.
              </li>
              <li>
                The app is written in Typescript and the UI is built using React
              </li>
              <li>
                The app uses Redux for state management and is styled
                responsively using SCSS
              </li>
              <li>
                The Movie Database API is used as the data source of the app and
                it is deployed with netlify
              </li>
            </ul>
          </div>

          <div className="work__card-button-container">
            <a href="https://github.com/jtellkampf94/movid" target="_blank">
              <button>Code</button>
            </a>
            <a href="https://jtellkampf94movid.netlify.app/" target="_blank">
              <button>Website</button>
            </a>
          </div>
        </div>

        <div className="work__card">
          <div className="work__card-image-container">
            <img
              className="work__card-image"
              alt="Babbler App mock ups"
              src="/assets/images/babbler-all-screens.png"
            />
          </div>
          <div className="work__card-icon-container">
            <img
              className="work__card-icon"
              src="/assets/images/javascript-logo.png"
              alt="Javascript Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/react-logo.png"
              alt="React Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/redux-logo.png"
              alt="Redux Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/styledcomponents-logo.png"
              alt="Styled Components Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/nodejs-logo.png"
              alt="Node js Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/express-logo.png"
              alt="Express js Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/mongodb-logo.png"
              alt="Mongo DB Logo"
            />
            <img
              className="work__card-icon"
              src="/assets/images/awss3-logo.png"
              alt="Awss3 Logo"
            />
          </div>
          <div className="work__card-header">
            <h3>Babbler</h3>
            <h4>Creator and Software developer</h4>
          </div>
          <div className="work__card-description">
            <h4>Description</h4>
            <ul>
              <li>
                Babbler web app allows users to create posts, follow other
                users, comment on posts and like posts.
              </li>
              <li>
                Users are required to register or login to use the app. The app
                uses JSON webtoken authentication
              </li>
              <li>
                Users can search for other users to follow as well as edit their
                profile
              </li>
              <li>
                The frontend uses React to build the UI and SCSS for responsive
                styles
              </li>
              <li>
                The app uses Redux and Redux-Saga for state management on the
                frontend
              </li>
              <li>
                The backend is a NodeJS Server using the Express.js framework to
                create a REST API
              </li>
              <li>
                The app stores all user and post data on a MongoDB database
                using Mongoose ORM to map the models on the server to the
                database
              </li>
              <li>
                The app uses an AWS S3 bucket to store images which requires a
                presigned url to do this, creating an extra layer of security
              </li>
              <li>The app is deployed using heroku</li>
            </ul>
          </div>
          <div className="work__card-button-container">
            <a href="https://github.com/jtellkampf94/babbler" target="_blank">
              <button>Code</button>
            </a>
            <a
              href="https://jtellkampf94babbler.herokuapp.com/"
              target="_blank"
            >
              <button>Website</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
