# Sport Shoes (Client)

Sportshoes.com client application, built in React

## Dependencies

- Node.js
- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [yarn](https://classic.yarnpkg.com/en/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn cypress`

Runs the app with [Cypress](https://www.cypress.io/), the next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.

## Development notes

- I had to cut the first and second slide of the slideshow/carousel to make it flush at the bottom. An alternative would have been squeezing the height to make them flush, but it would have distorted the images.
- I was not able to retrieve the right Google Font from the .psd file provided. I have 'Krita' on my Linux computer, which is an open-source graphics editor kinda like Photoshop, but I'm not very familiar with it. As a result I've choosen Google Fonts that were a close match.
- I have applied a 'fade' effect to the slideshow. I think it's nicer than the classic sliding, but this should be discussed with the team/product owner.
- When running the application on localhost, on Google Chrome browser, the font size appears smaller compared to the Cypress test runner. When running on localhost on Mozilla Firefox, the font size appears the same as it is on Cypress.
- In the current state, the banners at the bottom of the view have a clickable link "READ MORE". I may have misunderstood the instructions, to make the whole banner clickable I can add a "onClick" event to them.
- I was not able to reproduce the slideshow indicator dots identically to the demo picture provided. I made them as similar as I could.
