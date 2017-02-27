# Tracktive

[Tracktive Live](https://tracktive.herokuapp.com/#/)

*For effortless playlists.* :musical_note:

 Tracktive is a single-page, full-stack web application inspired by [8tracks](http://8tracks.com/), created with the goal of designing a lightweight clone of the original playlist creation website. It is built on a *Ruby on Rails* backend, a *PostgreSQL* database, and a *React.js* with *Redux* architectural framework on the frontend. It uses endpoints from Spotify's API to build shuffled playlists that are saved into the database. 

## Features & Implementation


### Account Creation & Authentification
![login_modal](http://res.cloudinary.com/liuffy/image/upload/v1488222289/Screen_Shot_2017-02-27_at_11.03.50_AM_ghj0dw.png)

Users gain access to the app and their playlists by entering their credentials on the login/ sign-up modal, and Bcrypt is used to store a secure hash of the user's password. 

### Dashboard
![dashboard](http://res.cloudinary.com/liuffy/image/upload/c_scale,w_946/v1488221683/screen2_suvkxn.png)
Upon successfully logging in, users will be able to browse and explore all playlists that have been saved in the database. `Masonry`, a React.js component, allows the playlist objects will move around to fit the window if it is resized. 


### Easy Playlist Creation
![tracktlist_form](http://res.cloudinary.com/liuffy/image/upload/c_scale,w_946/v1488222636/Screen_Shot_2017-02-27_at_11.10.02_AM_sa6ruz.png)
Users create playlists via a modal in which they complete three fields:
* The names of artists they want included in the playlist (they can enter an unlimited amount of artists)
* The name of the mix 
* An image url for the mix's "cover"

After submitting the form, the user will be redirected to their profile, which will now contain the newly created playlist. 


### User Profile
![user_profile](http://res.cloudinary.com/liuffy/image/upload/c_scale,w_946/v1488221642/mine_zum5ni.png)
Users will have access to playlists 

### Dynamic Playlist Searching
![search_gif](https://im2.ezgif.com/tmp/ezgif-2-d6a13507e7.gif)

As the user types into the search bar at the top of the page, the playlists rendered is narrowed dynamically to only include items that include the artist(s) entered by the user. If no playlists include the artist(s) entered by the user, a message containing a link to the playlist creation form is rendered.

### Responsive Design 


## Upcoming Features 
Short paragraph describing this feature
