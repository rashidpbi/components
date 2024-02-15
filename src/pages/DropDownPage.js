import DropDown from "../components/DropDown";

function DropDownPage() {
  const colors = [
    { id: "asd", name: "red" },
    { id: "asdas", name: "green" },
    { id: "wert", name: "blue" },
  ];

  return (
    <div>
      <DropDown colors={colors} />
    </div>
  );
}

export default DropDownPage;
