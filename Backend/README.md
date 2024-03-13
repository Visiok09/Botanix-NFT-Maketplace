# BettaBridge Backend

This is a part of BettaBridge project that demonstrates how to create a GraphQL server using Apollo Server with Express and MongoDB.

### Installation

1. Clone the repository:

   `git clone [repository_url]`

2. Navigate to the project directory:

`cd Backend`

3. Install dependencies:
   `npm install` or `yarn install`

### Set up MongoDB

- Create a MongoDB Atlas account (or use an existing MongoDB database).
- Obtain your MongoDB connection URI.
- Create a .env file in the root directory of the project and add your MongoDB connection URI:

Disclaimer: It is not recommended to use .env files in production environments. They should only be utilized during the development stage for managing sensitive information like project IDs, secret keys, and other credentials. It's crucial to employ secure and industry-standard methods for managing environment variables in production settings to prevent unauthorized access to sensitive data.

`touch .env`

Then open .env file and put uri:

`PRIVATE_KEY=mongodb+srv://your_username:your_password@your_cluster_url/your_database_name`

### Start the server

`npm start `

Note: The server will start running on `http://localhost:4001/graphql` copy the link and set it in `graphql/apollo.js` file in `Frontend` folder. You can access the GraphQL playground to test your queries and mutations. Also you can change to your port , open the `index.js` file on the line 29 you can find variable `port: your port`. Keep in mind that for production you need to install additional settings and configure the server.

## GraphQL Resolvers and Type Definitions

This module contains GraphQL resolvers and type definitions for managing user points and support tickets.

### Resolvers

#### Open the `graphql/reslovers.js` file to see how it works.

- Query Resolvers:
  `getUserPoints(address: String!)`: Retrieves the points associated with a user's address.
- Parameters:
  `address`: The address of the user whose points are to be retrieved.
- Returns:
  `PointsResponse`: An object containing the user's points.
  `getAllTickets`: Retrieves all support tickets.
- Returns:
  [Ticket]: An array of support tickets.
- Mutation Resolvers:
  `updateUserPoints(address: String!, points: Int!)`: Creates or updates the points associated with a user's address.
- Parameters:
  `address`: The address of the user whose points are to be updated.
  `points`: The new points value to be assigned to the user.
- Returns:
  `UpdatePointsResponse`: An object indicating the success of the operation.
  `createSupportTicket(ticketInput: TicketInput!)`: Creates a new support ticket.
- Parameters:
  `ticketInput`: An input object containing ticket details (email, subject, description).
- Returns:
  `Ticket`: The newly created support ticket.

### Type Definitions

#### Open the `graphql/typeDefs.js` file to see how it works.

- Queries:
  `getUserPoints(address: String!): PointsResponse!`: Retrieves the points associated with a user's address.
  `getAllTickets: [Ticket!]!`: Retrieves all support tickets.
- Types:
  `PointsResponse`: Object representing the user's points.
- Fields:
  `points: Int`- The number of points associated with the user.
  `UpdatePointsResponse: Object` representing the response after updating user points.
- Fields:
  `success: Boolean` - Indicates whether the operation was successful.
  `Ticket: Object` representing a support ticket.
- Fields:
  `email: String` - The email associated with the support ticket.
  `subject: String` - The subject of the support ticket.
  `description: String` - The description of the support ticket.
  `createdAt: String` - The timestamp indicating when the ticket was created.
- Input Types:
  `TicketInput: Input` object containing ticket details for creating a support ticket.
- Fields:
  `email: String!` - The email associated with the support ticket.
  `subject: String!` - The subject of the support ticket.
  `description: String!` - The description of the support ticket.
