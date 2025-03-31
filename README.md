# Just Eact Tech Test - Mya Olaye

![Preview](./src/assets/Just%20Eat%20Tech%20Task%20-%20Preview.png)

## Viewing my Solution:
1. Clone the repo
2. Run `npm install` to install the dependencies
3. Run  `node src/server.js` to start the proxy server 
4. Run `npm run dev` in a new terminal to start the development server and view the solution locally in your browser
5. You can run `npm test` to run the tests and verify they pass

## Assumptions:

### Cuisines Display:
It’s acceptable to include categories such as ‘Deals’, ‘Collect Stamps’, and ‘Freebies’ under the cuisines section, as they are returned as part of the cuisines array in the API response. However, if we want to exclusively display specific cuisines like ‘Indian’, ‘Chinese’, or ‘Italian’, these categories could be filtered out.

### Postcode Validation:
The regex for validating UK postcodes, provided by the UK government ([UK Postcode Validation](https://assets.publishing.service.gov.uk/media/5a7f3ff4ed915d74e33f5438/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf)), is used for validating inputted postcodes. To ensure its reliability, I created unit tests that verify various postcodes (both valid and invalid) to confirm the regex works as expected.


## Proposed Improvements:

### Cuisine Filtering:
The restaurant list could be filtered by specific cuisines. By leveraging the `cuisines` object in the API response, we can dynamically render a list of available cuisines based on the selected postcode. This would allow users to filter the restaurant list by selecting one or more preferred cuisines.

### Enhanced Sorting:
Add further sorting functionality, such as by distance, price and availability (show restaurants that are open first) to help users more easily find restaurants according to their preference. 

### Deals Visibility:
Restaurants offering deals could be highlighted with an eye-catching UI, such as displaying a colorful tag or banner. This would draw attention to the restaurants offering promotions. Additionally, a filter could be implemented that lets users filter restaurants by those offering deals, improving the user experience for deal-seekers.

### More Detailed Restaurant Info:
Add the ability to select a restaurant and view further details such as open and closing times, collection details, eta etc. 
