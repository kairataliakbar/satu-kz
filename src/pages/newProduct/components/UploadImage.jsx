import React from "react";
import PropTypes from "prop-types";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { image: "../../../../image/camera_a.gif" };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { onSubmit } = this.props;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({ image: reader.result });
      onSubmit(reader.result);
    };
  }

  onSubmit(image) {
    return this.onSubmit(image);
  }

  render() {
    const { image } = this.state;
    return (
      <div className="add-img">
        <input
          type="file"
          name="addImg"
          className="add-img-file"
          accept="image/jpeg,image/gif,image/png"
          onChange={this.onChange}
        />
        <img src={image} alt="result" />
      </div>
    );
  }
}

UploadImage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default UploadImage;
