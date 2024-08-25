export function logJSONData() {
    return fetch('https://api.frankfurter.app/currencies')
        .then(response => response.json())
        .then(jsonData => {
             // Assuming loaddropdown is a function that processes the data
            return jsonData;  // Return the data here
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}