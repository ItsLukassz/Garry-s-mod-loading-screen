
window.onload = () => {

    const createNewTipButton = document.querySelector('.add-tip')
    const createNewTipInput = document.querySelector('.tip-description')

    createNewTipButton.addEventListener('click', () => {
        let tip = createNewTipInput.value
        createNewTip(tip)

    })
}




function createNewTip(tip) {

    // make a post request
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://127.0.0.1:5000/tips-and-tricks-create', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify({tip: tip}))

    xhr.onload = () => {

        if (xhr.status === 200) {
            console.log('Tip created')
        }

        else {
            console.log('Error creating tip')
        }
    }
}