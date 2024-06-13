import { useState } from 'react';


const GuitarNeckIntervals = () => {
    const [selectedRoot, setSelectedRoot] = useState('');
    const [selectedTarget, setSelectedTarget] = useState('');

    const handleRootChange = (e) => {
        setSelectedRoot(e.target.value);

    }
    
    const handleTargetChange = (e) => {
        setSelectedTarget(e.target.value);

    }

    const handleRootLighter = (newSelectedRoot) => {
        if (newSelectedRoot === '0') {

            return (
                <>    
                    <div className="note-C-6"></div>
                    <div className="note-C-5"></div>
                    <div className="note-C-4"></div>
                    <div className="note-C-3"></div>
                    <div className="note-C-2"></div>
                    <div className="note-C-1"></div>
                </>
            )
        } else if (newSelectedRoot === '1') {

            return (
                <>    
                    <div className="note-Cs-Db-6"></div>
                    <div className="note-Cs-Db-5"></div>
                    <div className="note-Cs-Db-4"></div>
                    <div className="note-Cs-Db-3"></div>
                    <div className="note-Cs-Db-2"></div>
                    <div className="note-Cs-Db-1"></div>
                </>
                );
            } else if (newSelectedRoot === '2') {
                return (
                    <>    
                    <div className="note-D-6"></div>
                    <div className="note-D-5"></div>
                    <div className="note-D-4"></div>
                    <div className="note-highD-4"></div>
                    <div className="note-D-3"></div>
                    <div className="note-D-2"></div>
                    <div className="note-D-1"></div>
                </>
                );;
            } else if (newSelectedRoot === '3') {
                return (
                    <>    
                    <div className="note-Gs-Ab-6"></div>
                    <div className="note-Ds-Eb-5"></div>
                    <div className="note-Ds-Eb-4"></div>
                    <div className="note-Ds-Eb-3"></div>
                    <div className="note-Ds-Eb-2"></div>
                    <div className="note-Ds-Eb-1"></div>
                </>
                );
            } else if (newSelectedRoot === '4') {
                return (
                    <>    
                    <div className="note-E-6"></div>
                    <div className="note-highE-6"></div>
                    <div className="note-E-5"></div>
                    <div className="note-E-4"></div>
                    <div className="note-E-3"></div>
                    <div className="note-E-2"></div>
                    <div className="note-E-1"></div>
                    <div className="note-highE-1"></div>
                </>
                );
            } else if (newSelectedRoot === '5') {
                return (
                    <>    
                    <div className="note-F-6"></div>
                    <div className="note-F-5"></div>
                    <div className="note-F-4"></div>
                    <div className="note-F-3"></div>
                    <div className="note-F-2"></div>
                    <div className="note-F-1"></div>
                </>
                );
            } else if (newSelectedRoot === '6') {
                return (
                    <>    
                    <div className="note-Fs-Gb-6"></div>
                    <div className="note-Fs-Gb-5"></div>
                    <div className="note-Fs-Gb-4"></div>
                    <div className="note-Fs-Gb-3"></div>
                    <div className="note-Fs-Gb-2"></div>
                    <div className="note-Fs-Gb-1"></div>
                </>
                );
            } else if (newSelectedRoot === '7') {
                return (
                    <>    
                    <div className="note-G-6"></div>
                    <div className="note-G-5"></div>
                    <div className="note-G-4"></div>
                    <div className="note-G-3"></div>
                    <div className="note-highG-3"></div>
                    <div className="note-G-2"></div>
                    <div className="note-G-1"></div>
                </>
                );
            } else if (newSelectedRoot === '8') {
                return (
                    <>    
                    <div className="note-Gs-Ab-6"></div>
                    <div className="note-Gs-Ab-5"></div>
                    <div className="note-Gs-Ab-4"></div>
                    <div className="note-Gs-Ab-3"></div>
                    <div className="note-Gs-Ab-2"></div>
                    <div className="note-Gs-Ab-1"></div>
                </>
                );
            } else if (newSelectedRoot === '9') {
                return (
                    <>    
                    <div className="note-A-6"></div>
                    <div className="note-A-5"></div>
                    <div className="note-highA-5"></div>
                    <div className="note-A-4"></div>
                    <div className="note-A-3"></div>
                    <div className="note-A-2"></div>
                    <div className="note-A-1"></div>
                </>
                );
            } else if (newSelectedRoot === '10') {
                return (
                    <>    
                    <div className="note-As-Bb-6"></div>
                    <div className="note-As-Bb-5"></div>
                    <div className="note-As-Bb-4"></div>
                    <div className="note-As-Bb-3"></div>
                    <div className="note-As-Bb-2"></div>
                    <div className="note-As-Bb-1"></div>
                </>
                );
            } else if (newSelectedRoot === '11') {
                return (
                    <>    
                    <div className="note-B-6"></div>
                    <div className="note-B-5"></div>
                    <div className="note-B-4"></div>
                    <div className="note-B-3"></div>
                    <div className="note-B-2"></div>
                    <div className="note-highB-2"></div>
                    <div className="note-B-1"></div>
                </>
                );
            } else {
                return null;
            }
    }
    
    const handleTargetLighter = (selectedRoot, newSelectedTarget) => {
        const root = parseInt(selectedRoot);
        const intervals = {
            'P1': 0,
            'm2': 1,
            'M2': 2,
            'm3': 3,
            "M3": 4,
            'P4': 5,
            'Tritone': 6,
            'P5': 7,
            'm6': 8,
            'M6': 9,
            'm7': 10,
            'M7': 11
        }
        let target = root + intervals[newSelectedTarget]
        if (target > 11) {
            target = root + intervals[newSelectedTarget] - 12;
        }

        if (target === 0) {
            return (
                <>    
                    <div className="target-C-6"></div>
                    <div className="target-C-5"></div>
                    <div className="target-C-4"></div>
                    <div className="target-C-3"></div>
                    <div className="target-C-2"></div>
                    <div className="target-C-1"></div>
                </>
            )
    } else if (target === 1) {
        return (
            <>    
                <div className="target-Cs-Db-6"></div>
                <div className="target-Cs-Db-5"></div>
                <div className="target-Cs-Db-4"></div>
                <div className="target-Cs-Db-3"></div>
                <div className="target-Cs-Db-2"></div>
                <div className="target-Cs-Db-1"></div>
            </>
            );
    } else if (target === 2) {
        return (
            <>    
            <div className="target-D-6"></div>
            <div className="target-D-5"></div>
            <div className="target-D-4"></div>
            <div className="target-highD-4"></div>
            <div className="target-D-3"></div>
            <div className="target-D-2"></div>
            <div className="target-D-1"></div>
        </>
        );;
    } else if (target === 3) {
        return (
            <>    
            <div className="target-Ds-Eb-6"></div>
            <div className="target-Ds-Eb-5"></div>
            <div className="target-Ds-Eb-4"></div>
            <div className="target-Ds-Eb-3"></div>
            <div className="target-Ds-Eb-2"></div>
            <div className="target-Ds-Eb-1"></div>
        </>
        );
    } else if (target === 4) {
        return (
            <>    
            <div className="target-E-6"></div>
            <div className="target-highE-6"></div>
            <div className="target-E-5"></div>
            <div className="target-E-4"></div>
            <div className="target-E-3"></div>
            <div className="target-E-2"></div>
            <div className="target-E-1"></div>
            <div className="target-highE-1"></div>
        </>
        );
    } else if (target === 5) {
        return (
            <>    
            <div className="target-F-6"></div>
            <div className="target-F-5"></div>
            <div className="target-F-4"></div>
            <div className="target-F-3"></div>
            <div className="target-F-2"></div>
            <div className="target-F-1"></div>
        </>
        );
    } else if (target === 6) {
        return (
            <>    
            <div className="target-Fs-Gb-6"></div>
            <div className="target-Fs-Gb-5"></div>
            <div className="target-Fs-Gb-4"></div>
            <div className="target-Fs-Gb-3"></div>
            <div className="target-Fs-Gb-2"></div>
            <div className="target-Fs-Gb-1"></div>
        </>
        );
    } else if (target === 7) {
        return (
            <>    
            <div className="target-G-6"></div>
            <div className="target-G-5"></div>
            <div className="target-G-4"></div>
            <div className="target-G-3"></div>
            <div className="target-highG-3"></div>
            <div className="target-G-2"></div>
            <div className="target-G-1"></div>
        </>
        );
    } else if (target === 8) {
        return (
            <>    
            <div className="target-Gs-Ab-6"></div>
            <div className="target-Gs-Ab-5"></div>
            <div className="target-Gs-Ab-4"></div>
            <div className="target-Gs-Ab-3"></div>
            <div className="target-Gs-Ab-2"></div>
            <div className="target-Gs-Ab-1"></div>
        </>
        );
    } else if (target === 9) {
        return (
            <>    
            <div className="target-A-6"></div>
            <div className="target-A-5"></div>
            <div className="target-highA-5"></div>
            <div className="target-A-4"></div>
            <div className="target-A-3"></div>
            <div className="target-A-2"></div>
            <div className="target-A-1"></div>
        </>
        );
    } else if (target === 10) {
        return (
            <>    
            <div className="target-As-Bb-6"></div>
            <div className="target-As-Bb-5"></div>
            <div className="target-As-Bb-4"></div>
            <div className="target-As-Bb-3"></div>
            <div className="target-As-Bb-2"></div>
            <div className="target-As-Bb-1"></div>
        </>
        );
    } else if (target === 11) {
        return (
            <>    
            <div className="target-B-6"></div>
            <div className="target-B-5"></div>
            <div className="target-B-4"></div>
            <div className="target-B-3"></div>
            <div className="target-B-2"></div>
            <div className="target-highB-2"></div>
            <div className="target-B-1"></div>
        </>
        );
    }
}
    

    return(
        <>
            <div className="container"><h1>Guitar Neck - Intervals</h1>
                <p>Select a pitch from the left drop down menu, then select an interval from the right drop down menu. and all the instances of that root pitch will light up in red, and the instances of the interval from the root will light up in blue.</p>
            </div>
            <select onChange={handleRootChange}>
                <option value="default">Select Root</option>
                <option value="0">C</option>
                <option value="1">C# / Db</option>
                <option value="2">D</option>
                <option value="3">D# / Eb</option>
                <option value="4">E</option>
                <option value="5">F</option>
                <option value="6">F# / Gb</option>
                <option value="7">G</option>
                <option value="8">G# / Ab</option>
                <option value="9">A</option>
                <option value="10">A# / Bb</option>
                <option value="11">B</option>
            </select>
            <select onChange={handleTargetChange}>
                <option value="default">Select Interval</option>
                <option value="P1">Perfect Unison</option>
                <option value="m2">Minor 2nd</option>
                <option value="M2">Major 2nd</option>
                <option value="m3">Minor 3rd</option>
                <option value="M3">Major 3rd</option>
                <option value="P4">Perfect 4th</option>
                <option value="Tritone">Tritone</option>
                <option value="P5">Perfect 5th</option>
                <option value="m6">Minor 6th</option>
                <option value="M6">Major 6th</option>
                <option value="m7">Minor 7th</option>
                <option value="M7">Major 7th</option>
            </select>
            <div className="neck-grid">
                <div className="fret-1"></div>
                <div className="fret-2"></div>
                <div className="fret-3"></div>
                <div className="fret-4"></div>
                <div className="fret-5"></div>
                <div className="fret-6"></div>
                <div className="fret-7"></div>
                <div className="fret-8"></div>
                <div className="fret-9"></div>
                <div className="fret-10"></div>
                <div className="fret-11"></div>
                <div className="fret-12"></div>
                <div className="fret-13"></div>
                <div className="fret-14"></div>
                <div className="nut"></div>
                <div className="string-6"></div>
                <div className="string-5"></div>
                <div className="string-4"></div>
                <div className="string-3"></div>
                <div className="string-2"></div>
                <div className="string-1"></div>
                <div className="diamond-inlay-1">
                    <img src="/diamond-inlay.png" alt="diamond inlay" width="30px" height="auto" />
                </div>
                <div className="diamond-inlay-2">
                    <img src="/diamond-inlay.png" alt="diamond inlay" width="30px" height="auto" />
                </div>
                <div className="diamond-inlay-3">
                    <img src="/diamond-inlay.png" alt="diamond inlay" width="30px" height="auto" />
                </div>
                <div className="diamond-inlay-4">
                    <img src="/diamond-inlay.png" alt="diamond inlay" width="30px" height="auto" />
                </div>
                <div className="diamond-inlay-5">
                    <img src="/diamond-inlay.png" alt="diamond inlay" width="30px" height="auto" />
                </div>
                <div className="diamond-inlay-6">
                    <img src="/diamond-inlay.png" alt="diamond inlay" width="30px" height="auto" />
                </div>
                {handleRootLighter(selectedRoot)}
                {handleTargetLighter(selectedRoot, selectedTarget)}
            </div>
        </>
    )
}
export default GuitarNeckIntervals;