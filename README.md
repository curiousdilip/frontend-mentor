# Frontend Mentor Projects monorepo ☜(ﾟヮﾟ☜)

This is the monorepo of Dilip's Frontend Mentor projects. **_[Here is the url to the dashboard](./site/index.html)_**

| Packages 📦                                                                                                                                   | Tooling 🛠️                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [Results summary component](./results-summary-component/)                             | ![html5] ![css3] |


## Install

```shell
$ git clone git@github.com:aadv1k/frontend-projects.git
$ npm install # install deps
$ npm run build # run the build command
```

now you can simply load up the `./site/` in a browser.

## Scripts

- [`npm run build`](./scripts/deploy.sh): copies all the packages to the `./site/` directory and renames them appropriately
- [`npm run femfetch`](./scripts/femfetch.sh): a utility script to fetch challenge files from [frontendmentor.io](https://frontendmentor.io)
- `npm run lint`: run `eslint .`
- `npm run lint:fix`: run `eslint . --fix`
- `npm run test:ws`: run tests in packages where they are present
- `npm run format`: format using prettier

## Structure

- `./packages`: Directory with all the primary packages of the project
  - `./packages/frontendmentor/`: Front-end challenges from [frontendmentor.io](https://frontendmentor.io)
  - `./packages/uidesigndaily/`: Random design to code challenges from [uidesigndaily](https://uidesigndaily.com/)
- `./config`: configuration scripts for dev tools - eslint, webpack, prettier
- `./scripts/`: utility shell scripts to organize, clean and fetch files in the project
- `./site/`: The static site for the main dashboard

## Architecture

This monorepo is managed using [npm
workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces), I chose to use
a monorepo for primarily one reason - Organization. I liked the semantics of
having everything in one place, the standard `config` utilities and a single
domain are really good to have and manage. Alongside this, under this single
monorepo, I can test, my code, and setup a CI pipelines. The site is deployed
on netlify via the `npm run build` command This command makes it so that the
`./site` folder can be dropped onto any server as a static site.

_note: currently there are no inner-deps_

[jest]: https://img.shields.io/badge/-Jest-282c34?logo=jest&logoColor=C21325&style=classic
[react]: https://img.shields.io/badge/-React-282c34?logo=React&logoColor=61dafb&style=classic
[cssmodules]: https://img.shields.io/badge/-CSS%20Modules-282c34?logo=cssmodules&logoColor=61dafb&style=classic
[tailwindcss]: https://img.shields.io/badge/-Tailwindcss-282c34?logo=tailwind-css&logocolor=white&style=classic
[materialui]: https://img.shields.io/badge/-MaterialUi-282c34?logo=MUI&logocolor=007FFF&style=classic
[sass]: https://img.shields.io/badge/-Sass-282c34?logo=sass&logocolor=white&style=classic
[webpack]: https://img.shields.io/badge/-Webpack-282c34?logo=webpack&logocolor=8DD6F9&style=classic
[parcel]: https://img.shields.io/badge/-📦%20Parcel-282c34?logo=parcel&logocolor=white&style=classic
[styledcomponents]: https://img.shields.io/badge/-💅%20Styled%20Components-282c34?&style=classic
[gulp]: https://img.shields.io/badge/-Gulp-282c34?logo=gulp&logocolor=CF4647&style=classic
[postcss]: https://img.shields.io/badge/-PostCSS-282c34?logo=postCSS&logocolor=DD3A0A&style=classic
[openprops]: https://img.shields.io/badge/-🅿%20OpenProps-282c34?logo=&logocolor=white&style=classic
[windicss]: https://img.shields.io/badge/-WindiCSS-282c34?logo=windicss&logocolor=48B0F1&style=classic
[javascript]: https://img.shields.io/badge/-JavaScript-282c34?logo=JavaScript&logocolor=F7DF1E&style=classic
[css]: https://img.shields.io/badge/-CSS3-282c34?logo=CSS3&logocolor=1572B6&style=classic
[html]: https://img.shields.io/badge/-HTML5-282c34?logo=HTML5&logocolor=E34F26&style=classic