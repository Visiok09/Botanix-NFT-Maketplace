const fs = require('fs');
const { gql, ApolloClient } = require('@apollo/client');
const { apolloClient } = require('./apollo');

async function getAllTicketsAndSaveToFile() {
  try {
    const response = await apolloClient.query({
      query: gql`
        query GetAllTickets {
          getAllTickets {
            email
            subject
            description
            createdAt
          }
        }
      `,
    });

    const allTickets = response.data.getAllTickets;
    console.log('All Tickets:', allTickets);

    // Write fetched tickets to a text file
    writeTicketsToFile(allTickets);

    return allTickets; // Optionally, return the fetched tickets
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw new Error('Failed to fetch tickets'); // Optionally, handle the error
  }
}

// Function to write tickets to a file
function writeTicketsToFile(tickets) {
  try {
    fs.writeFileSync('tickets.txt', JSON.stringify(tickets, null, 2));
    console.log('Tickets written to file.');
  } catch (err) {
    console.error('Error writing tickets to file:', err);
  }
}

module.exports = {
  getAllTicketsAndSaveToFile,
};
