import React, { Component } from 'react';
import _ from 'lodash';
import { deleteMovie } from '../services/fakeMovieService';
import { getMovies } from '../services/moviesService';
import { getGenres } from '../services/genreService';
import { paginate } from '../utils/paginate';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import SearchBox from './searchBox';

class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        selectedGenre: null,
        sortColumn: { path: 'title', order: 'asc'}
    }

    async componentDidMount() {
        const { data } = await getGenres();
        const genres = [{ _id: "", name: "All Genres"},  ...data];
        const { data: movieData  } = await getMovies()
        this.setState({ movies: movieData, genres });
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre : genre,searchQuery: '', currentPage: 1});
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter( m => m._id !== movie._id);
        this.setState({movies});

        deleteMovie(movie._id);
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    handlePageChange = page => {
        this.setState({ currentPage : page });
    }

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 })
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    getPageDate = () => {
        const { 
            pageSize, 
            currentPage, 
            selectedGenre, 
            movies: allMovies,
            searchQuery, 
            sortColumn,
        } = this.state;

        let filtered = allMovies;
        if(searchQuery) {
            filtered = allMovies.filter(m => 
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        } else if(selectedGenre && selectedGenre._id) {
            filtered =  allMovies.filter(m => m.genre._id === selectedGenre._id) 
        }

        const sorted = _.orderBy(filtered, [sortColumn.path],[sortColumn.order]);
        const movies = paginate(sorted,currentPage, pageSize);
        return { totalCount: filtered.length, data: movies};
    }

    render() { 
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, sortColumn, searchQuery  } = this.state;
        if(count === 0) return <p>There are no movies.</p>
        const { totalCount, data: movies } = this.getPageDate();
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <ListGroup 
                            items={this.state.genres}
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col">
                        <p>Showing {totalCount} movies in database.</p>
                        <SearchBox value={searchQuery} onChange={this.handleSearch} />
                        <MoviesTable
                            movies={movies} 
                            sortColumn ={sortColumn}
                            onLike={this.handleLike} 
                            onDelete={this.handleDelete}
                            onSort={this.handleSort}
                        />
                        <Pagination 
                            itemsCount={totalCount} 
                            pageSize={pageSize} 
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Movies;