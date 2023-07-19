import User from "../models/User";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstname, lastname, location, occupation, profilePicture }) => {
        return {
          _id,
          firstname,
          lastname,
          location,
          occupation,
          profilePicture,
        };
      }
    );

    return res.status(200).json(formattedFriends);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId); // remove friend
      friend.friends = friend.friends.filter((id) => id !== id); // remove user
    } else {
      user.friends.push(friendId); // add friend
      friend.friends.push(id); // add user
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstname, lastname, location, occupation, profilePicture }) => {
        return {
          _id,
          firstname,
          lastname,
          location,
          occupation,
          profilePicture,
        };
      }
    );
    return res.status(200).json(formattedFriends);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
