import styles from  './InstagramPost.module.css';

const InstagramGrid = () => {
  const posts = [
    { id: 1, imageUrl: 'post1.jpg', caption: 'Caption for Post 1' },
    { id: 2, imageUrl: 'post2.jpg', caption: 'Caption for Post 2' },
    { id: 3, imageUrl: 'post3.jpg', caption: 'Caption for Post 3' },
    { id: 4, imageUrl: 'post4.jpg', caption: 'Caption for Post 4' },
    { id: 5, imageUrl: 'post5.jpg', caption: 'Caption for Post 5' },
    { id: 6, imageUrl: 'post6.jpg', caption: 'Caption for Post 6' },
  ];

  return (
    <div className={styles.instagramgrid}>
      <div className={styles.column1}>
        {posts.slice(0, 1).map((post) => (
          <div key={post.id} className={styles.postitem}>
            <img src={post.imageUrl} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
      <div className={styles.column2}>
        {posts.slice(1, 6).map((post) => (
          <div key={post.id} className={styles.postitem}>
            <img src={post.imageUrl} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramGrid;