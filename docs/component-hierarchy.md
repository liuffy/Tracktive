#Component Hierarchy 

## Splash Page

### LoginHeaderContainer
* Logo
* ButtonItem (2)
	* sign up, sign in 
	  * SessionFormContainer
	  	* ButtonItem (2)

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

### TracktlistContainer
* Spotify widget

### TracktlistDetailContainer
* LikeButton 

### TracktlistFormContainer
* TracktlistForm

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
| "/tracktlists/new"           | "TracktlistFormContainer"                                       | 


