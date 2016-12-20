# Tracktive
[Heroku link](https://tracktive.herokuapp.com/#/)

## Minimum Viable Product 
*Tracktive* is a web application inspired by 8Tracks, built using Ruby on Rails and React/Redux. By the end of the first 2 weeks of development, this app will, at a minimum, satisfying the following: 

- [X] Hosting on Heroku
	- [ ] Clean styling and smooth, bug-free navigation
- [X] Account creation, login, & guest/demo login
- [X] TracktList creation and deletion (utilizing [Spotify's API](https://developer.spotify.com/web-api/))
- [ ] Continuous TracktList streaming while navigating 
- [ ] Dashboard 
	- [ ] Search component in header narrows down TracktLists in dashboard
- [X] User profile
	- [ ] displays liked and created playlist tabs 
- [ ] A Production README

## Design Docs 

* [Wireframes]()
* [Component Hierarchy](https://github.com/liuffy/Tracktive/tree/master/docs/wireframes)
* [API Endpoints](https://github.com/liuffy/Tracktive/blob/master/docs/api-endpoints.md)
* [Schema](https://github.com/liuffy/Tracktive/blob/master/docs/schema.md)
* [Sample State](https://github.com/liuffy/Tracktive/blob/master/docs/schema.md)

## Implementation Timeline

### Phase 1: Backend Setup, Front End User Authentication *(2 days)*
*Objective*: Set up backend authentification and session-related components 

- [X] Create new Rails project
	- [X] Webpack & react/redux modules
- [X] `User`
	- [X] Model with validations
	- [X] UsersController with routes: create and show 
	- [X] Bootstrap `currentUser` info 
- [X] `Session`
	- [X] SessionsController with routes: create and destroy  
	- [X] Test login with Ajax requests
- [X] StaticPages controller and root view
- [X] `Sessions` Redux Cycle 
	- [X] Session utils
	- [X] Session actions
	- [X] Session reducer 
	- [X] `SessionForm` presentational component and container
- [X] `Greeting` (nested in Sidebar)
	- [X] Greeting presentational component and container
- [X] `UserDetail` component for currentUser in header 
- [X] CSS: style session-related components (`SessionForm`)


### Phase 2: `TracktList` Model and `TracktLikes` Model, Spotify API *(3 days)*
*Objective*: TracktLists can be created, liked, and unliked. 

- [X] Experiment with Spotify API endpoints in Chrome Dev Tools
- [X] Use Spotify API endpoints to create playlists 
	- [X] Successfully make a query to retrieve artist IDs based on inputted artist names 
	- [X] Successfully grab album IDs of artists using artist IDs
	- [X] Successfully grab track IDs of tracks from album IDs 
	- [X] Successfully create an playlist of randomized tracks with a length based on the number of artists inputted
- [X] `Tracktlist` 
	- [X] Model 
	- [X] TracktListsController, route: create and destroy 
- [X] JBuilder views for TracktLists
- [X] `TracktListLike`  - not functional yet!!!!
	- [X] model, 
	- [X] controller, 
	- [X] routes,
	- [X] actions,
	- [X] utils,
	- [X] reducer,
	- [X] component & container,


### Phase 3: Dashboard, SideBar, Dynamic Search *(2 days)*
*Objective*: Upon login, users see a dashboard displaying all TracktLists as well as a search bar that
brings up results based on the inputted artist. 


- [ ] `TracktListIndexItem`
	- [ ] Presentational component, container
	- [ ] Figure out how to import album or artist art into the IndexItem button 
	- [ ] Use Masonry JavasScript library for Dashboard grid layout
- [ ] `TracktListDetail`
	- [ ] Displays: Creator of TracktList, Date Published, Name of Tracktlist (left side)
	- [X] Displays: TracktList (right side)
	- [X] Blown up Album art as banner? :art:
- [X] Sidebar: Import `<Link>` component from `react-router` to stylize active links and efficiently set up routes  
- [ ] Implement custom query for searching via *artists* 
- [ ] CSS: style search-related components (`TrackListIndexItem`, `Searchbar`)

### Phase 4:  Continuous Streaming *(2 days)*
*Objective*: TracktLists can be streamed without being interrupted by navigation. 
Information on the current song is displayed in the header bar.

- [ ] Research: requirements for continuous streaming
- [ ] Research:  bugs that might interrupt continuous streaming
- [ ] `CurrentSong` Redux Cycle -- is this the only way to let music play continuously during navigation?????
Serious: What if I just have second compact playlist widget?
	- [ ] `CurrentSong` components
	- [ ] CurrentSongBar
	- [ ] CurrentSongDisplay 
	- [ ] CurrentSongControlsContainer
	- [ ] CurrentSongProgressBar
- [ ] CSS: Style tracktlist-related components 

### Phase 5:  Media Queries and Optimizing Design *(2 days)*
*Objective*: Optimize and enhance navigation through adding or adjusting stylistic features. 

- [ ] Implement animated Demo/ Guest Login using script 
- [ ] Implement media queries so that app is usable at different viewport sizes 
- [ ] Design custom vector logo to display in place of App Name in header 
- [ ] Embed customized CSS spinner so that it displays when user logs in or creates a TracktList
- [ ] Add logo as favicon
- [ ] Custom graphics
- [ ] Make sure stylistic elements and color scheme are consistent in all views 

## Bonus Features :sparkles:

### TracktList taggings
- [ ] Create tags/taggings model and associations (join table)
	- [ ] Make necessary CRUD API
	- [ ] Set up fetching tags for tracks
	- [ ] Connect this tag search with MixesIndex component where our filter is tags

### Add Icons to Side nav panel 

### Infinite  scroll (pagination)
