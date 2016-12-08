#Component Hierarchy 

## Splash Page

### LoginHeaderContainer
* ButtonItem (2)
	* sign up, sign in 
	  * SessionFormContainer
	  	* ButtonItem (2)
* Logo

###SplashScreen
* SplashImage
* WelcomeText


## App Level

### Dashboard
* SidebarContainer
	* ButtonItem (3)
		* explore, create, my_music
	* Greeting
* TracktlistIndexContainer
	* TracktlistIndexItems
* SearchContainer
	* SearchResultsContainer
		* TracktlistIndexItems

## Tracktlists

### TracktlistIndexContainer
* Spotify widget
### TracktlistDetailContainer
* LikeButton 

### TracktlistFormContainer

## TracktPlayer

### TracktlistPlayerContainer
* CurrentSongDisplay
* CurrentSongControlsContainer
	* PlayButton, ForwardButton, BackButton

## Users/ My Account
* TracktlistIndexItems
* ButtonItems(2)
	* liked, created 


# Routes

| Path                          | Component                                                       |
|-------------------------------|-----------------------------------------------------------------|
| "/"                           | "SessionFormContainer"                                          |
| "/explore"                    | "SidebarContainer,  TracktlistIndexContainer,  SearchContainer" |
| "/users/:user_id"             | "UserDetailContainer, TracktlistIndexItems"                     |
| "/tracktlists/:tracktlist_id" | "TracktlistDetailContainer"                                     |
| ""/tracktlists/new"           | "TracktlistFormContainer"                                       | 


