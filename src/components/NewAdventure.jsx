

function NewAdventure() {

    return (<div>
        <h1>New Adventure Plan</h1>

        <form>
            <label htmlFor="title">Plan Name:</label>
            <input id="title" type="text" placeholder="New Adventure Title" />
            <label htmlFor="stop">New Stop Title:</label>
            <input id="stop" type="text" placeholder="New Stop Name" />
            <label htmlFor="description">Stop Description:</label>
            <textarea name="" id="description" cols="30" rows="10"></textarea>
            <button>Create New Plan</button>
        </form>

    </div>)
}

export default NewAdventure