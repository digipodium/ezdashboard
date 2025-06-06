interface Data {
    data: {
        value: number;
        day: string;
    }[];
}
declare const Calendar: ({ data }: {
    data: Data;
}) => import("react/jsx-runtime").JSX.Element;
export default Calendar;
