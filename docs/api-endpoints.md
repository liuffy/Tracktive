# API Endpoints 

## HTML API

### Root 
* `GET /` loads React Web App

### JSON API

### Users 

* `POST /api/users` #create
* `GET /api/users/:id` #show

### Session

* `POST /api/session` #create
* `DELETE /api/session` #destroy 

### Tracktlists 

* `GET /api/tracktlists` #index
* `GET /api/tracktlists/:id` #show 
* `POST /api/tracktlists` #create 
* `DESTROY /api/tracktlists`  #delete 

### TracktlistLikes

* `POST /api/users/:id/likes` #create 
* `DELETE /api/tracktlists`  #destroy
