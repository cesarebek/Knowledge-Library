export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

export const popBooks = {
  hidden: {
    x: -150,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
    },
  },
  tap: {
    opacity: 0.5,
    transition: {
      duration: 0.4,
    },
  },
};

export const lineAnim = {
  hidden: {
    width: '0%',
  },
  show: {
    width: '100%',
    transition: {
      ease: 'easeIn',
      duration: 0.5,
    },
  },
};

export const closeTab = {
  hidden: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: 90,
    transition: {
      duration: 0.6,
    },
  },
};

export const socialAnim = {
  hidden: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};
