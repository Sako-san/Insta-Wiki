import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchPosts, fetchPost, createPost } from '../../util/post_api_util';

class CreatePostForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.props.post;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);
    };


    componentDidMount() {
        this.props.fetchPosts();
    }
    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    handleFile(e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState({ photoUrl: reader.result, photoFile: file });
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: '', photoFile: null });
        } 
    };

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('post[location]', this.state.location);
        formData.append('post[body]', this.state.body);
        formData.append('post[photo]', this.state.photoFile);

        this.props.createPost(formData);
        this.setState({ location: '', photoUrl: null, photoFile: null, body: ''})
    };

    render() {

        
        const { photoFile, photoUrl } = this.state;

        const thumbnail = this.state.photoUrl ?
         <img height="200px" width="200px" src={this.state.photoUrl} /> 
         : null;

        return (
            <div >
                <h3 className='create-post-head' >{this.props.formType}</h3>
                <form className='form-container' onSubmit={this.handleSubmit}>
                        <br/>
                    <input
                            type="text"
                            value={this.state.location}
                            onChange={this.update('location')}
                            placeholder='Add Location' />
                        <br/>
                        <label className='submit' onChange={this.handleFile}>
                            <span>Upload Photo</span> 
                            <input className='upload-button' type="file" accept='image/*'/>
                        </label> 
                        <br/>
                        <textarea
                            value={this.state.body}
                            onChange={this.update('body')} 
                            placeholder='Say something cool...'/>
                        <br/>
                    <input className='submit' type="submit" value={this.props.formType} />

                    <div className='thumbnail'> {thumbnail} </div> 
                </form>
            </div>
        );
    }
}

export default withRouter(CreatePostForm);