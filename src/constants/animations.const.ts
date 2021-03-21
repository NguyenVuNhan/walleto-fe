const animations = {
  opacity: {
    initial: {
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
  },
};

export default animations;
