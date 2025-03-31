# Just Eat Tech Test - Mya Olaye

![Preview](./src/assets/Just%20Eat%20Tech%20Task%20-%20Preview.png)

## Viewing my Solution:
1. Clone the repo
2. Run `npm install` to install the dependencies
3. Run `node src/server.js` to start the proxy server 
4. Run `npm run dev` in a new terminal to start the development server and view the solution locally in your browser
5. Run `npm test` to run the tests and verify they pass

## Initial Plan for the App:
Below is the rough wireframe and plan for the app and state structure I made before writing any code.

![Just Eat Tech Challenge Plan](src/assets/Just%20Eat%20Tech%20Challenge%20-%20Plan.jpg)

In the final product, I also added an 'order by rating' feature to demonstrate how the returned restaurant list could be sorted at the user's request.

## Assumptions:

### 1. Cuisines Display:
It’s acceptable to include categories such as ‘Deals’, ‘Collect Stamps’, and ‘Freebies’ under the cuisines section, as they are returned as part of the cuisines array in the API response. However, if we want to exclusively display cuisines like ‘Indian’, ‘Chinese’, or ‘Italian’, these categories could be filtered out.

### 2. Postcode Validation:
The regex for validating UK postcodes, provided by the UK government ([UK Postcode Validation](https://assets.publishing.service.gov.uk/media/5a7f3ff4ed915d74e33f5438/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf)), is used for validating inputted postcodes. To ensure its reliability, I created unit tests that verify various postcodes (both valid and invalid) to confirm the regex works as expected.

## Potential Improvements:

### 1. Cuisine Filtering:
The restaurant list could be filtered by specific cuisines. By leveraging the `cuisines` object in the API response, we can dynamically render a list of available cuisines based on the selected postcode. This would allow users to filter the restaurant list by selecting one or more preferred cuisines.

### 2. Enhanced Sorting:
Add further sorting functionality, such as by distance, price, and availability (show restaurants that are open first) to help users more easily find restaurants according to their preferences.

### 3. Deals Visibility:
Restaurants offering deals could be highlighted with an eye-catching UI, such as displaying a colorful tag or banner. This would draw attention to the restaurants offering promotions. Additionally, a filter could be implemented that lets users filter restaurants by those offering deals, improving the user experience for deal-seekers.

### 4. More Detailed Restaurant Info:
Add the ability to select a restaurant and view further details such as open and closing times, collection details, ETA, etc.

## Testing:
I have written **unit tests** for the `isValidPostcode` function to ensure its correctness, covering a range of valid and invalid postcode inputs. Additionally, I have written unit tests for the relevant components to ensure they behave as expected under different conditions.

I have also written **integration tests** to verify that the components render correctly and interact with each other as intended in various scenarios.
