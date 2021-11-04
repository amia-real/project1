

const formData = document.querySelector('form')
const commentBox = document.querySelector('.commentSection')
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', "March", 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

formData.addEventListener('submit', function(e){
    e.preventDefault()

    //grab values from the 3 input forms( probably make them required )
    const commentName = document.querySelector('#name')
    const commentEmail = document.querySelector('#email')
    const commentBody = document.querySelector('#message')

    if (commentName.value.trim() && commentBody.value.trim()) {
        const currentDate = new Date()
        console.log(currentDate.getDate());
        console.log(currentDate.getDay());
        console.log(currentDate.getMonth());
        console.log(currentDate.getFullYear());

        const lastDigit = currentDate.getDate().toString().slice(-1)
        console.log(lastDigit)
        let dateSuffix;
        if (lastDigit === '1') {
            dateSuffix = 'st'

        }else if( lastDigit === '2') {
            dateSuffix = 'nd'
        }else if (lastDigit === '3') {
            dateSuffix = 'rd'
        }else {
            dateSuffix = 'th'
        }
        const newDiv = document.createElement('div');
        newDiv.innerHTML =`     
                    <div class="commentContainer">
                        <div class="imgContainer">
                            <img src="assets/noAvatar.png" alt="Anonymous man no profile Picture">
                        </div>
                        <div class = 'textContainerComment'>           
                            <p>${days[currentDate.getDay()]} ${months[currentDate.getMonth()]} ${currentDate.getDate()}${dateSuffix}, ${currentDate.getFullYear()} by ${commentName.value}</p>
                            <p>${commentBody.value}</p>
                        </div>
                    </div>`

            commentBox.appendChild(newDiv);

            commentName.value = '';
            commentEmail.value = '';
            commentBody.value = '';
    } else {
        if(!commentName.value.trim()) {
            // commentName.value = '';
            // console.log(commentName.placeholder)
            // commentName.placeholder = 'Please Enter your Name!'

            alert('Please Enter your name!');
        }

        if (!commentBody.value.trim()) {
            alert ('Please Enter your comment!');
        }
    }

})


