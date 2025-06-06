interface Data {
    id: string;
    color: string;
    data: {
        x: string;
        y: number;
    }[];
}
declare const LineChart: ({ data }: {
    data: Data[];
}) => import("react/jsx-runtime").JSX.Element;
export default LineChart;
