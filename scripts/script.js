$('.create-button').click(createTodos)
$(document).keypress(createTodos)

function createTodos(e) {
    if (e.key === "Enter" || e.which === 1) {

        const input = $('.text-input')
        const inputVal = input.val().trim()
        if (inputVal) {
            const el = `<div><p>${inputVal}</p>
            <button class="delete">&#10006;</button></div>`
            const divTodos = $('.todos')
            $(el).appendTo(divTodos)
            $('.delete').click(deleteTodos)
            input.val(null)
        }
    }
}



function deleteTodos(){
    this.parentNode.remove()
}
