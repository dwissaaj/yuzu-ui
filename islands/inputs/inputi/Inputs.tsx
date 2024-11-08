import {
    forwardRef,
    useMemo,
  } from "https://esm.sh/v128/preact@10.22.0/compat/src/index.js";
  import { useInputi } from "./use-input.ts";
  import type { InputProps } from "./type.ts";
  
  const Inputi = forwardRef<HTMLInputElement, InputProps>((props) => {
    const {
        domRef,
        className,
        style,
        GetParentsStyle,
        isDisabled,
        isRequired,
        GetInputStyle,
        GetDisabled,
        GetCustomError,
        GetCustomReadonly,
        GetCustomRequired,
        isReadonly,
        GetCustomDisabled,
        GetLabelProps,
      ...otherProps
    } = useInputi({ ...props });
  
    const labelContent = GetLabelProps.label
      ? (
        <span className={`${GetLabelProps.className} ${GetCustomRequired.yuzuRequiredStyle} `}>
          {GetLabelProps.label}
        </span>
      )
      : null;
  
    const baseContent = (
      <input
        {...otherProps}
        ref={domRef}
        disabled={isDisabled}
        readOnly={isReadonly}
        required={isRequired}
        className={`w-full ${className} ${GetDisabled.disabledStyle} ${GetCustomDisabled} ${GetInputStyle.className} ${GetCustomError.yuzuErrorStyle} ${GetCustomDisabled} ${GetCustomReadonly.yuzuReadonlyStyle} `}
        style={style}
      />
    );
  
    const mainWrapper = useMemo(() => {
      if (GetLabelProps.labelPlacement === "top") {
        return (
          <div
            className={`flex flex-col gap-2 ${GetParentsStyle.className} 
            ${GetCustomDisabled}
            ${GetCustomError.yuzuErrorStyle} ${GetCustomDisabled} ${GetCustomReadonly.yuzuReadonlyStyle} `}
          >
            {labelContent}
            <div
              className={`flex flex-row gap-2 items-center`}
            >
              {baseContent}
            </div>
          </div>
        );
      }
    }, [GetLabelProps]);
  
    const bottomWrapper = useMemo(() => {
      if (GetLabelProps.labelPlacement === "bottom") {
        return (
          <div
            className={`flex flex-col gap-2 ${GetParentsStyle.className}`}
          >
            <div
              className={` flex flex-row gap-2 items-center
          `}
            >
              {baseContent}
            </div>
            {labelContent}
          </div>
        );
      }
    }, [GetLabelProps]);
    const leftWrapper = useMemo(() => {
      if (GetLabelProps.labelPlacement === "left") {
        return (
          <div
            className={`flex flex-row gap-2 items-end ${GetParentsStyle.className}`}
          >
            <div className={"w-1/5"}>
              {labelContent}
            </div>
  
            <div
              className={`w-4/5 flex flex-row gap-2 items-center
          `}
            >
              {baseContent}
            </div>
          </div>
        );
      }
    }, [GetLabelProps]);
    const rightWrapper = useMemo(() => {
      if (GetLabelProps.labelPlacement === "right") {
        return (
          <div
            className={` flex flex-row gap-2 items-end ${GetParentsStyle.className}`}
          >
            <div
              className={`w-4/5 flex flex-row gap-2 items-center
          `}
            >
              {baseContent}
            </div>
            <div className={"w-1/5"}>
              {labelContent}
            </div>
          </div>
        );
      }
    }, [GetLabelProps]);
  
    return (
      <>
        {leftWrapper ? leftWrapper : null}
        {mainWrapper}
        {bottomWrapper ? bottomWrapper : null}
        {rightWrapper ? rightWrapper : null}
      </>
    );
  });
  
  export default Inputi;
  