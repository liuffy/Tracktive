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
	- [ ] displays liked and created playlist tabs 
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
	- [ ] Bootstrap `currentUser` info 
- [ ] `Session`
	- [ ] SessionsController with routes: create and destroy  
	- [ ] Test login with users from seed file 
- [ ] StaticPages controller and root view
- [ ] `Sessions` Redux Cycle 
	- [ ] Session utils
	- [ ] Session actions
	- [ ] Session reducer 
	- [ ] `SessionForm` presentational component and container
- [ ] Header 
	- [ ] Header presentational component and container
- [ ] `Greeting` (nested in Header)
	- [ ] Greeting presentational component and container
	- [ ] Check that the greeting renders in app.jsx 
- [ ] `UserDetail` component for currentUser in header 
- [ ] CSS: style session-related components (`SessionForm`)


### Phase 2: `TracktList` Model and `TracktLikes` Model, Spotify API *(3 days)*
*Objective*: TracktLists can be created, liked, and unliked. 

:question: Do I need a separate `Trackt` model and redux cycle if the songs aren't being added by hand?

- [ ] Experiment with Spotify API endpoints in Chrome Dev Tools
- [ ] Use Spotify API endpoints to create playlists 
	- [ ] Successfully make a query to retrieve artist IDs based on inputted artist names 
	- [ ] Successfully grab album IDs of artists using artist IDs
	- [ ] Successfully grab track IDs of tracks from album IDs 
	- [ ] Successfully create an 8-track playlist of randomized tracks 
- [ ] `Tracktlist` 
	- [ ] Model 
	- [ ] TracktListsController, route: create and destroy   
- [ ] `TracktListLike` model
- [ ] JBuilder views for TracktLists


### Phase 3: Dashboard, SideBar, Dynamic Search *(2 days)*
*Objective*: Upon login, users see a dashboard displaying all TracktLists as well as a search bar that
brings up results based on the inputted artist. 


- [ ] `TracktListIndexItem`
	- [ ] Presentational component, container
	- [ ] Figure out how to import album or artist art into the IndexItem button 
	- [ ] Use Masonry JavasScript library for Dashboard grid layout
- [ ] `TracktListDetail`
	- [ ] Displays: Creator of TracktList, Date Published, Name of Tracktlist (left side)
	- [ ] Displays: TracktList (right side)
	- [ ] Blown up Album art as banner? :art:
- [ ] Sidebar: Import `<Link>` component from `react-router` to stylize active links and efficiently set up routes  
- [ ] Implement custom query for searching via *artists* 
- [ ] CSS: style search-related components (`TrackListIndexItem`, `Searchbar`)

### Phase 4:  Continuous Streaming *(2 days)*
*Objective*: TracktLists can be streamed without being interrupted by navigation. 
Information on the current song is displayed in the header bar.

- [ ] Research: requirements for continuous streaming
- [ ] Research:  bugs that might interrupt continuous streaming
- [ ] `CurrentSong` Redux Cycle -- is this the only way to let music play continuously during navigation?????
	- [ ] `CurrentSong` components
	- [ ] CurrentSongBar
	- [ ] CurrentSongDisplay 
	- [ ] CurrentSongControlsContainer
	- [ ] CurrentSongProgressBar
- [ ] CSS: Style tracktlist-related components 

### Phase 6:  Media Queries and Optimizing Design *(2 days)*
*Objective*: Optimize and enhance navigation through 

- [ ] Implement animated Demo/ Guest Login using script 
- [ ] Implement media queries so that app is usable at different viewport sizes 
- [ ] Design custom vector logo to display in place of App Name in header 
- [ ] Embed customized CSS spinner so that it displays when user logs in or creates a TracktList
- [ ] Add logo as favicon
- [ ] Make sure stylistic elements and color scheme are consistent in all views 

## Bonus Features :sparkles:

### TracktList taggings
- [ ] Create tags/taggings model and associations (join table)
	- [ ] Make necessary CRUD API
	- [ ] Set up fetching tags for tracks
	- [ ] Connect this tag search with MixesIndex component where our filter is tags

### Add Icons to Side nav panel 

### Infinite  scroll (pagination)
