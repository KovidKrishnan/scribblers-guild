import React, { useEffect, useState } from 'react';

const InterestCard = ({ interestName, setSelectedInterests }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelection = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    if (selected) {
      // Add the interestName to the selectedInterests list
      setSelectedInterests((selectedInterests) => [
        ...selectedInterests,
        interestName,
      ]);
    } else {
      // Remove the interestName from the selectedInterests list
      setSelectedInterests((selectedInterests) =>
        selectedInterests.filter((item) => item !== interestName)
      );
    }
  }, [selected]);

  return (
    <div
      className={!selected ? 'interest-card' : 'interest-card-selected'}
      onClick={toggleSelection}
    >
      {interestName}
    </div>
  );
};

export default InterestCard;
