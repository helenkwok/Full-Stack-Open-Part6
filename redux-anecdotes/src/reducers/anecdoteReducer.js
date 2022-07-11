import anecdoteService from '../services/anecdotes'
import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const changedAnecdote = action.payload
      return state.map(anecdote =>
        anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote
      )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeNotes = () => {
  return async dispatch => {
    const ancedotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(ancedotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)

    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVote = object => {
  return async dispatch => {
    const updateObject = {
      ...object, votes: object.votes + 1
    }

    const updatedAnecdote = await anecdoteService.addVote(updateObject)

    dispatch(voteAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer