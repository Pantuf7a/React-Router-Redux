const initState = {
    posts: [
        {id: '1', title: 'Title 1', body: 'Ad laboris ut exercitation esse elit do veniam. Id laboris irure ea aute comprometido Lorem sint duis ad ipsum deserunt aliquip reprehenderit proident ad est consectetur. Adipisicing eu ad commodo excepteur ea. '},
        {id: '2', title: 'Title 2', body: 'Lorem sint duis ad ipsum deserunt aliquip reprehenderit proident ad est consectetur. Adipisicing eu ad commodo excepteur ea. Enim elit dolor excepteur irure ad ex sunt ad minim consectetur officia. Ea commodo dolor ipsum ullamco est irure deserunt commodo proident. In ea labore aliquip ipsum qui velit reprehenderit minim. Adipisicing aliquip adipisicing est occaecat consequat reprehenderit consectetur non qui. Tempor sit Lorem sunt deserunt.'},
        {id: '3', title: 'Title 3', body: 'Ad laboris ut exercitation esse elit do veniam. Id laboris irure ea aute commodo eu amet magna do esse eiusmod exercitation excepteur velit. Ut ea mollit cillum minim fugiat cupidatat dolore eiusmod aliqua. Dolor commodo fugiat labore ullamco esse exercitation excepteur ea duis magna do est. Velit est dolore eiusmod do incididunt dolor irure id. Ea fugiat et ad laborum voluptate magna incididunt mollit ullamco velit ad. Incididunt consectetur do sunt ea amet reprehenderit sit ullamco mollit eu est et dolor.'},
    ]
}
const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;
