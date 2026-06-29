// riff-vault-starter.ts
// Your rig, encoded. This is the DATA layer - the React components
// (RiffList, RiffCard, AddRiffForm) meant to be expanded upon
//
// Tuning notes are written low string -> high string
// This can be split into types.ts / tunings.ts / seed.ts later if you want

export type Status = 'learning' | 'got-it' | 'rusty';

export interface Tuning {
    id: string;
    label: string;   // 'Drop E'
    guitar: string;  // '8-string'
    strings: number; // 8
    notes: string[]; // low --> high
}

export interface Riff {
    id: string;
    title: string;
    artist: string;
    tuningId: string;
    difficulty: 1 | 2 | 3 | 4 | 5;
    status: Status;
    notes: string;
    link: string;        // tab or video URL
    addedAt: string;     // ISO date, e.g. '2026-06-27'
}

// --- Your four guitars ---
export const TUNINGS: Tuning[] = [
    { 
        id: 'drop-e-8', 
        label: 'Drop E', 
        guitar: '8-string', 
        strings: 8,
        notes: ['E', 'B', 'E', 'A', 'D', 'G', 'B', 'E']
    },
    {
        id: 'drop-c-6',
        label: 'Drop-C',
        guitar: '6-string',
        strings: 6,
        notes: ['C', 'G', 'C', 'F', 'A', 'D']
    },
    {
        id: 'd-standard-6',
        label: 'D Standard',
        guitar: '6-string',
        strings: 6,
        notes: ['D', 'G', 'C', 'F', 'A', 'D']
    },
    {
        id: 'standard-7',
        label: 'Standard',
        guitar: '7-string',
        strings: 7,
        notes: ['B', 'E', 'A', 'D', 'G', 'B', 'E']
    },
];

// --- Example riffs
export const SEED_RIFFS: Riff[] =[
    {
        id: '1',
        title: 'Bleed',
        artist: 'Meshuggah',
        tuningId: 'drop-e-8',
        difficulty: 5,
        status: 'learning',
        notes: 'Right-hand stamina destroyer. Metronome from 90bpm.',
        link: '',
        addedAt: '2026-06-2027',
    },
    {
        id: '2',
        title: 'The Dance of Eternity',
        artist: 'Dream Theater',
        tuningId: 'standard-7',
        difficulty: 5,
        status: 'rusty',
        notes: 'Bonkers number of time changes. Good luck lol.',
        link: '',
        addedAt: '2026-06-2027',
    },
    {
        id: '3',
        title: 'Set the World on Fire',
        artist: 'Symphony X',
        tuningId: 'd-standard-6',
        difficulty: 5,
        status: 'got-it',
        notes: 'Romeo cleanup pass. Lock the alternate picking.',
        link: '',
        addedAt: '2026-06-2027',
    },
];