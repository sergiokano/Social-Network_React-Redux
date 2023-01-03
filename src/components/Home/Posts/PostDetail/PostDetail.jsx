import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../../../features/posts/postsSlice";

const PostDetail = () => {
  const { _id } = useParams();

  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getById(_id));
  }, []);
  return (
    <div key={post._id}>
      <h1>PostDetail</h1>
      <p>{post.description}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
