import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/partials/Login' 
    
const TryName = () => {
    return (
        <>
            <h1>Deepak</h1>
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route exact path="/login" element={< Login />} />
            <Route exact path="/" element={ < TryName /> } />
        </Routes>
    );
}

const mapStateToProps = state => ({
    ...state.auth,
    ...state.chat
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
