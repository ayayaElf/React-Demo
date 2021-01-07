// 列表 & key 示例
function Blog(props) {
    const sidebar = (
        <ul>
            {props.post.map(post => 
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )

    const content = props.post.map(post => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )

    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    )
}

function Test (props) {
    const numbers = props.numbers;
    const post = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ]
    const listItem = numbers.map(number => 
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <div>
            <ul>
                {listItem}
            </ul>
            <Blog post={post}/>
        </div>
    )
}

export default Test;