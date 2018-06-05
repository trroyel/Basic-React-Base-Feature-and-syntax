import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     );
// }



const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.fodRef} {...this.props} />
                </div>
            );
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} fodRef={ref} />
    });
}

export default withClass;