// import React from 'react'

// type Props = {
//     className?: string;
//     type?: string;
//     placeholder?: string;
//     value?: string;
//     labelText?: string;
//     containerClassName?: string;
//     containerStyle?: React.CSSProperties;
//     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     name?: string;
//     style?: React.CSSProperties;
//     leftIcon?: React.ReactNode;
//     rightIcon?: React.ReactNode;
//     isLeftIcon?: boolean;
//     isRightIcon?: boolean;
//     isTyping?: boolean;
//     rightIconButtonClassName?: string;
//     rightIconButtonStyle?: React.CSSProperties;
//     leftIconButtonClassName?: string;
//     leftIconButtonStyle?: React.CSSProperties;
//     rightIconContainerClassName?: string;
//     rightIconContainerStyle?: React.CSSProperties;
//     leftIconContainerClassName?: string;
//     leftIconContainerStyle?: React.CSSProperties;
//     rightIconClick?: () => void;
//     leftIconClick?: () => void;
// }

// type IconContainerProps = {
//     className?: string;
//     style?: React.CSSProperties;
//     icon?: React.ReactNode;
//     onClick?: () => void;
//     arialLabel?: string;
//     iconButtonClassName?: string;
//     iconButtonStyle?: React.CSSProperties;
//     iconContainerClassName?: string;
//     iconContainerStyle?: React.CSSProperties;
// }

// const Input = (props: Props) => {

//     const { className, type, placeholder, onChange, value, name, style, rightIcon, leftIcon, isLeftIcon, isRightIcon, labelText, containerClassName,
//             isTyping, leftIconContainerClassName, leftIconContainerStyle, rightIconContainerClassName, rightIconContainerStyle, containerStyle,
//             leftIconButtonClassName, leftIconButtonStyle, rightIconButtonClassName, rightIconButtonStyle, leftIconClick, rightIconClick
//     } = props;

//     const InputIconContainer = (props: IconContainerProps) => {

//         const { icon, onClick, arialLabel, iconButtonClassName, iconButtonStyle, iconContainerClassName, iconContainerStyle } = props;

//         return (
//             <div
//                 className={`
//                     absolute border border-transparent
//                     top-1/2 -translate-y-2/4
//                     translate-x-0 flex flex-row
//                     items-center justify-center h-9 w-8
//                     ${iconContainerClassName}
//                 `}
//                 style={iconContainerStyle}
//             >
//                 <button
//                     onClick={onClick}
//                     aria-label={arialLabel}
//                     className={`relative border-none outline-none border-0 ${iconButtonClassName}`}
//                     style={iconButtonStyle}
//                 >
//                     {icon}
//                 </button>

//             </div>
//         )
//     }

//     return (
//         <div
//             style={containerStyle}
//             className={`flex flex-row items-center text-xs font-medium relative max-h-fit border rounded overflow-y-hidden ${containerClassName}`}>
//             {
//                 isLeftIcon && (
//                     <InputIconContainer
//                         icon={leftIcon}
//                         iconContainerClassName={leftIconContainerClassName}
//                         iconContainerStyle={leftIconContainerStyle}
//                         iconButtonClassName={leftIconButtonClassName}
//                         iconButtonStyle={leftIconButtonStyle}
//                         onClick={leftIconClick}
//                     />
//                 )
//             }
//             {/* <label className="w-full" htmlFor={name}> */}
//                 {/* {labelText} */}
//                 <input
//                     name={name}
//                     id={`${name}-input`}
//                     type={type && type ? type : 'text'}
//                     className={`w-full border-transparent focus:border-transparent focus:ring-0 ${className}`}
//                     style={style}
//                     placeholder={placeholder}
//                     onChange={onChange}
//                     value={value}
//                 />
//             {/* </label> */}
//             {
//                 isRightIcon && (
//                     <InputIconContainer
//                         icon={rightIcon}
//                         iconContainerClassName={rightIconContainerClassName}
//                         iconContainerStyle={rightIconContainerStyle}
//                         iconButtonClassName={rightIconButtonClassName}
//                         iconButtonStyle={rightIconButtonStyle}
//                         onClick={rightIconClick}
//                     />
//                 )
//             }
//         </div>
//     )
// }

