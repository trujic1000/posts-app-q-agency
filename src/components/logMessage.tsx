import React from 'react';

interface LogMessageProps {
  message?: string;
}

export const logMessage = <P extends LogMessageProps>(
  WrappedComponent: React.ComponentType<P>
): React.FunctionComponent<P> => {
  const LogWrapper: React.FunctionComponent<P> = (props) => {
    React.useEffect(() => {
      const componentName = getDisplayName(WrappedComponent);
      const message = props.message || 'Hello from';

      console.log(`${message} ${componentName}`);
    }, [props.message]);

    return <WrappedComponent {...props} />;
  };

  // Set display name for DevTools
  LogWrapper.displayName = `LogWrapper(${getDisplayName(WrappedComponent)})`;

  return LogWrapper;
};

const getDisplayName = (WrappedComponent: React.ComponentType<any>): string => {
  console.log('WrappedComponent.displayName', WrappedComponent.displayName);
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
