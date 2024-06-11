// @/utils/lazy.js
const lazy = {
    mounted(el, binding) {
      const options = {
        rootMargin: '0px',
        threshold: 0.1,
      };
  
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgUrl = binding.value;
            el.src = imgUrl;
            observer.unobserve(el);
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersection, options);
      observer.observe(el);
    },
  };
  
  export default lazy;