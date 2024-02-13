function FavoritePostsContainer({ blogData }) {
    return (
        <div>
            {blogData.map((post) => {
                if (post.favorites) {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <img src={post.image} alt={post.title} />
                            <p>{post.description}</p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default FavoritePostsContainer;