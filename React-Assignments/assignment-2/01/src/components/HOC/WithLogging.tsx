import React, { Component, ComponentType } from "react";

type WrappedComponentProps = {};

const WithLogging = <T extends WrappedComponentProps>(
	WrappedComponent: ComponentType<T>
) => {
	class WithLoggingComponent extends Component<T> {
		componentDidMount() {
			console.log(
				`Component ${
					WrappedComponent.displayName || WrappedComponent.name
				} is rendered.`
			);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	return WithLoggingComponent;
};

export default WithLogging;
