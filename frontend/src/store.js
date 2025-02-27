import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as UserReducer from './reducers/userReducer';
import * as AppReducer from './reducers/appReducer';
import * as RoomReducer from './reducers/roomReducer';
import * as SubjectReducer from './reducers/subjectReducer';

const initialState = {};
const middleware = [thunk];

const reducer = combineReducers({
	signUp: UserReducer.signUpReducer,
	singIn: UserReducer.signInReducer,
	signOut: UserReducer.signOutReducer,
	googleSignIn: UserReducer.googleOauth,
	status: UserReducer.statusReducer,
	appDetails: AppReducer.app,
	createRoom: RoomReducer.createRoomReducer,
	joinRoom: RoomReducer.joinRoomReducer,
	userDetails: UserReducer.userDetailsReducer,
	roomSubjects: SubjectReducer.roomSubjectsReducer,
	createSubject: SubjectReducer.createSubjectReducer 
});

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
