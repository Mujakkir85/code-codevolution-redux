const redux = require('redux')
const reduxLogger = require('redux-logger') // for middleware

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE = "BUY_CAKE";
const BUY_DRINKS = "BUY_DRINKS";


function byCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function byDrinks() {
    return {
        type: BUY_DRINKS,
        info: 'Second action'
    }
}

// initail state

// const initialState = {
//     numberOfCake: 10,
//     numberOfDrinks: 20
// }

const initialCakeState = {
    numberOfCake: 10
}

const initialDrinksState = {
    numberOfDrinks: 20
}

// const reducer = (state = initialState, action) => {

//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numberOfCake: state.numberOfCake - 1
//         }

//         case BUY_DRINKS: return {
//             ...state,
//             numberOfDrinks: state.numberOfDrinks - 2
//         }

//         default: return state;
//     }

// }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCake: state.numberOfCake - 1
        }
        default: return state;
    }
}

const drinksReducer = (state = initialDrinksState, action) => {
    switch (action.type) {
        case BUY_DRINKS: return {
            ...state,
            numberOfDrinks: state.numberOfDrinks - 2
        }
        default: return state;
    }
}

const rootreducer = combineReducers({
    cake: cakeReducer,
    drinks: drinksReducer
})
const store = createStore(rootreducer, applyMiddleware(logger));
//const store = createStore(reducer);
console.log('Initial state', store.getState())
//const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
const unsubscribe = store.subscribe(() => { })
store.dispatch(byCake());
store.dispatch(byCake());
store.dispatch(byCake());
store.dispatch(byDrinks());
store.dispatch(byDrinks());
unsubscribe();