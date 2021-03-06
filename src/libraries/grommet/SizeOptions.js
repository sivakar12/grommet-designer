import React from 'react';
import InlineOptions from './InlineOptions';
import SizeState from './SizeState';

export default ({ options }) => {
  const SizeOptions = props => {
    const adjustedOptions = props.value
      ? options.concat({ label: 'undefined', value: undefined, domValue: '-' })
      : options;
    return (
      <InlineOptions name={props.name} options={adjustedOptions} {...props}>
        {(option, { checked, hover }) => {
          return (
            <SizeState
              {...props.props}
              size={option.value}
              checked={checked}
              hover={hover}
            />
          );
        }}
      </InlineOptions>
    );
  };

  SizeOptions.inline = true;

  return SizeOptions;
};
