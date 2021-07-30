export const ToggleShowTestsButton = ({ showTests, setShowTests }) => (
  <div style={{ background: "black" }}>
    <button
      onClick={() => {
        setShowTests(!showTests);
      }}
    >
      Toggle View
    </button>
  </div>
);
