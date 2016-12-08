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

### DashboardContainer
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


