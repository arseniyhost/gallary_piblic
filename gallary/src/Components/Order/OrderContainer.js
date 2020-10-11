import React from 'react';
import { connect } from 'react-redux';
import Order from './Order';

class OrderContainer extends React.Component {

    componentDidMount() {
        window.scrollTo({
            top: 150,
            behavior: "auto"
        });
    }

    render() {
        return (
            <Order urlImg={this.props.urlImg} />
        )
    }
}

const mapStateToProps = (state) => ({
    urlImg: state.index.urlImg
})

export default connect(mapStateToProps, {})(OrderContainer);
