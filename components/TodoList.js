import html from "../core.js";
import { connect } from '../store.js'
import TodoItems from './TodoItems.js'

function TodoList() {
    return html`
	    <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
				${TodoItems()}
				${TodoItems()}
				${TodoItems()}
				${TodoItems()}
				</ul>
		</section>
    `
}

export default connect()(TodoList)  