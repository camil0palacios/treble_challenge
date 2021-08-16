import React from 'react';
import * as RJD from '../../../../lib/main';
import { ImageNodeModel } from './ImageNodeModel';
import { TextNode } from './TextNode';

export class ImageNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
  };

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getInPort() {
    const { node, color, displayOnly } = this.props;
    let inputNode = node;

    if (displayOnly) {
      inputNode = new ImageNodeModel(node.name, color);
    }

    return inputNode.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
  }

  getOutPort() {
    const { node, color, displayOnly } = this.props;
    let outputNode = node;

    if (displayOnly) {
      outputNode = new ImageNodeModel(node.name, color);
    }

    return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
  }

  getTypeNode(typeNode, image) {
    if (typeNode === 'imagenode') {
      return  <img src={image} className='img' />
    }
    if (typeNode === 'text') {
      return <h1> Text </h1>;
    }
    return <TextNode/>
  }

  render() {
    const { node, displayOnly, color: displayColor, image, type, description } = this.props;
    const { name, color, content } = node;
    const style = {};
    let srcImage = '';
    let typeNode = '';
    let descriptionNode = '';

    if (color || displayColor) {
      style.background = color || displayColor;
    }

    if (image) {
      srcImage = image;
    } 
    else if (content !== undefined && content?.image?.src) {
      srcImage = content.image.src;
    }

    if (type) {
      typeNode = type;
    }
    else if (content !== undefined && content?.type) {
      typeNode = content.type;
    }

    if (description || content?.description) {
      descriptionNode = description || content?.description;
    }
  
    return (
      <div className='basic-node' style={style}>
        <div className='title'>
          {!displayOnly ? <div className='fa fa-close' onClick={this.onRemove.bind(this)} /> : null}
        </div>
        <div className="ports row">
          <div className='in col-4'>
            {this.getInPort()}
          </div>
          <div className="col-4">
            {this.getTypeNode(typeNode, srcImage)}
          </div>
          <div className='out col-4'>
            {this.getOutPort()}
          </div>
        </div>
        <p className="text-center"> {descriptionNode} </p> 
      </div>
    );
  }
}

export const ImageNodeWidgetFactory = React.createFactory(ImageNodeWidget);
