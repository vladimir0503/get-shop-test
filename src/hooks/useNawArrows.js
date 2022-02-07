import React from 'react';

const useNawArrows = () => {
    const [indexBtn, setBtnIndex] = React.useState(0);

    let prevIndex;

    const changeIndexBtn = e => {
        switch (e.key) {
            case 'ArrowUp':
                setBtnIndex(indexBtn => {
                    if(indexBtn === 12) {
                        return indexBtn;
                    } else if (indexBtn === 0 || indexBtn === 1 || indexBtn === 2) {
                        return indexBtn
                    } else if (indexBtn === 9 || indexBtn === 11) {
                        return --indexBtn;
                    }  else {
                        return indexBtn !== 10 ? indexBtn - 3 : indexBtn - 2;
                    };
                });
                break;

            case 'ArrowDown':
                setBtnIndex(indexBtn => {
                    if (indexBtn === 11 || indexBtn === 12) {
                        return indexBtn;
                    } else if (indexBtn === 6 || indexBtn === 7) {
                        return 9;
                    } else if (indexBtn === 8) {
                        return 10;
                    } else if (indexBtn === 9 || indexBtn === 10) {
                        return 11;
                    } else {
                        return indexBtn + 3;
                    };
                });
                break;

            case 'ArrowRight':
                setBtnIndex(indexBtn => {
                    if (indexBtn === 12) {
                        return indexBtn;
                    } else if ([2, 5, 8, 10, 11].includes(indexBtn)) {
                        prevIndex = indexBtn;
                        return 12
                    } else {
                        return ++indexBtn
                    };
                });
                break;

            case 'ArrowLeft':
                setBtnIndex(indexBtn => {
                    if (indexBtn === 12) {
                        return prevIndex;
                    } else if (!indexBtn) {
                        return indexBtn;
                    } else {
                        return --indexBtn;
                    }
                });
                break;

            default:
                break;
        }

    };

    React.useEffect(() => {
        window.addEventListener('keydown', changeIndexBtn);
        return (() => window.removeEventListener('keydown', changeIndexBtn));
    }, []);

    return { indexBtn, setBtnIndex };
};

export default useNawArrows;