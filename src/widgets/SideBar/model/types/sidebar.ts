import { FC } from 'react';

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: FC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
