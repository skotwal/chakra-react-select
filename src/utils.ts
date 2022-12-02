import type { CommonPropsAndClassName, GroupBase } from "react-select";

/**
 * Clean Common Props
 *
 * Borrowed from the original `react-select` package
 *
 * @see {@link https://github.com/JedWatson/react-select/blob/edf5265ee0158c026c9e8527a6d0490a5ac2ef23/packages/react-select/src/utils.ts#L75-L110}
 */
export const cleanCommonProps = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
  AdditionalProps
>(
  props: Partial<CommonPropsAndClassName<Option, IsMulti, Group>> &
    AdditionalProps
): Omit<
  AdditionalProps,
  keyof CommonPropsAndClassName<Option, IsMulti, Group>
> => {
  // className
  const {
    className, // not listed in commonProps documentation, needs to be removed to allow Emotion to generate classNames
    clearValue,
    cx,
    getStyles,
    getClassNames,
    getValue,
    hasValue,
    isMulti,
    isRtl,
    options, // not listed in commonProps documentation
    selectOption,
    selectProps,
    setValue,
    theme, // not listed in commonProps documentation
    ...innerProps
  } = props;
  return { ...innerProps };
};
