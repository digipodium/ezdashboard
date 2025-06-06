type Data = {
    id: string;
    data: {
        x: number;
        y: number;
    }[];
};
declare const Bump: ({ data }: {
    data: Data[];
}) => import("react/jsx-runtime").JSX.Element;
export default Bump;
