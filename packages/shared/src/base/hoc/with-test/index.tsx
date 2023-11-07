import React from 'react';
import { capitalize, snakeCase } from 'lodash';
import { ViewProps } from 'react-native';
import { WithTestHocProps, WithTestOptions } from './types';

const withTest =
  (options: WithTestOptions) =>
  <T, P extends ViewProps>(
    WrappedComponent: React.FC<P>,
  ):
    | React.FC<P & WithTestHocProps>
    | React.ForwardRefExoticComponent<
        React.PropsWithoutRef<P> & React.RefAttributes<T>
      > =>
    React.forwardRef<T, P>((props, ref) => {
      const { testID: originalTestID } = props;
      const { prefix } = options;
      const testID = snakeCase(
        `${prefix}${capitalize(snakeCase(originalTestID))}`,
      );
      return (
        <WrappedComponent
          {...props}
          ref={ref}
          testID={testID}
          accessible
        />
      );
    });

export default withTest;
