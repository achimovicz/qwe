import React, { useState } from 'react';

const MyRadioButton = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRatingChange = (value) => {
    setSelectedOption(value);
  };

  const emojiMappings = {
    '1': String.fromCodePoint(parseInt('1F61E', 16)),
    '2': String.fromCodePoint(parseInt('1F610', 16)),
    '3': String.fromCodePoint(parseInt('1F642', 16)),
    '4': String.fromCodePoint(parseInt('1F60A', 16)),
    '5': String.fromCodePoint(parseInt('1F601', 16)),
  };

  const renderEmojiRadio = (value) => (
    <span
      key={value}
      role="img"
      aria-label={`Rating ${value}`}
      onClick={() => handleRatingChange(value)}
      className={selectedOption === value ? 'selected' : ''}
      style={{ cursor: 'pointer' }}
    >
      {emojiMappings[value]}
    </span>
  );

  return (
    <div>
      {renderEmojiRadio('1')}
      {renderEmojiRadio('2')}
      {renderEmojiRadio('3')}
      {renderEmojiRadio('4')}
      {renderEmojiRadio('5')}

      {selectedOption && (
        <p>Auswahl: {emojiMappings[selectedOption]}</p>
      )}
    </div>
  );
};

export default MyRadioButton;