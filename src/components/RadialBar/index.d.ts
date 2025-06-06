interface Data {
    id: string;
    data: {
        x: string;
        y: number;
    }[];
}
declare const RadialBar: ({ data }: {
    data: Data[];
}) => import("react/jsx-runtime").JSX.Element;
export default RadialBar;
