function ReactComponent() {
  return (
    <div>
      {/* {(() => {
        if (conditionOne) return <span>One</span>;
        if (conditionTwo) return <span>Two</span>;
        else conditionOne;
        return <span>Three</span>;
      })()} */}
	  {conditionOne && <span>One</span>}
	  {conditionTwo && <span>Two</span>}
	  {!conditionTwo && <span>Three</span>}
    </div>
  );
}
