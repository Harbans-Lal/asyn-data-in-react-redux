import React, { useEffect } from "react";
import "../../src/App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../reducer/action/postAction";

export const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsAction());
  }, [dispatch]);

  const { loading, error, posts } = useSelector((data) => data);

  return (
    <>
      <div className="postData">
        <h1>Post Data {posts.length}</h1>
      </div>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        posts.map((item) => {
          return (
            <div key={item.id} className="post">
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          );
        })
      )}
    </>
  );
};
