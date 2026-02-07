import {type ReactNode} from 'react';
import { observer } from 'mobx-react-lite';

interface LayoutProps {
    children?: ReactNode | (() => ReactNode);
    header?: ReactNode | (() => ReactNode);
    footer?: ReactNode | (() => ReactNode);
}

export const Layout = observer(({children, header, footer} : LayoutProps) => {

    const getContentElement = () => {
        return children && typeof children === 'function' ? children() : children;
    };

    return (
        <main className='layout'>
            {header && typeof header === 'function' ? header() : header}
            {getContentElement()}
            {footer && typeof footer === 'function' ? footer() : footer}
        </main>
    );
});