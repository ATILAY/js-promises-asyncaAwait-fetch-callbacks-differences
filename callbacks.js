const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `
                <li>${post.title}</li>
            `; //temp literals for mixing js and html
        });
        document.body.innerHTML = output;
    }, 1000);
}//getP

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();

    }, 2000);
}//create


//getPost();
//instead of upside , we pass it into a func as a callback func!
createPost({title:'Post Three', body:'This is post three'}, getPost);
