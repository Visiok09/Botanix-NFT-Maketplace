const UserPoints = require('../models/Points');
const SupportTicket = require('../models/Ticket');

module.exports = {
  Query: {
    //Get userPoints
    getUserPoints: async (_, { address }) => {
      console.log('user address:', address);
      try {
        const user = await UserPoints.findOne({ address });

        return user ? { points: user.points } : { points: 0 };
      } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
      }
    },

    //Get All Tickets
    getAllTickets: async () => {
      try {
        const tickets = await SupportTicket.find();
        return tickets;
      } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
      }
    },
  },

  Mutation: {
    //Create or update user points
    updateUserPoints: async (_, { address, points }) => {
      console.log(points, address);
      try {
        let user = await UserPoints.findOne({ address });

        if (!user) {
          user = new UserPoints({ address });
        }

        user.points = points;
        await user.save();

        return { success: true };
      } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
      }
    },

    // Create a support ticket
    createSupportTicket: async (_, { ticketInput }) => {
      try {
        const { email, subject, description } = ticketInput;

        const existingTicket = await SupportTicket.findOne({ email });
        if (existingTicket) {
          throw new Error('Email already exists');
        }

        const newTicket = new SupportTicket({
          email,
          subject,
          description,
        });
        const savedTicket = await newTicket.save();
        return savedTicket;
      } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
      }
    },
  },
};
