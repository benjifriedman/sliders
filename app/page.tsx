import SliderColumn from "../components/slider-column";

export default function Home() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
        <SliderColumn width="50%" order={1} />
        <SliderColumn width="50%" order={2} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
        <SliderColumn width="25%" order={1} />
        <SliderColumn width="25%" order={2} />
        <SliderColumn width="25%" order={3} />
        <SliderColumn width="25%" order={4} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
        <SliderColumn width="50%" order={1} />
        <SliderColumn width="50%" order={2} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
        <SliderColumn width="25%" order={1} />
        <SliderColumn width="25%" order={2} />
        <SliderColumn width="25%" order={3} />
        <SliderColumn width="25%" order={4} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
        <SliderColumn width="16.66%" order={1} />
        <SliderColumn width="16.66%" order={2} />
        <SliderColumn width="16.66%" order={3} />
        <SliderColumn width="16.66%" order={4} />
        <SliderColumn width="16.66%" order={5} />
        <SliderColumn width="16.66%" order={6} />
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
        <SliderColumn width="50%" order={1} />
        <SliderColumn width="50%" order={2} />
      </div>
    </>
  );
}

// import ColumnContainer from "../components/column-container";

// export default function Home() {
//   const numberOfColumns = 2;

//   const columns = [];
//   for (let i = 0; i < numberOfColumns; i++) {
//     columns.push(
//       <SliderColumn
//         key={i + 1}
//         width={`${100 / numberOfColumns}%`}
//         order={i + 1}
//       />
//     );
//   }

//   return (
//     <>
//       <ColumnContainer>{columns}</ColumnContainer>
//     </>
//   );
// }
