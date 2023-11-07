import React, { useMemo } from 'react';
import { Text as RNText, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import useStyles from './style';
import { TextProps } from './types';
import useTheme from '../../../hooks/theme';
import { stripHtml } from '../../../utils';
import withTest from '../../../hoc/with-test';

const Text: React.FC<TextProps> = ({
  style,
  type = 'description',
  variant = 'none',
  hyperlinkProps,
  children: originChildren,
  center,
  html,
  onHtmlAnchorPress,
  ...props
}) => {
  const theme = useTheme();
  const styles = useStyles();
  const { width } = useWindowDimensions();

  const children = useMemo(() => {
    if (typeof originChildren === 'string') return stripHtml(originChildren);
    return originChildren;
  }, [originChildren]);

  const typeStyle = styles[type];
  const variantStyle = styles[variant];

  const centerStyle = center && styles.center;

  if (html) {
    if (
      !React.isValidElement(originChildren) &&
      typeof originChildren === 'string'
    ) {
      const commonTagStyle = {
        ...typeStyle,
        ...variantStyle,
      };

      return (
        <RenderHtml
          {...props}
          contentWidth={width}
          tagsStyles={{
            div: {
              ...commonTagStyle,
              margin: 0,
              marginBottom: 4,
            },
            p: {
              ...commonTagStyle,
              margin: 0,
              marginBottom: 4,
            },
            span: {
              ...commonTagStyle,
              margin: 0,
            },
            a: {
              ...commonTagStyle,
              color: theme.colors.status.blue.dark,
              textDecorationLine: 'none',
            },
            table: {
              ...commonTagStyle,
              borderColor: theme.colors.black,
              textDecorationLine: 'none',
              borderWidth: 1,
            },
            td: {
              padding: 10,
              borderColor: theme.colors.black,
              borderWidth: 1,
              color: theme.colors.black,
            },
            th: {
              padding: 10,
              borderColor: theme.colors.black,
              borderWidth: 1,
              color: theme.colors.black,
            },
          }}
          renderersProps={{
            ...(props?.renderersProps || {}),
            a: {
              ...(props?.renderersProps?.a || {}),
              ...(onHtmlAnchorPress && {
                onPress: (_, href) => {
                  onHtmlAnchorPress?.(href);
                },
              }),
            },
          }}
          systemFonts={[theme.fontFamily.regular]}
          source={{ html: originChildren as string }}
        />
      );
    }
    console.warn(
      'Html text should be plain string without any nested components.',
    );
  }

  // if (hyperlinkProps) {
  //   return (
  //     <Hyperlink linkDefault linkStyle={styles.link} {...hyperlinkProps}>
  //       <RNText
  //         style={[styles.root, typeStyle, variantStyle, centerStyle, style]}
  //         {...props}
  //       >
  //         {children}
  //       </RNText>
  //     </Hyperlink>
  //   );
  // }

  return (
    <RNText
      style={[styles.root, typeStyle, variantStyle, centerStyle, style]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default withTest({ prefix: 'txt' })(Text);
