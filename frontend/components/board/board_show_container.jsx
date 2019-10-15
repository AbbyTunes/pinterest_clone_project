import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, removeBoard } from '../../actions/board_actions';

const mapState = (state, ownProps) => {

	// const session = state.session;
	// const users = state.entities.users;
	// const currentUser = users[session.id];

	// frontend route
	// according to how you set up // :boardId 
	const boardId = ownProps.match.params.id;
	const board = state.entities.boards[boardId];

	let items;
	if (board) {
		items = board.itemIds.map((itemId) => {
			return state.entities.items[itemId]
		});
	}

	return { board, items }
}

const mapDispatch = (dispatch, ownProps) => {
	const boardId = ownProps.match.params.id; //.boardId;
	return {
		fetchBoard: () => dispatch(fetchBoard(boardId))
	}
}

export default connect(mapState, mapDispatch)(BoardShow);