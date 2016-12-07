# Tractive
[Heroku link](http://link.com)

## Minimum Viable Product 
*Tracktive* is a web application inspired by 8Tracks, built using Ruby on Rails and React/Redux. By the end of the first 2 weeks of development, this app will, at a minimum, satisfying the following: 

- [ ] Hosting on Heroku
	- [ ] Clean styling and smooth, bug-free navigation
- [ ] Account creation, login, & guest/demo login
- [ ] Playlist creation and deletion (utilizing [Spotify's API](https://developer.spotify.com/web-api/))
- [ ] Continuous playlist streaming while navigating 
- [ ] Dashboard 
	- [ ] Search component allows users to find playlists
- [ ] User profile
	- [ ] displays liked and created playlists
- [ ] A Production README

## Design Docs 

* [Wireframes]()
* [Component Hierarchy]()
* [API Endpoints]()
* [Schema]()
* [Sample State]()

## Implementation Timeline

### Phase 1: Backend Setup, Front End User Authentication (2 days)
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


### Phase 2: `Playlist` Model and `Likes` Model, Spotify API(3 days)
*Objective*: Playlists can be created, liked, and unliked. 

- [ ] `Playlist` model 
- [ ] `PlaylistLike` model
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

### Phase 3: Dashboard, SideBar, Dynamic Search (2 days)
*Objective*: Upon login, users see a dashboard displaying a random mix of playlists as well as a search bar that
narrows down results based on the inputted query. 

- [ ] `PlaylistIndexItem`
- [ ] Drop down menu 
- [ ]
- [ ]
- [ ]
- [ ] 
- [ ] **Bonus**: Create tags/taggings model and associations (join table)
	- [ ] Make necessary CRUD API
	- [ ] Set up fetching tags for tracks
	- [ ] Connect this tag search with MixesIndex component where our filter is tags
- [ ] Update UserDetail to display *Liked* and *Created* Playlists 

### Phase 4:  Music Player, Continuous Streaming  (2 days)
*Objective*: Playlists can be streamed without being interrupted by navigation and controlled via a playerbar.

- [ ] CurrentSong components
	- [ ] CurrentSongDisplay (nested in CurrentSong component)
 	- [ ] CurrentSongControls (nested in CurrentSong component)
- [ ]
- [ ]
- [ ]
- [ ]
- [ ] **Bonus**: Add icons to side panel



### Phase 6:  Loading Spinner + CSS workshopping (2 days)
*Objective*: 

- [ ]

## Bonus Features

### Tracklist taggings
- [ ] Create tags/taggings model and associations (join table)
	- [ ] Make necessary CRUD API
	- [ ] Set up fetching tags for tracks
	- [ ] Connect this tag search with MixesIndex component where our filter is tags
