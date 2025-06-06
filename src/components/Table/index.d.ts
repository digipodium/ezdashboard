import { FC, ReactNode, SyntheticEvent } from 'react';
interface TableRowData extends Record<string, any> {
}
interface TableProps {
    data?: TableRowData[];
    headings?: string[];
    uniqueKeyField?: string;
    className?: string;
    alignHeading?: 'left' | 'center' | 'right';
    alignData?: 'left' | 'center' | 'right';
    primaryAction?: (e: SyntheticEvent, uniqueId: string) => void;
    secondaryAction?: (e: SyntheticEvent, uniqueId: string) => void;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    primaryButtonIcon?: ReactNode;
    secondaryButtonIcon?: ReactNode;
    emptyMessage?: string;
    striped?: boolean;
    hoverable?: boolean;
    compact?: boolean;
}
declare const Table: FC<TableProps>;
export default Table;
