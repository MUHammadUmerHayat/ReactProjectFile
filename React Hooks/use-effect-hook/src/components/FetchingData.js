import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function FetchingData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [id, setId] = useState(0);

  useEffect(() => {
    getPosts();
    return () => {
      console.log("Comp unmounted");
    };
  }, []);

  useEffect(() => {
    if (id !== 0) {
      fetchPost(id);
    }
  }, [id]);
  const getPosts = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      setLoading(true);
      const response = await Axios.get(url);
      setLoading(false);
      setPosts(response.data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const fetchPost = async id => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await Axios.get(url);
    const newPosts = [];
    newPosts.push(response.data);
    setPosts(newPosts);
  };
  if (!loading) {
    if (error) {
      return <h1>{error}</h1>;
    } else {
      return (
        <div>
          <ul>
            {posts.map(post => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ul>
          <input
            type="number"
            onChange={e => {
              setId(e.target.value);
            }}
          />
        </div>
      );
    }
  } else {
    return <h1>Loading....</h1>;
  }
}
