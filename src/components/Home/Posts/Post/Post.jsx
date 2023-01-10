import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Post.scss";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
import { HeartOutlined, HeartFilled, DeleteOutlined } from "@ant-design/icons";
import { FaRegComment } from "react-icons/fa";
import { addLike, deletePost, getAll, removeLike, reset } from "../../../../features/posts/postsSlice";

const Post = ({posts}) => {
  
  const dispatch = useDispatch();

  const handleLikeClick = (_id) => {
  
    dispatch(addLike(_id));
    
  };
  const handleUnlikeClick = (_id) =>{
    dispatch(removeLike(_id));
  }
  
  const deletePostUser = (_id) =>{
    dispatch(deletePost(_id));
  }
  const post = posts?.map((post) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const findLike = post.likes.find((user_id)=>user_id ===user.user._id)
    console.log(post.postedBy)
    const isAuthor = (post?.postedBy===user.user._id)

    console.log("FIND LIKE", findLike);
    return (
      <Card
        style={{ margin: "20px 20px", textDecoration: "none" }}
        key={post._id}
      >
        <Card.Body>
          <Link
            to={"/post/" + post._id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Title>{post.description}</Card.Title>
          </Link>
          <Card.Body>
            <Card.Subtitle>{post.track.title}</Card.Subtitle>
            <Card.Subtitle>{post.track.artist}</Card.Subtitle>
            <Image src={post.track.albumUrl} />
          </Card.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "30%",
            }}
          >
            <p>{post?.likes?.length}</p>
            {findLike && 
              <HeartFilled 
              style={{ marginRight: "10px" }}
              onClick={() => handleUnlikeClick(post._id)} />
            }
            {!findLike && 
              <HeartOutlined
                style={{ marginRight: "10px" }}
                onClick={() => handleLikeClick(post._id)}
              />
            }
            <FaRegComment />
            {isAuthor && 
              <DeleteOutlined
                // style={{ marginRight: "10px" }}
                onClick={() => deletePostUser(post._id)}
              />
            }
          </div>
        </Card.Body>
      </Card>
    );
  });
  return <div>{post}</div>;
};

export default Post;
