const { gql, ApolloClient } = require('@apollo/client');
const { apolloClient } = require('./apollo');

async function createTicket(email, subject, description) {
  try {
    const response = await apolloClient.mutate({
      mutation: gql`
        mutation CreateSupportTicket(
          $email: String!
          $subject: String!
          $description: String!
        ) {
          createSupportTicket(
            ticketInput: {
              email: $email
              subject: $subject
              description: $description
            }
          ) {
            email
            subject
            description
            createdAt
          }
        }
      `,
      variables: {
        email,
        subject,
        description,
      },
    });

    const createdTicket = response.data.createSupportTicket;
    console.log('Created Ticket:', createdTicket);
    return createdTicket; // Optionally, return the created ticket
  } catch (error) {
    console.error('Error creating ticket:', error);
    throw new Error('Failed to create ticket'); // Optionally, handle the error
  }
}

module.exports = {
  createTicket,
};
