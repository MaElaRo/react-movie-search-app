import React from 'react'
import { Searchbar } from './components/Searchbar'
import { MoviesList } from './components/MoviesList'
import { SearchProvider } from './hooks/useSearch'

function App() {
	return (
		<SearchProvider>
			<div className="heading-wrapper">
				<div className="container">
					<h1>bonjour c'est moi le movie search</h1>
				</div>
			</div>
			<div className="searchbar-wrapper">
				<div className="container">
					<Searchbar />
				</div>
			</div>
			<div className="container">
				<MoviesList />
			</div>
		</SearchProvider>
	)
}

export default App