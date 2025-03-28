import React, { useState } from "react";
import Axios from "axios";
import { IoCloseCircleOutline } from "react-icons/io5";
import Overlay from "../../components/WorkDemo-Components/Overlay";
import { AnimatePresence, motion } from "framer-motion";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
function ToText(node) {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}

function Blog() {
  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mirosh-kavinda";
 
  const initialState = {
    profile: {
      ptitle: "",
      name: "",
      avtar: "",
      profileurl: "",
    },
    item: [],
    isLoading: true, // Use isLoading instead of isloading
    error: null,
  };

  const [state, setState] = useState(initialState);

  Axios.get(mediumURL)
  .then((response) => {
    const avatar = response.data.feed.image;
    const profileLink = response.data.feed.link;
    const posts = response.data.items;
    const title = response.data.feed.title;

    posts.forEach((post) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.description, "text/html");
      const imgTags = doc.getElementsByTagName('img');
      const imageUrl = imgTags.length > 0 ? imgTags[0].getAttribute('src') : '';

      // Adding imageUrl to each post object
      post.imageUrl = imageUrl;
    });

    setState(() => ({
      profile: {
        ptitle: title,
        profileurl: profileLink,
        avtar: avatar,
      },
      item: posts,
      isLoading: false,
    }));
  })
  .catch((error) => {
    console.error(error);
    setState(() => ({
      error: error,
      isLoading: false,
    }));
  });

  const [selectedPost, setSelectedPost] = useState(null);
  const [open, setOpen] = useState(false);

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: {
      opacity: 0,
    },
  };

  const imageVariants = {
    open: {
      opacity: 1,
      y: "0vh",
    },
    closed: {
      opacity: 0,
      y: "-10vh",
    },
  };

  const modalInfoVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
    closed: {
      opacity: 0,
    },
  };

  const modalRowVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "10%",
    },
  };


  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="d-flex justify-content-around row justify-center align-center items-center">
          {state.isLoading ? (
            <Spinner />
          ) : (
            state.item.map((post, index) => {
              return (
                <>
                  <motion.div
                    className="listing"
                    onClick={() =>{
                      setSelectedPost(post);
                      setOpen(true)}
                    }
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="listing__content">
                      <div className="listing__image-container">
         
                        <img
                          className="listing__image"
                          alt={post.title}
                          src={post.imageUrl} // Assuming 'thumbnail' property exists in 'post' object
                        />
                      </div>
                      <div className="listing__details bg-dark">
                        <div className="listing__row">
                          <span className=" text-white">{post.title}</span>
                        </div>
                        <div className="listing__row">
                          <span className="listing__address">{`${ToText(
                              post.description.substring(0, 300))}...`}</span> 
                        </div>
              
                      </div>
                    </div>
                  </motion.div>
                  <AnimatePresence>
                    {open && (
                      <Overlay close={() => {
                         setOpen(false);
                         setSelectedPost(null);
                      }}>
                    
                          <motion.div
                            className="modal bg-dark "
                            variants={modalVariants}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <motion.img
                              className="modal__image"
                              alt="real estate mansion"
                              src={selectedPost.imageUrl}
                              variants={imageVariants}
                            ></motion.img>
                            <motion.div className="modal__info bg-dark" variants={modalInfoVariants}>
                             
                                <span className="modal__price">{selectedPost.title}</span>
                              
                             
                              <motion.div className="modal__row" variants={modalRowVariants}>
                                <span className="modal__address">{selectedPost.index}</span>
                              </motion.div>

                              <motion.div
                                className="modal__description-wrapper"
                                variants={modalRowVariants}
                              >
                                <p className="modal__description">{`${ToText(
                              selectedPost.description.substring(0, 600))}...`}</p>
                              </motion.div>

                              <motion.div className="modal__row" variants={modalRowVariants}>
                                  <Link
                                    to= {selectedPost.link}
                            
                                    className=" d-flex justify-content-center p-2 button nav-link"
                                    style={{
                                      border: " solid white",
                                      padding: "1px",
                                      textDecoration: "none",
                                      color: "white",
                                      borderRadius: "20%",
                                      cursor: "pointer",
                                    }}
                            >
                                  Read More
                                  </Link>
                                  
                                </motion.div>
                              <motion.button
                                  className="modal__close-wrapper"
                                  whileHover={{ scale: 1.2 }}
                                  onClick={() => setOpen(false)}
                                >
                                  <IoCloseCircleOutline className="modal__close-icon" />
                                </motion.button>
                            </motion.div>
                          </motion.div>
                    
                        </Overlay>
                      )}
                    </AnimatePresence>
                  </>
                );
              })
            )}
          </div>
          <br/>
      <br/>
      <br/>
        </div>
      </>
    );
  }

export default Blog;
