# JSONizr
REST API Documentation made simple. JSONizr creates documentation from json files! 😍

Create `json` files and copy-paste, describe endpoints, and JSONizr will create a nice website for you! Runs on Node/Express but you don't need any skill (except typing json).

## Install

1. git clone https://github.com/radenkovic/jsonizr
2. cd jsonizr 
3. npm Install
4. npm start
5. open `localhost:3000/template/get`

Figure out everything else, or just ask :)


## Sample JSON

Here's sample endpoint description, will add better documentation later.

```
{
  "title": "GET /api/template",
  "description": "Write your description here.",
  "method": "GET",
  "input": {
    "user_id": 1,
    "full_name": "Dan"
  },
  "output": {
    "full_name": "Dan",
    "date_of_birth": "04-20-1989",
    "github": "https://github.com/radenkovic",
    "true": 1
  },
  "params": [
    {
    "name": "user_id",
    "required": true,
    "description": "User is important."
    },
    {
      "name": "full_name",
      "required": false,
      "description": "Not required, but search is faster."

    }
  ]
}
```

And here's the result:


![alt text](https://s14.postimg.org/5t44p1pg1/jsonizer.png "Jsonizer")


## Short Info

This is still a total sketch, will need a lot of work to get it in shape.
