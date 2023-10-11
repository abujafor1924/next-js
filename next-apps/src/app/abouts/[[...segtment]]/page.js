import React from "react";

const YearPage = ({ params }) => {
  console.log(params.segtment);
  const [year, id] = params.segtment || [];
  return (
    <div>
      YearPage {year || new Date().getFullYear()} of {id || new Date().getDay()}
    </div>
  );
};

export default YearPage;