// export default Input

import React from "react";

type Props = {
	className?: string;
	type?: string;
	placeholder?: string;
	value?: string;
	labelText?: string;
	containerClassName?: string;
	mainContainerClassName?: string;
	labelClassName?: string;
	containerStyle?: React.CSSProperties;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	style?: React.CSSProperties;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	isLeftIcon?: boolean;
	isRightIcon?: boolean;
	isTyping?: boolean;
	rightIconButtonClassName?: string;
	rightIconButtonStyle?: React.CSSProperties;
	leftIconButtonClassName?: string;
	leftIconButtonStyle?: React.CSSProperties;
	rightIconContainerClassName?: string;
	rightIconContainerStyle?: React.CSSProperties;
	leftIconContainerClassName?: string;
	leftIconContainerStyle?: React.CSSProperties;
	rightIconClick?: () => void;
	leftIconClick?: () => void;
};

type IconContainerProps = {
	className?: string;
	style?: React.CSSProperties;
	icon?: React.ReactNode;
	onClick?: () => void;
	arialLabel?: string;
	iconButtonClassName?: string;
	iconButtonStyle?: React.CSSProperties;
	iconContainerClassName?: string;
	iconContainerStyle?: React.CSSProperties;
};

const Input = (props: Props) => {
	const {
		className,
		type,
		placeholder,
		onChange,
		value,
		name,
		style,
		rightIcon,
		leftIcon,
		isLeftIcon,
		isRightIcon,
		labelText,
		containerClassName,
		isTyping,
		leftIconContainerClassName,
		leftIconContainerStyle,
		rightIconContainerClassName,
		rightIconContainerStyle,
		containerStyle,
		leftIconButtonClassName,
		leftIconButtonStyle,
		rightIconButtonClassName,
		rightIconButtonStyle,
		leftIconClick,
		rightIconClick,
		labelClassName,
		mainContainerClassName,
	} = props;

	const InputIconContainer = (props: IconContainerProps) => {
		const {
			icon,
			onClick,
			arialLabel,
			iconButtonClassName,
			iconButtonStyle,
			iconContainerClassName,
			iconContainerStyle,
		} = props;

		return (
			<div
				className={`
                    absolute border border-transparent 
                    top-1/2 -translate-y-2/4 
                    translate-x-0 flex flex-row 
                    items-center justify-center h-9 w-8
                    ${iconContainerClassName}
                `}
				style={iconContainerStyle}
			>
				<button
					onClick={onClick}
					aria-label={arialLabel}
					className={`relative border-none outline-none border-0 ${iconButtonClassName}`}
					style={iconButtonStyle}
				>
					{icon}
				</button>
			</div>
		);
	};

	return (
		<div className={`${mainContainerClassName}`}>
			<div className={`${labelClassName}`}>
				<label htmlFor={name}>{labelText}</label>
			</div>
			<div
				style={containerStyle}
				className={`flex flex-row items-center text-xs font-medium relative max-h-fit border rounded overflow-y-hidden ${containerClassName}`}
			>
				{isLeftIcon && (
					<InputIconContainer
						icon={leftIcon}
						iconContainerClassName={leftIconContainerClassName}
						iconContainerStyle={leftIconContainerStyle}
						iconButtonClassName={leftIconButtonClassName}
						iconButtonStyle={leftIconButtonStyle}
						onClick={leftIconClick}
					/>
				)}
				<input
					name={name}
					id={`${name}-input`}
					type={type && type ? type : "text"}
					className={`w-full border-transparent focus:border-transparent focus:ring-0 outline-none ${className}`}
					style={style}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
				/>
				{isRightIcon && (
					<InputIconContainer
						icon={rightIcon}
						iconContainerClassName={rightIconContainerClassName}
						iconContainerStyle={rightIconContainerStyle}
						iconButtonClassName={rightIconButtonClassName}
						iconButtonStyle={rightIconButtonStyle}
						onClick={rightIconClick}
					/>
				)}
			</div>
		</div>
	);
};

export default Input;
