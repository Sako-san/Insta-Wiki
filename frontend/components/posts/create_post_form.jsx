import React from 'react';
import { withRouter } from 'react-router-dom';
import { createPost } from '../../util/post_api_util';

class CreatePostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            body: '',
            photoFile: null,
            photoUrl: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    };

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState({ photoUrl: reader.result, photoFile: file });
        }

        if (file) {
            reader.readAsDataURL(file);
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
            formData.append('post[location]', this.state.location);
            formData.append('post[body]', this.state.body);
            if(this.state.photofile){
                formData.append('post[photo]', this.state.PhotoFile);
            };

        this.props.action(formData);
    }

    render() {

        const { photoFile, photoUrl } = this.state;

        const thumbnail = this.state.photoUrl ?
         <img height="200px" width="200px" src={this.state.photoUrl} /> 
         : null;

        console.log(this.state);

        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}> 
                    <label>Location
                        <br/>
                    <input
                            type="text"
                            value={this.state.location}
                            onChange={this.update('location')} />
                    </label>
                        <br/>
                    <label>Image
                        <input 
                            type="file"
                            onChange={this.handleFile.bind(this)}
                            />
                    </label>
                        <br/>
                    <label>Body
                        <br/>
                        <textarea
                            value={this.state.body}
                            onChange={this.update('body')} />
                    </label>
                        <br/>
                    <input type="submit" value={this.props.formType} />

                    {thumbnail}
                </form>
            </div>
        );
    }
}

export default withRouter(CreatePostForm);