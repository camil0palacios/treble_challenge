import React from 'react';
import Node from './Node';
import images from '../../images/images';

class NodesPanel extends React.Component {
    render() {
        return (
            <div className="panel-wrapper">
                <div className="nodes-panel">
                    <div className = 'node-wrapper'>
                        <Node type='text'></Node>
                    </div>
                    <hr/>
                    <div className="node-wrapper">
                        <Node type="imagenode" 
                        image={images.rds}
                        description='RDS'/>
                    </div>
                    <div className="node-wrapper">
                        <Node type="imagenode" 
                        image={images.ec2}
                        description='EC2'/>
                    </div>
                    <div className="node-wrapper">
                        <Node type="imagenode" 
                        image={images.elb}
                        description='Elastic Load Balancing'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default NodesPanel;