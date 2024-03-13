const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    getUserPoints(address: String!): PointsResponse!
    getAllTickets: [Ticket!]!
  }

  type PointsResponse {
    points: Int!
  }

  type UpdatePointsResponse {
    success: Boolean!
  }

  type Ticket {
    email: String
    subject: String
    description: String
    createdAt: String
  }

  input TicketInput {
    email: String!
    subject: String!
    description: String!
  }

  type Mutation {
    createSupportTicket(ticketInput: TicketInput): Ticket!
    updateUserPoints(address: String!, points: Int!): UpdatePointsResponse!
  }
`;
