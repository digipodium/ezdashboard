interface ChoroplethDatum {
    id: string;
    value: number;
}
declare const ChoroplethMap: ({ data }: {
    data: ChoroplethDatum[];
}) => import("react/jsx-runtime").JSX.Element;
export default ChoroplethMap;
