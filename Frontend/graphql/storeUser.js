const { gql } = require('@apollo/client');
const { apolloClient } = require('./apollo');

async function storeUserPoint(address, points) {
  // address = '0xabE8185f04FCd369d863A8AfF79f65536128ea94';
  // points = 6;
  try {
    const response = await apolloClient.mutate({
      mutation: gql`
        mutation UpdateUserPoints($address: String!, $points: Int!) {
          updateUserPoints(address: $address, points: $points) {
            success
          }
        }
      `,
      variables: {
        address,
        points,
      },
    });

    // Check the response for success
    const success = response.data.updateUserPoints.success;
    if (success) {
      console.log('User points updated successfully');
    } else {
      console.error('Failed to update user points');
    }
  } catch (error) {
    console.error('Error updating user points:', error.message);
    throw new Error('Internal Server Error');
  }
}
module.exports = {
  storeUserPoint,
};
