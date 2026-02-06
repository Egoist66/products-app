import {type ReactNode} from 'react';

interface LayoutProps {
    children?: ReactNode | (() => ReactNode);
    header?: ReactNode | (() => ReactNode);
    footer?: ReactNode | (() => ReactNode);
}

export const Layout = ({children, header, footer} : LayoutProps) => {
    return (
        <main className='layout'>
            {
            header && typeof header === 'function' ? header() : header
        }
            {
            children && typeof children === 'function' ? children() : children
        }
            {
            footer && typeof footer === 'function' ? footer() : footer
        } </main>
    );
};
