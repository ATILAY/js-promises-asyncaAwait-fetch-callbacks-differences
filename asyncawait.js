const postsA = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPostA(){
    setTimeout(() => {
        let outputA = '';
        postsA.forEach((postA, index) => {
            outputA += `
                <li>${postA.title}</li>
            `; //temp literals for mixing js and html
        });
        document.body.innerHTML = outputA;
    }, 1000);
}//getP

function createPostA(postA){
    return  new Promise((resolve, reject)=>{

        setTimeout(()=>{
            postsA.push(postA);
            
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: smth went wrong!');
            }//else
        }, 2000);

    });


}//create



//Async Await
async function init(){

   await createPostA({title:'Post Three', body: 'This is post three'});
   
   getPostA();
}//init

init();

