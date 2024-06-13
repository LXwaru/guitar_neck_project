import { useState } from 'react'
// import GuitarNeckIntervals from './GuitarNeckIntervals'

const GuitarNeckTriads = () => {

    const [selectedRoot, setSelectedRoot] = useState();
    const [selectedTriad, setSelectedTriad] = useState([]);

    const handleRootChange = (e) => {
        setSelectedRoot(e.target.value);

    }

    const handleTriadChange = (e) => {
        setSelectedTriad(e.target.value);

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
            )
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
            )
        } else if (newSelectedRoot === '3') {
            return (
                <>
                    <div className="note-Ds-Eb-6"></div>
                    <div className="note-Ds-Eb-5"></div>
                    <div className="note-Ds-Eb-4"></div>
                    <div className="note-Ds-Eb-3"></div>
                    <div className="note-Ds-Eb-2"></div>
                    <div className="note-Ds-Eb-1"></div>
                </>
            )
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
            )
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
            )
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
            )
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
            )
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
            )
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
            )
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
            )
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
            )
        }
    } 

    const handleTriadLighter = (newSelectedRoot, newSelectedTriad) => {
        const root = parseInt(newSelectedRoot);
        const M3 = root + 4;
        const m3 = root + 3;
        const P5 = root + 7;
        const TT = root + 6;
        const A5 = root + 8;
        const triad = [];
        if (newSelectedTriad === 'dim') {
            triad.push(TT, m3);
        } else if (newSelectedTriad === 'm') {
            triad.push(m3, P5);
        } else if (newSelectedTriad === 'M') {
            triad.push(M3, P5);
        } else if (newSelectedTriad === 'Aug') {
            triad.push(M3, A5);
        }
        const cleanTriad = triad.map((note) => {
            if (note > 11) {
                return note - 12;
            } else {
                return note;
            }
        })

            return (
                <>
                    {cleanTriad.map((note) => {
                        if (note === 0) {
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
                        } else if (note === 1) {
                            return (
                                <>
                                    <div className="target-Cs-Db-6"></div>
                                    <div className="target-Cs-Db-5"></div>
                                    <div className="target-Cs-Db-4"></div>
                                    <div className="target-Cs-Db-3"></div>
                                    <div className="target-Cs-Db-2"></div>
                                    <div className="target-Cs-Db-1"></div>
                                </>
                            )
                        } else if (note === 2) {
                            return (
                                <>
                                    <div className="target-D-6"></div>
                                    <div className="target-D-5"></div>
                                    <div className="target-D-4"></div>
                                    <div className="target-D-3"></div>
                                    <div className="target-highD-4"></div>
                                    <div className="target-D-2"></div>
                                    <div className="target-D-1"></div>
                                </>
                            )
                        } else if (note === 3) {
                            return (
                                <>
                                    <div className="target-Ds-Eb-6"></div>
                                    <div className="target-Ds-Eb-5"></div>
                                    <div className="target-Ds-Eb-4"></div>
                                    <div className="target-Ds-Eb-3"></div>
                                    <div className="target-Ds-Eb-2"></div>
                                    <div className="target-Ds-Eb-1"></div>
                                </>
                            )
                        } else if (note === 4) {
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
                            )
                        } else if (note === 5) {
                            return (
                                <>
                                    <div className="target-F-6"></div>
                                    <div className="target-F-5"></div>
                                    <div className="target-F-4"></div>
                                    <div className="target-F-3"></div>
                                    <div className="target-F-2"></div>
                                    <div className="target-F-1"></div>
                                </>
                            )
                        } else if (note === 6) {
                            return (
                                <>
                                    <div className="target-Fs-Gb-6"></div>
                                    <div className="target-Fs-Gb-5"></div>
                                    <div className="target-Fs-Gb-4"></div>
                                    <div className="target-Fs-Gb-3"></div>
                                    <div className="target-Fs-Gb-2"></div>
                                    <div className="target-Fs-Gb-1"></div>
                                </>
                            )
                        } else if (note === 7) {
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
                            )
                        } else if (note === 8) {
                            return (
                                <>
                                    <div className="target-Gs-Ab-6"></div>
                                    <div className="target-Gs-Ab-5"></div>
                                    <div className="target-Gs-Ab-4"></div>
                                    <div className="target-Gs-Ab-3"></div>
                                    <div className="target-Gs-Ab-2"></div>
                                    <div className="target-Gs-Ab-1"></div>
                                </>
                            )
                        } else if (note === 9) {
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
                            )
                        } else if (note === 10) {
                            return (
                                <>
                                    <div className="target-As-Bb-6"></div>
                                    <div className="target-As-Bb-5"></div>
                                    <div className="target-As-Bb-4"></div>
                                    <div className="target-As-Bb-3"></div>
                                    <div className="target-As-Bb-2"></div>
                                    <div className="target-As-Bb-1"></div>
                                </>
                            )
                        } else if (note === 11) {
                            return (
                                <>
                                    <div className="target-B-6"></div>
                                    <div className="target-B-5"></div>
                                    <div className="target-B-4"></div>
                                    <div className="target-B-3"></div>
                                    <div className="target-B-2"></div>
                                    <div className="target-highB-"></div>
                                    <div className="target-B-1"></div>
                                </>
                            )
                        }
                    
                    },)}
                </>
            )

    }


    return(
        <>
            <div className="container">
            <h1>Guitar Neck - Triads</h1>

                <p>Select a pitch from the left drop down menu, then select a triad sonority from the right drop down menu. and all the instances of that root pitch will light up in red, and the instances of the chord tones will light up in blue.</p>
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
            <select onChange={handleTriadChange} key ="triad">
                <option value="default">Select Triad</option>
                <option value="dim">dim, º, diminished</option>
                <option value="m">min, m, minor</option>
                <option value="M">Maj, M, Major</option>
                <option value="Aug">Aug, +, Augmented</option>
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
                {handleTriadLighter(selectedRoot, selectedTriad)}
            </div>
        </>
    )
}
export default GuitarNeckTriads;