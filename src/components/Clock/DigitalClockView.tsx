import React from 'react';
type DigitalClockViewType={
    count:Date
}
const DigitalClockView: React.FC<DigitalClockViewType> = ({count}) => {
    return (
        <div>
            {count.toLocaleString('ru', {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            })}
        </div>
    );
};

export default DigitalClockView;