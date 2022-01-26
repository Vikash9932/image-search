import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = {images: []}

    getSearchedItem = async (term) => {
        const response  = await unsplash.get("/search/photos", {
            params: {
                query: term
                // per_page: 15,
                // color:'green',
                // orientation: 'landscape'
            } 
        });
        this.setState({images: response.data.results});
    }

    render(){
        return(
            <div className = "ui container" style = {{marginTop: "10px"}}>
                <SearchBar searchedItem = {this.getSearchedItem}/>
                <ImageList images = {this.state.images}/>
            </div>
        );
    }
}

export default App;