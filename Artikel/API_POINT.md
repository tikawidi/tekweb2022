**API POINT**
**USER**
```

GET: /users/[id]

response:
[
{
  "id"          : "",
  "title"        : "",
  "description"  : "",
  "ig"       : "",
  "yt"  : "",
  "imageProfile"      : "",
},
...
]

GET: /users

response:
[
{
  "id"          : "",
  "title"        : "",
  "description"  : "",
  "ig"       : "",
  "yt"  : "",
  "imageProfile"      : "",
},
...
]

POST: /users
data:
{
  "id"          : "",
  "title"        : "",
  "description"  : "",
  "ig"       : "",
  "yt"  : "",
  "imageProfile"      : "",
}

response:
true    // if success
false   // if failure


PUT: /users/[id]
data:
{ 
  "id"          : "",
  "title"        : "",
  "description"  : "",
  "ig"       : "",
  "yt"  : "",
  "imageProfile"      : "",
}

response:
true    // if success
false   // if failure



DELETE: /users/[id]
response:
true    // if success
false   // if failure

**Artikel**
```

GET: /Artikel/[id]

response:
[
{
  "id"          : "",
  "title"        : "",
  "description"  : "",
  "thumbnail"       : "",
  "author"  : "",
  "content"      : "",
},
...
]

GET: /Artikel

response:
[
{
   "id"          : "",
  "title"        : "",
  "description"  : "",
  "thumbnail"       : "",
  "author"  : "",
  "content"      : "",
},
...
]

POST: /Artikel
data:
{
  "id"          : "",
  "title"        : "",
  "description"  : "",
  "thumbnail"       : "",
  "author"  : "",
  "content"      : "",
}

response:
true    // if success
false   // if failure


PUT: /Artikel/[id]
data:
{ 
  "id"          : "",
  "title"        : "",
  "description"  : "",
  "thumbnail"       : "",
  "author"  : "",
  "content"      : "",
}

response:
true    // if success
false   // if failure



DELETE: /Artikel/[id]
response:
true    // if success
false   // if failure

**Prototype**
```

GET: /Prototype/[id]

response:
[
{
  "id"          : "",
  "name"      : "",
  "description"  : "",
},
...
]

GET: /Prototype

response:
[
{
"id"          : "",
  "name"      : "",
  "description"  : "",
},
...
]

POST: /Prototype
data:
{
 "id"          : "",
  "name"      : "",
  "description"  : "",
}

response:
true    // if success
false   // if failure


PUT: /Artikel/[id]
data:
{ 
  "id"          : "",
  "name"      : "",
  "description"  : "",
}

response:
true    // if success
false   // if failure



DELETE: /Prototype/[id]
response:
true    // if success
false   // if failure

Desain database dari API Point yang telah saya buat adalah sebagai berikut:

mermaid
classDiagram
    class User{
        # id: int
        + title: varchar
        + descrition: text
        + ig: varchar
        + yt: varchar
        + imgageProfile: varchar
        + getAllUsers()
        + getUsersById()
        + updateUsers()
        + createUsers()
        + deleteUsers()
    },
    class Prototype{
        # id: int
        + name: varchar
        + description: varchar
        + getAllPrto()
        + getProtoById()
        + updateProto()
        + createProto()
        + deleteProto()
    },
    class Artikel{
        # id: int
        + title: varchar
        + description: string
        + thumbnail: varchar
        + author: varchar
        + content: varchar
        + getAllArtikel()
        + getArtikelById()
        + updateArtikel()
        + createArtikel()
        + deleteArtikel()
    }

