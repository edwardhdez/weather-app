import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {

    render() {
        return (
            this.props.city &&
            <ForecastExtended city={this.props.city} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: Proptypes.string.isRequired,
};

const mapStateToProps = ({city}) => ({ city });
export default connect(mapStateToProps, null)(ForecastExtendedContainer);