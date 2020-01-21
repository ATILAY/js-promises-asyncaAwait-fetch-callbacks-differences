const postsP = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPostP(){
    setTimeout(() => {
        let outputP = '';
        postsP.forEach((postP, index) => {
            outputP += `
                <li>${postP.title}</li>
            `; //temp literals for mixing js and html
        });
        document.body.innerHTML = outputP;
    }, 1000);
}//getP

function createPostP(postP){
    return  new Promise((resolve, reject)=>{

        setTimeout(()=>{
            postsP.push(postP);
            
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: smth went wrong!');
            }//else
        }, 2000);

    });


}//create


createPostP({title: 'Post Three', body: 'This is post Three'})
    .then(getPostP);
    //.catch(err => console.log(err));


// //promise.all()  --> promise array passing an array inside as a params
// const promise1 =  Promise.resolve('hi');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000,  'Good'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json());
// Promise.all([promise1, promise2, promise3]).then( values => console.log(values));
