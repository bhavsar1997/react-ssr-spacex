import 'babel-polyfill';
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
        this.props.fetchSpaceXdata({
            limit: '100',
            launch_success: '',
            landing_status: '',
            launch_year: '',
        });
    }

    constructor(props) {
        super(props)
        this.state = {
            limit: '100',
            launch_success: '',
            landing_status: '',
            launch_year: '',
        }
        this.applyFilter = this.applyFilter.bind(this);
    }

    updateLaunchList() {
        this.props.fetchSpaceXdata({
            limit: this.state.limit,
            launch_success: this.state.launch_success,
            landing_status: this.state.landing_status,
            launch_year: this.state.launch_year
        });
    }

    applyFilter(filterType, value) {

        if (filterType === "launch_year") {
            value=value===this.state.launch_year?'':value;
            this.setState({
                launch_year: value,
            }, () => this.updateLaunchList())
        } else if (filterType === "launch_success") {
            value=value===this.state.launch_success?'':value;
            this.setState({
                launch_success: value,
            }, () => this.updateLaunchList())
        } else if (filterType === "land_success") {
            value=value===this.state.landing_status?'':value;
            this.setState({
                landing_status: value,
            }, () => this.updateLaunchList())
        } else {
            return
        }
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
                    <Filter applyFilter={this.applyFilter} active={this.state}/>
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
    return store.dispatch(fetchSpaceXdata({ limit: '100', launch_success: '', landing_status: '', launch_year: '' }));
}

function mapStateToProps(state) {
    return { spacexdata: state.spacexdata }
}
export default {
    loadData,
    component: (connect(mapStateToProps, { fetchSpaceXdata })(Home))
};