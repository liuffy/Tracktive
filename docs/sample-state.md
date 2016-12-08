# Sample State
```javascript
{
  currentUser: {
    id: 1,
    username: "randomuser1984",
  },

  forms: {
    signIn: {errors: []},
    signUp: {errors: []},
    playlist: {},
  },
  currentSong: {
    song:  {
      id: 3,
      title: "I Miss You",
      artist: "Blink-182",
      duration: "4:04"
    }
    playing: true
  },
  tracktlists: {

      1:  {
        tracktlist_id: 1,
        title: "highschool nostalgia",
        creatorId: 1,
        **spotify magic to be clarified later on**
        image_url: "albumart.png"
      },     

      2:  {
        tracktlist_id: 2,
        title: "Billy Joel forever",
        creatorId: 1,
        **spotify magic to be clarified later on**
        image_url: "albumart.png"
      },
    },
  tracktlistDetail: {
          **What goes here exactly??**
    id: 1,
    title: "highschool nostalgia",
    creatorId: 4,
    tracktlist_id: [
       1:  {
          id: 1,
          title: "high school nostalgia",
          duration: "4:40",
          album: "Lorem"
        }
    ]
  }
}
```