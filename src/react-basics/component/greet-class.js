import React, {
    Component
} from 'react';

class Welcome extends Component {
    render() {
        return <div>
            <h1>Hi {this.props.name} Class Component</h1>
            {this.props.children}
        </div>
    }
}

export default Welcome