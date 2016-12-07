# Tracktive
[Heroku link](http://link.com)

## Minimum Viable Product 
*Tracktive* is a web application inspired by 8Tracks, built using Ruby on Rails and React/Redux. By the end of the first 2 weeks of development, this app will, at a minimum, satisfying the following: 

- [ ] Hosting on Heroku
	- [ ] Clean styling and smooth, bug-free navigation
- [ ] Account creation, login, & guest/demo login
- [ ] TracktList creation and deletion (utilizing [Spotify's API](https://developer.spotify.com/web-api/))
- [ ] Continuous TracktList streaming while navigating 
- [ ] Dashboard 
	- [ ] Search component in header narrows down TracktLists in dashboard
- [ ] User profile
	- [ ] displays liked and created tabs 
- [ ] A Production README

## Design Docs 

* [Wireframes]()
* [Component Hierarchy]()
* [API Endpoints]()
* [Schema]()
* [Sample State]()

## Implementation Timeline

### Phase 1: Backend Setup, Front End User Authentication *(2 days)*
*Objective*: Set up backend authentification and session-related components 

- [X] Create new Rails project
	- [ ] Webpack & react/redux modules
- [ ] `User`
	- [ ] Model with validations
	- [ ] UsersController with routes: create and show 
	- [ ] Seed db with users
- [ ] `Session`
	- [ ] SessionsController with routes: create and destroy  
	- [ ] Test login with users from seed file 
- [ ] StaticPages controller and root view
- [ ] `Sessions` Redux Cycle 
	- [ ] Session utils
	- [ ] Session actions
	- [ ] Session reducer 
	- [ ] Session form presentational component and container
- [ ] Header 
	- [ ] Header presentational component and container
- [ ] `Greeting` (nested in Header)
	- [ ] Greeting presentational component and container
	- [ ] Check that the greeting renders in app.jsx 
- [ ] `UserDetail` component for currentUser in header 
- [ ] CSS: style `SessionForm` components 


### Phase 2: `TracktList` Model and `TracktLikes` Model, Spotify API *(3 days)*
*Objective*: TracktLists can be created, liked, and unliked. 

- [ ] Experiment with Spotify API endpoints in Chrome Dev Tools
- [ ] `Tracktlist` 
	- [ ] Model 
	- [ ] TracktListsController  
- [ ] `TracktListLike` model
- [ ] JBuilder views for TracktLists
- [ ]	`CreateTracktList


### Phase 3: Dashboard, SideBar, Dynamic Search *(2 days)*
*Objective*: Upon login, users see a dashboard displaying a random mix of 8 TracktLists as well as a search bar that
narrows down results based on the inputted query. 

- [ ] `TracktListIndexItem`
- [ ] Import `<Link>` from `react-router` to stylize active links 
- [ ]
- [ ]
- [ ] 
- [ ] **Bonus**: Create tags/taggings model and associations (see below)

### Phase 4:  Continuous Streaming *(2 days)*
*Objective*: TracktLists can be streamed without being interrupted by navigation. 
Information on the current song is displayed in the header bar.
- [ ] `CurrentSongDisplay` component
- [ ]
- [ ]
- [ ]
- [ ]
- [ ] **Bonus**: Add icons to side panel

### Phase 6:  Media Queries and Optimizing Design *(2 days)*
*Objective*: Optimize and enhance navigation through 

- [ ] Implement media queries so that app is usable at different viewport sizes 
- [ ] Design custom vector logo to display in place of App Name
- [ ] Implement customized CSS spinner so that it spins when user logs in or creates a TracktList
- [ ] Add logo as favicon
- [ ] Make sure stylistic elements and color scheme are consistent in all views 


## Bonus Features

### TracktList taggings
- [ ] Create tags/taggings model and associations (join table)
	- [ ] Make necessary CRUD API
	- [ ] Set up fetching tags for tracks
	- [ ] Connect this tag search with MixesIndex component where our filter is tags

### Infinite  scroll (pagination)
