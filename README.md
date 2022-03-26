# Interview

# Architecture Design Question

I'll use react native with microservices on the backend to accomplish this 
application. 

The app is installed as a react native application in App Stores, which
has OTA enabled so that new updates can be shippped directly, bypassing the
app stores updates cycle. It fetches information from a series of feature specific
application deployed on serverless framework such as AWS SAM, where requests 
can be executed quickly, cached, and scaled automatically. Using React Native
allows us to write cross-platform application. Should core business logic kept
pure, this can even allow a swift migration to Desktop and Web environment with
Electron and React Web.

Third party services, depending on the type, can be optimized with backend API we control. For example,
static assets can be extracted, transformed and uploaded to scalable storage 
services like AWS S3. This can be accomplished with AWS Step function
such that extract, transform, and upload can run independently and
communicate via AWS SQS.

API services that can be cached can also be utilized this
way by setting up a relay, where identical requests can be stored in Redis.




# Programming question (Topic 2 - Jianshu copycat)

## Architecture

The site will be built with nextjs because it provides built 
in ssr for site performance and seo, with out of the box page 
based routing and dynamic routes, which is ideal for blog like
website, it also offers an nodejs based express like api 
component to save the efforts spinning up another backend 
server (easier deployment). Styling will be done with tailwind 
because it’s ergonomic, consistent and fast. Deployment 
will be done with heroku because it’s just one nextjs server 
and free. MongoDB can be provisioned directly with the atlas 
cloud service because, it’s free. A dockerfile and 
docker-compose will be used to allow local demo. 

Demo link: https://prudential-interview.herokuapp.com/

To run locally, you need to first spin up database, then 
populate it, and then spin up the nextjs application

```
$ docker-compose up db
$ export DROP_MONGO=true 
$ export MONGO_DB_URI=mongodb://localhost:27019/prudential 
$ node admin/initializeMongo.js 
$ docker-compose up web
```

Then the app will be available at 0.0.0.0:3007

# Dark mode and mobile view supported!