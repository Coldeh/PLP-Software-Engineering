document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('article');
  
    articles.forEach(article => {
      article.addEventListener('mouseenter', () => {
        article.style.backgroundColor = '#f0f0f0';
        article.style.transform = 'scale(1.05)';
        article.style.transition = 'all 0.3s';
      });
  
      article.addEventListener('mouseleave', () => {
        article.style.backgroundColor = 'transparent';
        article.style.transform = 'scale(1)';
      });
    });
  });
  