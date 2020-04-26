import React from 'react';

const pureComponent = props => (
	<div>This is a component called pureComponent.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class pureComponent extends React.Component {
//   render() {
//     return <div>This is a component called pureComponent.</div>;
//   }
// }

const pureComponentPropTypes = {
	// always use prop types!
};

pureComponent.propTypes = pureComponentPropTypes;

export default pureComponent;
