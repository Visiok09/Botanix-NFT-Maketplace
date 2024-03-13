const { getAllTicketsAndSaveToFile } = require('./getAllTicket');

// Call the function
getAllTicketsAndSaveToFile()
  .then((allTickets) => {
    // Optionally, do something with the fetched tickets
    console.log('Fetched tickets:', allTickets);
  })
  .catch((error) => {
    // Handle any errors that occur during fetching or saving
    console.error('Error:', error);
  });
