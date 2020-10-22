import React from 'react';
import Shop from './Shop';
import { connect } from 'react-redux';
import { getImg } from './../../store/indexReducer';
import Aos from 'aos';

class ShopContainer extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    getBasicUrl = (img) => {
        this.props.getImg(img);
    }
    render() {
        return (
            <Shop getCurrentImg={this.getBasicUrl} />
        )
    }
}

const mapStateToProps = (state) => ({
    urlImg: state.index.urlImg
})

export default connect(mapStateToProps,  { getImg})(ShopContainer)
