import React, { ReactNode } from 'react'; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'red';
    size?: 'default' | 'sm' | 'xs' | 'lg' | 'custom';
    className?: string;
    children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'default',
    size = 'default',
    className,
    children,
    ...props
    
}) => {
    const baseClasses = `inline-flex cursor-pointer items-center justify-center rounded-md font-medium dark:text-white text-black
    transition-colors focus:outline-none  disabled:opacity-50 disabled:pointer-events-none   hover:bg-accent hover:text-accent-foreground`;

    const variantClasses = {
        default:
            "bg-blue-500 hover:bg-blue-600",
        outline:
            "border border-input bg-transparent ",
        ghost:
            "focus:outline-none focus:shadow-none focus:ring-0 dark:hover:text-gray-300 hover:text-gray-700",
        destructive:
            "bg-red-500  hover:bg-red-600",
        red: 
            "bg-red-700 text-white  hover:bg-red-800 border-red-700 hover:border-red-800"
    };

    const sizeClasses = {
        default: "px-4 py-2",
        sm: "px-3 py-1.5 text-sm",
        lg: "px-6 py-3 text-lg",
        xs: "px-1.5 py-2",
        custom: "" 
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;