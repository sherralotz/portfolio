import React, { ReactNode } from 'react';
// import { cn } from 'class-variance-authority'; //If you want to use this

interface CardProps {
    className?: string;
    children?: ReactNode;
}

interface CardHeaderProps {
    className?: string;
    children?: ReactNode;
}

interface CardImageProps {
    className?: string;
    children?: ReactNode;
}

interface CardTitleProps {
    className?: string;
    children?: ReactNode;
}

interface CardDescriptionProps {
    className?: string;
    children?: ReactNode;
}

interface CardContentProps {
    className?: string;
    children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children, }) => {
    const classes = `rounded-lg border bg-card text-card-foreground shadow-sm ${className ?? ""}`;
    return (
        <div className={classes}>{children}</div>
    );
};

const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => {
    const classes = `flex flex-row space-y-1.5 p-6 ${className ?? ""}`;
    return <div className={classes}>{children}</div>;
};

const CardImage: React.FC<CardImageProps> = ({ className, children }) => {
    const classes = `flex flex-col space-y-1.5 me-5 ${className ?? ""}`;
    return <div className={classes}>{children}</div>;
};

const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => {
    const classes = `text-2xl font-semibold leading-none tracking-tight ${className ?? ""}`;
    return <h3 className={classes}>{children}</h3>;
};

const CardDescription: React.FC<CardDescriptionProps> = ({ className, children }) => {
    const classes = `text-sm text-muted-foreground ${className ?? ""}`;
    return <p className={classes}>{children}</p>;
};

const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
    const classes = `p-6 pt-0 ${className ?? ""}`;
    return <div className={classes}>{children}</div>;
};

export { Card, CardImage, CardHeader, CardTitle, CardDescription, CardContent };