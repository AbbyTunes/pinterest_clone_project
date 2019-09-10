import { connect } from 'react-redux';
import PinShow from './pin_show';
import { fetchPin } from '../../actions/pin_actions';

const mapState = (state, ownProps) => {
	const pinId = ownProps.match.params.pinId;
	return { pin: state.entities.pins[pinId] }
}

const mapDispatch = (dispatch, ownProps) => {
	const pinId = ownProps.match.params.pinId;
	return { fetchPin: () => dispatch(fetchPin(pinId))}
}

export default connect(mapState, mapDispatch)(PinShow);