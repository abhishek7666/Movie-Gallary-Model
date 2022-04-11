let cl = console.log;

const showModel = document.getElementById('showModel');
const backDrop = document.getElementById('backDrop');
const myModel = document.getElementById('myModel');
const addMovie = document.getElementById('addMovie');
const title = document.getElementById('title');
const imgUrl = document.getElementById('imgUrl');
const rating = document.getElementById('rating');
const info = document.getElementById('info');
const myCloseBtns = Array.from(document.querySelectorAll('.myClose'))
let movieArray = []

const showModelHandler = (e) => {
    // toggleShowClass(backDrop,'show')
    // toggleShowClass(myModel,'show')

    // backDrop.classList.toggle('show');
    // myModel.classList.toggle('show');

    toggleShowClass()
}
const onCloseHandler = (eve) =>{
    // toggleShowClass(backDrop,'show')
    // toggleShowClass(myModel,'show')
    
    // backDrop.classList.toggle('show');
    // myModel.classList.toggle('show');

    toggleShowClass()
}
// function toggleShowClass(ele, nameofClass){
//     ele.classList,toggle(nameofClass)
// }

const addMovieHandler = (eve) => {
    let movieObj = {
        title :title.value,
        imgUrl : imgUrl.value,
        rating : rating.value
    }
    movieArray.push(movieObj)
    let result = '';
    movieArray.forEach(obj=>{
        result +=`
             <div class="col-md-4">
				<div class="card">
					<div class="card-body">
						<h5>${obj.title}</h5>
						<img src="${obj.imgUrl}" alt="">
						<p>${obj.rating}/5</p>
					</div>
			    </div>
			</div>
        `
    })
    info.innerHTML=result
    title.value = '';
    imgUrl.value = '';
    rating.value = '';
    toggleShowClass()
}

function toggleShowClass(){
    backDrop.classList.toggle('show');
    myModel.classList.toggle('show');
}




showModel.addEventListener('click',showModelHandler)
addMovie.addEventListener('click',addMovieHandler)
myCloseBtns.forEach(btn=>{
    btn.addEventListener('click',onCloseHandler)
})
