import html from "../core.js";

function TodoItems() {
	return html`
		<li class="completed ">
			<div class="view">
				<input class="toggle" type="checkbox" checked>
				<label>Taste JavaScript</label>
				<button class="destroy"></button>
			</div>
			<input class="edit" value="Create a TodoMVC template">
		</li>
    `
}

export default TodoItems  