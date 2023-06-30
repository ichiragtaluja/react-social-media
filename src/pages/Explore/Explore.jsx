import "./Explore.css";
import { Post } from "../../components/Post/Post";
import { useRef, useState, useEffect } from "react";

import React from "react";
import { usePosts } from "../../contexts/PostsProvider";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { Discover } from "../../components/Discover/Discover";
import { useAuth } from "../../contexts/AuthProvider";

import { InfiniteScrollLoader } from "../../components/Loader/InfiniteScrollLoader";

export const Explore = () => {
  const { allPosts, postLoading } = usePosts();
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);

  const [pageNum, setPageNum] = useState(1);
  const lastElement = useRef(null);

  const allPostsSortedByLatest = allPosts?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const totalPages = allPostsSortedByLatest.length / 1;
  const displayedPosts = allPostsSortedByLatest.slice(0, pageNum * 1);

  const handleObserver = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setLoading(true);
      setPageNum((prev) => prev + 1);
      setTimeout(() => setLoading(false), 5000);
    }
  };

  useEffect(() => {
    if (displayedPosts) {
      const observer = new IntersectionObserver(handleObserver);

      if (lastElement.current) {
        observer.observe(lastElement.current);
      }

      return () => {
        if (lastElement.current) {
          observer.unobserve(lastElement.current);
        }
      };
    }
  }, [displayedPosts]);

  return (
    <>
      {" "}
      {auth.isAuth && <Header />}
      <div className="app-container">
        {auth.isAuth && <Navbar />}

        {
          <React.Fragment>
            <main className="feed explore-page-container">
              {!postLoading &&
                displayedPosts?.map((post) => {
                  return <Post post={post} key={post?._id} />;
                })}

              {displayedPosts.length > 0 && pageNum !== totalPages && (
                <div className="ref" ref={lastElement} key="xyz"></div>
              )}
              {displayedPosts?.length === allPosts?.length &&
                allPosts.length > 0 && (
                  <div className="no-post-msg">You are all caught up!</div>
                )}

              {pageNum !== totalPages && loading && displayedPosts.length && (
                <InfiniteScrollLoader />
              )}
            </main>
          </React.Fragment>
        }

        {auth.isAuth && <Discover className="discover" />}
      </div>
    </>
  );
};
