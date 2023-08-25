# Welcome to the HYVV app

## Getting Started

### Setup and Installation

#### Installing packages and dependencies

Assuming you are already in the hyvv-client repo, run

`yarn install`

this will install all packages and types that you will need for the project

#### Setting up .env and .env.local files

You will need to add 2 files to your repo. `.env` and `env.local` files.
Listed below are the variable names needed for each. Please contact a senior dev for values

###### .env

```#.env
DATABASE_URL=
AUTH0_HOOK_SECRET=
APP_AWS_ACCESS_KEY=
APP_AWS_SECRET_KEY=
APP_AWS_REGION=
AWS_S3_BUCKET_NAME=
NEXT_PUBLIC_AWS_S3_BUCKET_NAME=
```

###### .env.local

```#.env.local
AUTH0_SECRET=
AUTH0_BASE_URL=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
```

### Setting up database locally

Our project uses a postgres database. To run database locally, please ensure you have postgres installed and running on your machine. https://www.postgresql.org/download/
If you need assistance with installation and setup of postgres, please contact a senior dev.

Once you have confirmed that your postgres installation is running, you will need to enter a few commands to set up tables from the schema in our code.

Again, assuming you are in the hyvv-client repo, you will need to run the following command
`npx prisma db push`
This will create all the necessary tables locally for you.

### Auth0

Running Auth0 locally may cause some issues. Sometimes it is necessary to run
`ngrok http 3000`
this will setup a server port that allows the auth0 hooks to access the local server. You will also need to update the route in the hooks thermselves.
TODO: This will beed to be updated once we have dev deployed to hosted instance

### Running the app

To run the app locally, form the /hyvv-client repo, run the following
`yarn dev`

To run the app with a debugger for the node.js server, run
`yarn debug`

A list of additional commande can be found in the `package.json` file

#### Branching and Pull Requests and some other thoughts

#### Creating a new branch

Feel free to create however many branches you need. It is recommended to start by pulling the latest `main` branch and branching from there
`git checkout -b "feature/branch-name-here"` is an example of the git command to create and checkout a branch (in case you need a refresher ;) )

### Commiting and Pushing

We do have some git hooks that run before committing and pushing your branches. (we use husky for our git hooks https://typicode.github.io/husky/#/)
Before committing, the only check that runs is a linter. This helps us ensure that code standards are kept as consistent as possible

Before pushing your branch, our git hook runs a production build to helpm us catch any missed errors and ensures that the next person to checkout your branch has a running bit of code. This also helps us avoid unintentionally pushing any bugs to production

### Merging branch to Main / Pull Request info

There are a few checks that run via Vercel before being allowed to merge your code into the `main` branch.
It is also required that at least 1 other dev approves every pull request before you are able to merge your commit.

### Some coding principals

Here are some coding principals that we would like you to use and consider while writing your code

- DRY (Don't Repeat Yourself): If you find that you are repeating code, it is likely that you can create a function/component/util that can handle that repetition for you. To keep code readable and concise, we ask that you consider this principal whenever you find yourself repeating code.
- KIS (Keep is Simple): Sometimes complex solutions are the best, but if nobody else can figure it out after you left, the complexity loses its effectiveness if it takes others hours to figure out what is going on. When possible, keep things simple and easy to follow
- Comments: Please add comments to your code whenever you think would be helpful. Say what logic is happening, add a link to a reference doc, link to a pull request or Jira story. When in doubt leave a comment.

This is a living document so please feel free to put up a PR with any additions/fixes/updates that you encounter along the way!
Happy coding!
