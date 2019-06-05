import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../../actions/post_actions';
import CreatePostForm from './create_post_form';

const mapStateToProps = (state, ownProps) => {
    const post = { location: '', photoFile: null, body: '' };
    const formType = 'Create Post';

    return { post, formType };
};

const mapDispatchToProps = dispatch => ({
    action: (post) => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);