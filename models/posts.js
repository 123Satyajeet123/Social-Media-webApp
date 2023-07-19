import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            max: 500,
        },
        img: {
            type: String,
        },
        location: {
            type: String,
        },
        picturePath: {
            type: String,
        },
        userPicturePath: {
            type: String,
        },
        likes: {
            type: Map,
            of : Boolean,
        },
        comments: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;