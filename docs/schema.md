# Schema

## users 

| attribute       | datatype | details  |
|-----------------|----------|----------|
| id              | integer  | not null |
| username        | string   |          |
| password_digest | string   | not null |
| session_token   | string   | not null |

## tracktlists 

| attribute  | datatype | details               |
|------------|----------|-----------------------|
| id         | integer  | not null              |
| title      | string   | not null              |
| creator_id | integer  | not null, foreign_key |
| spotify_id | integer  | not null              |

## likes 

| attribute     | datatype | details               |
|---------------|----------|-----------------------|
| id            | integer  | not null              |
| tracktlist_id | integer  | not null              |
| liker_id      | integer  | not null, foreign key |