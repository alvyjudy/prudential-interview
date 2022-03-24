# Interview

# Architecture Design Question


# Programming question (Topic 2 - Jianshu copycat)

## Architecture

The site will be built with nextjs because it provides built in ssr for site performance and seo, with out of the box page based routing and dynamic routes, which is ideal for blog like website, it also offers an nodejs based express like api component to save the efforts spinning up another backend server (easier deployment). Styling will be done with tailwind because it’s ergonomic, consistent and fast. Deployment will be done with heroku because it’s just one nextjs server and free. MongoDB can be provisioned directly with the atlas cloud service because, it’s free. A dockerfile and docker-compose will be used to allow local demo. 

Demo link:
Local: docker-compose up
Localhost:3007

Structure
Nextjs basic scaffold
Admin: this contains the action for databases, such as generate test data, wipe out everything, deployment, etc