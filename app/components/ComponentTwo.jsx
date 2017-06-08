import React from "react";

// var isAdmin = true;
// /* 
//  * higer-order-component:
//  * take a component, and return a component
//  */
// var adminComponent = ((Component) => {
//     return class Admin extends React.Component{
//         render () {
//             if (isAdmin) {
//                 return (
//                     <div className="callout secondary">
//                         <p className="alert label">Private admin information</p>
//                         <Component {...this.props}/>
//                         {/*take the property pass to Admin and pass down to component*/}
//                     </div>
//                 );
//             } else {
//                 return null;
//             }
//         }
//     }
// });

var isAdmin = true;
/* 
 * higer-order-component:
 * take a component, and return a component
 */
var adminComponent = ((Component) => {
    return class Admin extends Component{
        componentDidUpdate() {
            console.log("Admin component did update");

            if (super.componentDidUpdate) {
                super.componentDidUpdate();
            }
        }
        render () {
            if (isAdmin) {
                return (
                    <div className="callout secondary">
                        <p className="alert label">Private admin information</p>
                        {super.render()}
                        {/*call parent function*/}
                    </div>
                );
            } else {
                return null;
            }
        }
    }
});

class ComponentTwo extends React.Component {
    componentDidUpdate() {
        console.log("ComponentTwo component did update");
    }
    /* Set Method */
    constructor (props) {
        super(props);
        this.state = {
            count: props.count
        };
        /*
         * PS. 若不寫下面這句, 可以直接在 button onClick 事件中寫:
         * <button className="button" onClick={this.onClick.bind(this)}>Button Two</button>
         * 或者直接寫:
         * <button className="button" onClick={() => {
         *     this.setState({ count: this.state.count + 1 });
         * })}>Button Two</button>
         * 就不用去使用 bind 了!
         *
         * 转换为 ES2015 Class 以后，实例方法不会自动绑定 this，需要手动绑定或者使用箭头函数。
         */
        this.onClick = this.onClick.bind(this);
    }
    onClick () {
        this.setState({
            count: this.state.count + 1
        });
    }
    render () {
        return (
            <div>
                <h3>Component Two Using React.Component</h3>
                <p>Current count: {this.state.count}</p>
                <button className="button" onClick={this.onClick}>Button Two</button>
            </div>
        );
    }
}

/* Set Value */
ComponentTwo.defaultProps = {
    count: 50
};

ComponentTwo.propTypes = {
    count: React.PropTypes.number
};

export default adminComponent(ComponentTwo);