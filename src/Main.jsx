import React from 'react';

const BeerSong = () => {
  const renderSong = () => {
    const lines = [];
    for (let i = 99; i > 0; i--) {
      lines.push(
        <div key={`verse-${i}`}>
          <p>{i} bottles of beer on the wall, {i} bottles of beer!</p>
          <p>Take one down, pass it around</p>
          <p>{i - 1} bottles of beer on the wall!</p>
          <br />
        </div>
      );
    }
    lines.push(
      <div key="final">
        <p>If that one bottle should happen to fall, what a waste of alcohol!</p>
      </div>
    );
    return lines;
  };

  return (
    <div className="beer-song">
      <h1>99 Bottles of Beer</h1>
      {renderSong()}
    </div>
  );
};

export default BeerSong;