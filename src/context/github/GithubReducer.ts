import type { GithubUser } from './GithubContext'

// State type
export interface GithubState {
  users: GithubUser[]
  loading: boolean
}

// Action type
type GithubAction =
  | { type: 'GET_USERS'; payload: GithubUser[] }
  | { type: 'SET_LOADING' }


const githubReducer = (state: GithubState, action: GithubAction): GithubState => {
    switch(action.type){
        case 'GET_USERS': 
        return {
            ...state,
            users: action.payload,
            loading: false,
        }
        default:
            return state
    }
}

export default githubReducer