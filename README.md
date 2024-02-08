# OS News - A React News App

This repo contains all of the files needed to run OS News, a news application build with React. It uses this [API repo](https://github.com/OJ423/news-backend) as the backend. This is hosted on the free tier of Render so has to rebuild after 15 minutes of inactivity. You may need to wait 90 seconds when first visiting -

**[OS-News Hosted Site](https://os-news.netlify.app/)**

## Installation & Guidance
If you want to build upon or use this repo, follow the instructions below.

- `git clone https://github.com/OJ423/os-news.git` to your chosen local directory
- CD into the directory and open it
- `npm install` to install all the dependencies
- `npm run dev` to view the site locally on your browser
- `npm run build` to create the build directory

## Dependencies

OS News uses:

- Vite as the React developer environment
- React
- React-dom
- React-router-dom for navigation
- Axios for API requests

### Dependency Minimum Versions

- node: 18+
- axios: ^1.6.7
- react: ^18.2.0,
- react-dom: ^18.2.0,
- react-router-dom: ^6.22.0

## User Guide
The application is intuitive and requires little explanation, but here's a basic overview to help you get started.

### Sections

- Home page - app landing page with links to relevant information. Navigate to an area of interest.
- Articles - Displays list of articles in the database. Use the sort and order buttons to arrange the articles.
- Topics - A list of article topics, click on one to see all the articles in that topic.
- Article view - By clicking on the article image or title you get to the actual article. Here you can read it, give it a vote and read comments. Logged in users can post comments.
- Login - There is no authentication for this project, you would need to set that up yourself. In this app, there is a prompt with some user names, use one of these users to login to experience the privilege of being registered.
- Profile - Only available for logged in users. See the user details and any stories published by that user.
