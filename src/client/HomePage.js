import React from 'react';
import { connect } from 'react-redux';
import { fetchSpaceXdata } from './actions';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Filter from './components/FilterComponent';
import LaunchListComponent from './components/LaunchListComponent';
import style from './stylesheet/stylesheet.css';

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchSpaceXdata();
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>SpaceX program launches</title>
                    <meta property="og:title" content="SpaceX Programs" />
                </Helmet>

                <Header />
                <main className={style.main_container}>
                    <Filter handler={()=>console.log("hello")}/>
                    <LaunchListComponent data={this.props.spacexdata} />
                </main>

                <footer className={style.footer}>
                    <p><b>Developed by: </b>Deepesh Bhavsar</p>
                </footer>

            </div>
        )
    }
};

function loadData(store) {
    return store.dispatch(fetchSpaceXdata());
}

function mapStateToProps(state) {
    return { spacexdata: state.spacexdata }
}
export default {
    loadData,
    component: (connect(mapStateToProps, { fetchSpaceXdata })(Home))
};