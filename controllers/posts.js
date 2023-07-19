import Post from "../models/posts.js";
import User from "../models/User.js";
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstname: user.firstname,
      lastname: user.lastname,
      desc: description,
      location: user.location,
      userPicturePath: user.profilePicture,
      picturePath,
      likes: {},
      comments: [],
    });
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const id = req.params.id;
    const posts = await Post.find({ userId: id });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    const userId = req.body.userId;

    // if a userID is present in the likes map, then the user has already liked the post so we remove the like else we add the like
    if (!post.likes.has(userId)) {
      post.likes.set(userId, true);
    } else {
      post.likes.delete(userId);
    }
    const updatedPost = await post.save();
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
